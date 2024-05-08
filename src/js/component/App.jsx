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
} from "../loadData";
import Title from "./Title";
import Card from "./Card";
import Header from "./Header";
import LeafletMap from "./LeafletMap";
import TabPane from "./TabPane";
import hitungKumuhRtAkhir from "../rumus";

const DataKumuh = createContext(null);

const App = () => {
  const [kumuhTerpilih, setKumuhTerpilih] = useState([]);
  const [coordinate, setCoordinate] = useState([]);
  const [awalAkhir, setAwalAkhir] = useState("awal");
  const [tahun, setTahun] = useState(2024);
  const [investasi, setInvestasi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = await bukaDatabase();
      const data = await getDataInvestasi(db);
      setInvestasi(data);
    };
    fetchData();
  }, []);

  return (
    <StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <DataKumuh.Provider value={kumuhTerpilih}>
          <div className="boxed_wrapper">
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
              <TabPane clickAwalAkhir={clickAwalAkhir}></TabPane>
            </Card>
          </div>
        </DataKumuh.Provider>
      </Suspense>
    </StrictMode>
  );

  function handleTahun(t) {
    setTahun(t);
    if (kumuhTerpilih.kumuh === "k") {
      LoadKawasanKumuh(kumuhTerpilih.k);
      console.log(kumuhTerpilih.dataKumuh);
    } else if (kumuhTerpilih.kumuh === "r") {
      loadRTKumuh(kumuhTerpilih.r);
      console.log(kumuhTerpilih.dataKumuh);
    }
  }

  function clickAwalAkhir(awalAkhir) {
    setAwalAkhir(awalAkhir);
  }

  function LoadKawasanKumuh(k) {
    const semuaRT = rtrw.filter((r) => r.kawasan === k.id);
    let kumuhAkhir = kumuhKawasan.find(
      (k) => k.kawasan === k.id && k.tahun === tahun
    );
    console.log(tahun);
    const dataKumuh = kumuhKawasan.find(
      (kumuh) => kumuh.kawasan === k.id && kumuh.tahun === tahun - 1
    );

    if (tahun === new Date().getFullYear()) {
      kumuhAkhir = hitungKumuhRtAkhir(investasi, dataKumuh, k);
    }

    setKumuhTerpilih({ k, semuaRT, kumuh: "k", dataKumuh, kumuhAkhir });
    if (awalAkhir === "awal") {
      cariCoordinate(k.kawasan, "", dataKumuh.tingkatKekumuhan);
    } else if (awalAkhir === "akhir") {
      cariCoordinate(k.kawasan, "", kumuhAkhir.tingkatKekumuhan);
    }
  }
  function loadRTKumuh(r) {
    const dataKumuh = kumuhRT.find(
      (kumuh) => kumuh.rt === r.id && kumuh.tahun === tahun - 1
    );
    let kumuhAkhir = kumuhRT.find((r) => r.rt === r.id && r.tahun === tahun);
    if (tahun === new Date().getFullYear()) {
      kumuhAkhir = hitungKumuhRtAkhir(investasi, dataKumuh, r);
    }

    setKumuhTerpilih({
      r,
      semuaRT: kumuhTerpilih.semuaRT,
      k: kumuhTerpilih.k,
      kumuh: "r",
      dataKumuh,
      kumuhAkhir,
    });
    if (awalAkhir === "awal") {
      cariCoordinate(
        kumuhTerpilih.k.kawasan,
        r.rtrw,
        dataKumuh.tingkatKekumuhan
      );
    } else if (awalAkhir === "akhir") {
      cariCoordinate(
        kumuhTerpilih.k.kawasan,
        r.rtrw,
        kumuhAkhir.tingkatKekumuhan
      );
    }
  }

  function cariCoordinate(kelurahan, rtrw = "", tingkatKekumuhan) {
    let kel = [];
    if (rtrw == "") {
      kel = latlng.find((k) => k.kelurahan === kelurahan);
      kel["description"] = kelurahan + " - " + tingkatKumuh(tingkatKekumuhan);
    } else {
      kel = latlng.find(
        (k) => k.kelurahan === kelurahan && k.kodeRTRW === rtrw
      );
      kel["description"] =
        kelurahan + " - " + rtrw + " - " + tingkatKumuh(tingkatKekumuhan);
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
