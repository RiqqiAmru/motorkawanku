import { showToast } from "./util";

function bukaDatabase() {
  let db;
  let request = indexedDB.open("motorkawanku", 1);
  request.onupgradeneeded = function (event) {
    let db = event.target.result;
    if (!db.objectStoreNames.contains("investasi")) {
      let objectStore = db.createObjectStore("investasi", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
    console.log(db);
  };
  return new Promise((resolve, reject) => {
    request.onerror = function (event) {
      reject(event.target.errorCode);
      console.log("gagal");
    };

    request.onsuccess = function (event) {
      resolve(event.target.result);
    };
  });
}

/**
 * @description save data investasi to indexed db
 * @param {*} data
 */
function saveDataInvestasi(data) {
  let transaction = db.transaction(["investasi"], "readwrite");
  let objectStore = transaction.objectStore("investasi");
  if (data.id) {
    // jadikan data id sebagai int
    data.id = parseInt(data.id);
    let request = objectStore.put(data);
    request.onsuccess = function (event) {
      console.log("data berhasil diupdate");
      showToast("Data berhasil diupdate", "success");
    };
    request.onerror = function (event) {
      showToast("Data gagal diupdate", "danger");
    };
  } else {
    // hapus id dari data
    delete data.id;
    let request = objectStore.add(data);
    request.onsuccess = function (event) {
      showToast("Data berhasil disimpan", "success");
    };
    request.onerror = function (event) {
      showToast("Data gagal disimpan", "danger");
    };
  }
}

async function getDataInvestasi(d) {
  return new Promise((resolve, reject) => {
    let transaction = d.transaction(["investasi"], "readonly");
    let objectStore = transaction.objectStore("investasi");
    let request = objectStore.getAll();
    request.onsuccess = function (event) {
      return request.result;
    };
    request.onerror = function (event) {
      console.log("error : tidak bisa mengambil data investasi");
    };
  });
}
async function getDataInvestasiByKumuhRT(idKumuhRT) {
  return new Promise((resolve, reject) => {
    let transaction = db.transaction(["investasi"], "readonly");
    let objectStore = transaction.objectStore("investasi");
    let request = objectStore.getAll();
    request.onsuccess = function (event) {
      resolve(request.result.filter((d) => d.idKumuhRT === idKumuhRT));
    };
    request.onerror = function (event) {
      reject("error : tidak bisa mengambil data investasi");
    };
  });
}

async function hapusDataInvestasi(id) {
  return new Promise((resolve, reject) => {
    let transaction = db.transaction(["investasi"], "readwrite");
    let objectStore = transaction.objectStore("investasi");
    let request = objectStore.delete(id);
    request.onsuccess = function (event) {
      console.log("data berhasil dihapus");
      showToast("Data investasi berhasil dihapus", "success");
      resolve();
    };
    request.onerror = function (event) {
      showToast("Data investasi gagal dihapus", "danger");
      reject("error : tidak bisa menghapus data investasi");
    };
  });
}

export {
  saveDataInvestasi,
  getDataInvestasi,
  hapusDataInvestasi,
  getDataInvestasiByKumuhRT,
  bukaDatabase,
};
