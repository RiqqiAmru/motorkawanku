import { aspekKumuh } from "./loadData";
import {
  bukaDatabase,
  getDataInvestasi,
  getDataInvestasiByKumuhRT,
  hapusDataInvestasi,
} from "./indexedDB";
import trash from "../../public/trash.svg";
import edit from "../../public/edit.svg";
import { formatRupiah } from "./util";

const loadBodyTableInvestasi = async (idKumuhRT) => {
  let db = await bukaDatabase();
  let data = await getDataInvestasi(db);

  const table = document.getElementById("bodyTabelInvestasi");
  table.innerHTML = "";
  for (const aspek in aspekKumuh) {
    const oldRow = table.insertRow();
    const newCell = oldRow.insertCell();
    newCell.textContent = aspek;
    newCell.id = aspek[0];

    // bagi data investasi berdasarkan aspek
    const dataAspek = data.filter((d) => d.kriteria[0] === aspek[0]);

    for (let i = 0; i < aspekKumuh[aspek].length; i++) {
      // jika data pertama maka insert cel
      const id = aspek[0] + aspekKumuh[aspek][i][0];
      if (i === 0) {
        const newCell = oldRow.insertCell();
        newCell.innerHTML = `${aspekKumuh[aspek][i]} <br /> ${btnTambah(id)} `;
        newCell.id = id;

        const dataKriteria = dataAspek.filter(
          (d) => d.kriteria[1] === aspekKumuh[aspek][i][0]
        );

        // masukkan data investasi pertama atau data kosong jika tidak ada
        if (dataKriteria.length > 0) {
          insertDataKegiatan(oldRow, dataKriteria);
        } else {
          insertCellKosong(oldRow, 2);
        }
        continue;
      } else {
        // data kedua dan seterusnya buat row baru dan ubah rowspan cell aspek
        const newRow = table.insertRow();
        const newCell = newRow.insertCell();
        newCell.innerHTML = `${aspekKumuh[aspek][i]} <br /> ${btnTambah(id)} `;
        newCell.id = id;
        oldRow.cells[0].rowSpan += 1;

        // masukkan data investasi kedua dan seterusnya
        const dataKriteria = dataAspek.filter(
          (d) => d.kriteria[1] === aspekKumuh[aspek][i][0]
        );
        if (dataKriteria.length > 0) {
          // masukkan data pertama pada row ini
          insertDataKegiatan(newRow, dataKriteria);
        } else {
          insertCellKosong(newRow, 1);
        }
      }
    }
  }
};

function insertCellKosong(row, col) {
  row.insertCell().textContent = "belum ada penanganan";
  row.cells[col].colSpan = 6;
  row.cells[col].classList.add("text-danger");
  row.cells[col].classList.add("text-center");
  row.cells[col].classList.add("fst-italic");
}

function insertDataKegiatan(row, data) {
  // data pertama, tinggal masukkan data ke row
  // data kedua dan seterusnya, buat row baru, tambahkan span cell aspek, kriteria
  for (let i = 0; i < data.length; i++) {
    if (i === 0) {
      insertSatuData(row, data[i]);
    } else {
      const newRow = row.parentNode.insertRow();

      document.getElementById(data[i].kriteria[0]).rowSpan += 1;
      document.getElementById(data[i].kriteria).rowSpan += 1;
      insertSatuData(newRow, data[i]);
    }
  }

  function insertSatuData(row, data) {
    row.insertCell().textContent = data.kegiatan;
    row.insertCell().textContent = data.volume;
    row.insertCell().textContent = data.satuan;
    row.insertCell().textContent = data.sumberAnggaran;
    row.insertCell().textContent = formatRupiah(data.anggaran);
    const aksi = row.insertCell();
    aksi.classList.add("d-flex", "gap-1");
    aksi.innerHTML = `<button type="button" class="btn btn-outline-danger btn-sm " onclick="hapusInvestasi(${
      data.id
    })">
    <img src="${trash}"  class="text-white" alt="delete" width="20" height="20" />
    </button>
    <button type="button" class="btn btn-outline-primary btn-sm"   data-bs-toggle="modal"
    data-bs-target="#modalInvestasi"
    data-bs-type="Edit"
    data-bs-kriteria="${data.kriteria}"
    data-bs-id="${data.id}"
    data-bs-kegiatan="${data.kegiatan}"
    data-bs-volume="${data.volume}"
    data-bs-satuan="${data.satuan}"
    data-bs-sumberAnggaran="${data.sumberAnggaran}"
    data-bs-anggaran="${data.anggaran / 1000}"
    aria-label="Edit Data Investasi">
    <img src="${edit}"  class="text-white" alt="edit" width="20" height="20" />
    </button>
    `;
  }
}

const btnTambah = (id) => {
  return `<button
  type="button"
  class="btn btn-outline-primary tambahInvestasiBtn"
  data-bs-toggle="modal"
  data-bs-target="#modalInvestasi"
  data-bs-type="Tambah"
  data-bs-kriteria="${id}"
  aria-label="Tambah Data Investasi"
>
Tambah Kegiatan
</button>`;
};

export { loadBodyTableInvestasi };
