// kriteria id untuk loop data berdasarkan id

const kriteriaid = [
  "1a",
  "1b",
  "1c",
  "1r",
  "2a",
  "2b",
  "2r",
  "3a",
  "3b",
  "3r",
  "4a",
  "4b",
  "4c",
  "4r",
  "5a",
  "5b",
  "5r",
  "6a",
  "6b",
  "6r",
  "7a",
  "7b",
  "7r",
];
export function hitungKumuhRtAkhir(
  investasi,
  kumuhRTAwal,
  headerRT,
  tahun = 0
) {
  // kumuh akhir = kumuh awal - investasi
  let kumuhRTAkhir = [];
  kumuhRTAkhir["kawasan"] = kumuhRTAwal.kawasan;
  kumuhRTAkhir["rt"] = kumuhRTAwal.rt;
  if (tahun != 0) kumuhRTAkhir["tahun"] = tahun;
  else kumuhRTAkhir["tahun"] = new Date().getFullYear();

  // map investasi menjadi total volume per kriteria
  let dataVolume = [];
  if (investasi.length > 0) {
    console.log(investasi);
    investasi.forEach((element) => {
      if (!dataVolume[element.idKriteria]) {
        dataVolume[element.idKriteria] = parseFloat(element.volume) || 0;
      } else {
        dataVolume[element.idKriteria] += parseFloat(element.volume) || 0;
      }
    });
  }
  console.log(dataVolume);

  // loop per id kriteria
  kumuhRTAkhir["totalNilai"] = 0;
  let rata = [];
  let totalRata = [];
  kriteriaid.forEach((id) => {
    if (id[1] == "r") {
      // masukkan rata rata aspek
      let jumlah = rata.reduce((old, late) => old + late);
      kumuhRTAkhir[id] = jumlah / rata.length;
      totalRata.push(kumuhRTAkhir[id]);
      rata = [];
    } else {
      if (dataVolume[id]) {
        kumuhRTAkhir[`${id}v`] = kumuhRTAwal[`${id}v`] - dataVolume[id];
        kumuhRTAkhir[`${id}v`] < 0 ? (kumuhRTAkhir[`${id}v`] = 0) : "";
        // hitung p dan n
        kumuhRTAkhir[`${id}p`] = hitungProsenKumuh(
          kumuhRTAkhir[`${id}v`],
          id,
          headerRT
        );
        kumuhRTAkhir[`${id}n`] = hitungNilaiKumuh(kumuhRTAkhir[`${id}p`]);
      } else {
        kumuhRTAkhir[`${id}v`] =
          kumuhRTAwal[`${id}v`] > 0 ? kumuhRTAwal[`${id}v`] : 0;
        kumuhRTAkhir[`${id}p`] =
          kumuhRTAwal[`${id}p`] > 0 ? kumuhRTAwal[`${id}p`] : 0;
        kumuhRTAkhir[`${id}n`] =
          kumuhRTAwal[`${id}n`] > 0 ? kumuhRTAwal[`${id}n`] : 0;
      }
      kumuhRTAkhir["totalNilai"] += parseInt(kumuhRTAkhir[`${id}n`]);
      rata.push(kumuhRTAkhir[`${id}p`]);
    }
  });

  // data footer total (tingkat Kekumuhan)
  kumuhRTAkhir["tingkatKekumuhan"] = hitungTingkatKekumuhan(
    kumuhRTAkhir["totalNilai"]
  );
  kumuhRTAkhir["ratarataKekumuhan"] =
    totalRata.reduce((a, b) => a + b) / totalRata.length;
  // kontribusi penanganan
  kumuhRTAkhir["kontribusiPenanganan"] =
    (kumuhRTAwal["ratarataKekumuhan"] - kumuhRTAkhir["ratarataKekumuhan"]) /
    kumuhRTAwal["ratarataKekumuhan"];
  kumuhRTAkhir["kontribusiPenanganan"] > 1
    ? (kumuhRTAkhir["kontribusiPenanganan"] = 1)
    : "";
  return kumuhRTAkhir;
}

function hitungProsenKumuh(volume, id, headerRT) {
  switch (id) {
    case "1a":
    case "1c":
    case "7a":
    case "7b":
      return volume / headerRT.jumlahBangunan;
      break;
    case "1b":
    case "4a":
      return volume / headerRT.luasVerifikasi;
      break;
    case "2a":
    case "2b":
      return volume / headerRT.panjangJalanIdeal;
      break;
    case "3a":
    case "3b":
    case "5a":
    case "5b":
    case "6a":
    case "6b":
      return volume / headerRT.jumlahKK;
      break;
    case "4b":
    case "4c":
      return volume / headerRT.panjangDrainaseIdeal;
      break;
  }
}

function hitungNilaiKumuh(prosen) {
  if (prosen >= 0.75995) return 5;
  if (prosen >= 0.50995) return 3;
  if (prosen >= 0.24995) return 1;
  return 0;
}
function hitungTingkatKekumuhan(nilai) {
  if (nilai >= 60) return "KB";
  if (nilai >= 38) return "KS";
  if (nilai >= 16) return "KR";
  else return "TK";
}

function hitungProsenDanNilai(volume, headerRT, tahun = 0) {
  let kumuhRTAkhir = [];
  kumuhRTAkhir["kawasan"] = volume.kawasan;
  kumuhRTAkhir["rt"] = volume.rt;
  if (tahun != 0) kumuhRTAkhir["tahun"] = tahun;
  else kumuhRTAkhir["tahun"] = new Date().getFullYear();
  kumuhRTAkhir["totalNilai"] = 0;
  let rata = [];
  let totalRata = [];
  kriteriaid.forEach((id) => {
    if (id[1] == "r") {
      // masukkan rata rata aspek
      let jumlah = rata.reduce((old, late) => old + late);
      kumuhRTAkhir[id] = jumlah / rata.length;
      totalRata.push(kumuhRTAkhir[id]);
      rata = [];
    } else {
      kumuhRTAkhir[`${id}v`] = volume[id];
      kumuhRTAkhir[`${id}v`] < 0 ? (kumuhRTAkhir[`${id}v`] = 0) : "";
      // hitung p dan n
      kumuhRTAkhir[`${id}p`] = hitungProsenKumuh(
        kumuhRTAkhir[`${id}v`],
        id,
        headerRT
      );
      kumuhRTAkhir[`${id}n`] = hitungNilaiKumuh(kumuhRTAkhir[`${id}p`]);

      kumuhRTAkhir["totalNilai"] += parseInt(kumuhRTAkhir[`${id}n`]);
      rata.push(kumuhRTAkhir[`${id}p`]);
    }
  });
  kumuhRTAkhir["tingkatKekumuhan"] = hitungTingkatKekumuhan(
    kumuhRTAkhir["totalNilai"]
  );
  kumuhRTAkhir["ratarataKekumuhan"] =
    totalRata.reduce((a, b) => a + b) / totalRata.length;
  // kontribusi penanganan
  kumuhRTAkhir["kontribusiPenanganan"] = 0;
  kumuhRTAkhir["kontribusiPenanganan"] > 1
    ? (kumuhRTAkhir["kontribusiPenanganan"] = 1)
    : "";
  return kumuhRTAkhir;
}

export default hitungKumuhRtAkhir;
export {
  hitungProsenKumuh,
  hitungNilaiKumuh,
  hitungTingkatKekumuhan,
  hitungProsenDanNilai,
};
