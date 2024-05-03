import { showToast } from "./util";

let db;
let request = indexedDB.open("motorkawanku", 1);
request.onerror = function (event) {
  console.log("error: ");
};

request.onsuccess = function (event) {
  db = request.result;
  console.log("success: membuka / membuat db " + db.name);
};

request.onupgradeneeded = function (event) {
  let db = event.target.result;
  let objectStore = db.createObjectStore("investasi", {
    keyPath: "id",
    autoIncrement: true,
  });
};

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
      console.log("data berhasil disimpan");
      showToast("Data berhasil disimpan", "success");
    };
    request.onerror = function (event) {
      showToast("Data gagal disimpan", "danger");
    };
  }
}

async function getDataInvestasi(id = null) {
  if (id) {
    return new Promise((resolve, reject) => {
      let transaction = db.transaction(["investasi"], "readonly");
      let objectStore = transaction.objectStore("investasi");
      let request = objectStore.get(id);
      request.onsuccess = function (event) {
        console.log("sucess", request);
        resolve(request.result);
      };
      request.onerror = function (event) {
        reject("error : tidak bisa mengambil  data investasi");
      };
    });
  }
  return new Promise((resolve, reject) => {
    let transaction = db.transaction(["investasi"], "readonly");
    let objectStore = transaction.objectStore("investasi");
    let request = objectStore.getAll();
    request.onsuccess = function (event) {
      resolve(request.result);
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

export { saveDataInvestasi, getDataInvestasi, hapusDataInvestasi };
