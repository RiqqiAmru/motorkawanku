import React, {
  Suspense,
  StrictMode,
  useState,
  createContext,
  useEffect,
} from "react";
import { getDataInvestasi, bukaDatabase } from "../indexedDB";
import {
  kecamatan as kawasan,
  kota,
  rtrw,
  kumuhKawasan,
  kumuhRT,
  latlng,
  semuaInvestasi,
} from "../loadData";
import Title from "./Title";
import Card from "./Card";
import Header from "./Header";
import LeafletMap from "./LeafletMap";
import TabPane from "./TabPane";
import hitungKumuhRtAkhir from "../rumus";
import ModalTambahKegiatan from "./ModalTambahKegiatan";
import AlertToast from "./AlertToast";

const DataKumuh = createContext(null);

const App = () => {
  const [kumuhTerpilih, setKumuhTerpilih] = useState([]);
  const [coordinate, setCoordinate] = useState([]);
  const [tahun, setTahun] = useState(2024);
  const [investasi, setInvestasi] = useState([]);

  useEffect(() => {
    if (tahun === new Date().getFullYear()) {
      const fetchData = async () => {
        const db = await bukaDatabase();
        const data = await getDataInvestasi(db);
        setInvestasi(data);
      };
      fetchData();
    }
    if (kumuhTerpilih.kumuh === "k") {
      LoadKawasanKumuh(kumuhTerpilih.k);
    } else if (kumuhTerpilih.kumuh === "r") {
      loadRTKumuh(kumuhTerpilih.r);
    }
    console.log("state investasi", investasi);
  }, [tahun]);

  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <DataKumuh.Provider value={kumuhTerpilih}>
          <div className="boxed_wrapper">
            <AlertToast></AlertToast>
            <Title></Title>
            <Card>
              <Header
                kota={kota}
                kawasan={kawasan}
                loadKawasanKumuh={LoadKawasanKumuh}
                loadRTKumuh={loadRTKumuh}
                kawasanKumuh={kumuhTerpilih}
                handleTahun={handleTahun}
                tahun={tahun}
              ></Header>
              <LeafletMap coordinate={coordinate}></LeafletMap>
              <TabPane tahun={tahun}></TabPane>
            </Card>
            <ModalTambahKegiatan></ModalTambahKegiatan>
          </div>
        </DataKumuh.Provider>
      </Suspense>
    </StrictMode>
  );

  function handleTahun(t) {
    setTahun(t);
  }

  function LoadKawasanKumuh(k) {
    const semuaRT = rtrw.filter((r) => r.kawasan === k.id);
    let kumuhAkhir = kumuhKawasan.find(
      (kumuh) => kumuh.kawasan === k.id && kumuh.tahun === tahun
    );
    const dataKumuh = kumuhKawasan.find(
      (kumuh) => kumuh.kawasan === k.id && kumuh.tahun === tahun - 1
    );
    if (tahun === new Date().getFullYear()) {
      // kumuh akhir
      kumuhAkhir = hitungKumuhRtAkhir(investasi, dataKumuh, k);
    } else {
      // investasi
      const investasiKawasan = semuaInvestasi.filter(
        (inv) => inv.idKawasan === k.id && inv.tahun === tahun
      );
      setInvestasi(investasiKawasan);
    }

    setKumuhTerpilih({ k, semuaRT, kumuh: "k", dataKumuh, kumuhAkhir });
    cariCoordinate(k.kawasan, "", dataKumuh.tingkatKekumuhan, tahun);
  }
  function loadRTKumuh(r) {
    const dataKumuh = kumuhRT.find(
      (kumuh) => kumuh.rt === r.id && kumuh.tahun === tahun - 1
    );
    let kumuhAkhir = kumuhRT.find(
      (kumuh) => kumuh.rt === r.id && kumuh.tahun === tahun
    );
    if (tahun === new Date().getFullYear()) {
      // kumuh Akhir
      kumuhAkhir = hitungKumuhRtAkhir(investasi, dataKumuh, r);
    } else {
      // investasi
      const investasiRT = semuaInvestasi.filter(
        (inv) =>
          inv.idRTRW === r.id &&
          inv.tahun === tahun &&
          inv.idKawasan === r.kawasan
      );
      setInvestasi(investasiRT);
    }
    setKumuhTerpilih({
      r,
      semuaRT: kumuhTerpilih.semuaRT,
      k: kumuhTerpilih.k,
      kumuh: "r",
      dataKumuh,
      kumuhAkhir,
    });
    cariCoordinate(
      kumuhTerpilih.k.kawasan,
      r.rtrw,
      dataKumuh.tingkatKekumuhan,
      tahun
    );
  }

  function cariCoordinate(kelurahan, rtrw = "", tingkatKekumuhan, tahun) {
    let kel = [];
    if (rtrw == "") {
      kel = latlng.find((k) => k.kelurahan === kelurahan);
      kel["description"] =
        kelurahan + " - " + tingkatKumuh(tingkatKekumuhan) + " - " + tahun;
    } else {
      kel = latlng.find(
        (k) => k.kelurahan === kelurahan && k.kodeRTRW === rtrw
      );
      kel["description"] =
        kelurahan +
        " - " +
        rtrw +
        " - " +
        tingkatKumuh(tingkatKekumuhan) +
        " - " +
        tahun;
    }
    kel["color"] = tentukanWarna(tingkatKekumuhan);
    setCoordinate(kel);
  }
};

function tingkatKumuh(nilai) {
  switch (nilai) {
    case "KB":
      return "Kumuh Berat";
      break;
    case "KS":
      return "Kumuh Sedang";
      break;
    case "KR":
      return "Kumuh Ringan";
      break;
    case "TK":
      return "Tidak Kumuh";
      break;
    default:
      return "";
  }
}

function tentukanWarna(nilai) {
  switch (nilai) {
    case "KB":
      return { color: "red", fillColor: "red" };
      break;
    case "KS":
      return { color: "#ffbb05", fillColor: "#ffbb05" };
      break;
    case "KR":
      return { color: "yellow", fillColor: "yellow" };
      break;
    case "TK":
      return { color: "green", fillColor: "green" };
      break;
    default:
      return { color: "blue", fillColor: "blue" };
  }
}

export default App;
export { DataKumuh as KumuhTerpilih };
