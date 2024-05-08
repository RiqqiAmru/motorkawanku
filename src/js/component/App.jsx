import React, {
  Suspense,
  StrictMode,
  useState,
  createContext,
  useEffect,
} from "react";
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
import Baseline from "./Baseline";
import Investasi from "./Investasi";
import KumuhAkhir from "./KumuhAkhir";

const DataKumuh = createContext(null);

const App = () => {
  const [kumuhTerpilih, setKumuhTerpilih] = useState([]);
  const [coordinate, setCoordinate] = useState([]);

  // const [investasi, setInvestasi] = React.useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getDataInvestasi();
  //     setInvestasi(data);
  //   };
  //   fetchData();
  // }, [kumuhRTawal]);

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
              ></Header>
              <LeafletMap coordinate={coordinate}></LeafletMap>
              <TabPane></TabPane>
            </Card>
          </div>
        </DataKumuh.Provider>
      </Suspense>
    </StrictMode>
  );

  function LoadKawasanKumuh(k) {
    const semuaRT = rtrw.filter((r) => r.kawasan === k.id);
    const dataKumuh = kumuhKawasan.find((kumuh) => kumuh.kawasan === k.id);

    setKumuhTerpilih({ k, semuaRT, kumuh: "k", dataKumuh });
    cariCoordinate(k.kawasan, "", dataKumuh.tingkatKekumuhan);
  }
  function loadRTKumuh(r) {
    const dataKumuh = kumuhRT.find((kumuh) => kumuh.rt === r.id);

    setKumuhTerpilih({
      r,
      semuaRT: kumuhTerpilih.semuaRT,
      k: kumuhTerpilih.k,
      kumuh: "r",
      dataKumuh,
    });
    cariCoordinate(kumuhTerpilih.k.kawasan, r.rtrw, dataKumuh.tingkatKekumuhan);
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
