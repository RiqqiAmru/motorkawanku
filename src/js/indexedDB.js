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
  let request = objectStore.add(data);
  request.onsuccess = function (event) {
    console.log("data berhasil disimpan");
    showToast("Data berhasil disimpan", "success");
  };
}

async function getDataInvestasi() {
  return new Promise((resolve, reject) => {
    let transaction = db.transaction(["investasi"], "readonly");
    let objectStore = transaction.objectStore("investasi");
    let request = objectStore.getAll();
    request.onsuccess = function(event) {
      resolve(request.result);
    };
    request.onerror = function(event) {
      reject("error : tidak bisa mengambil data investasi");
    };
  });
}

export { saveDataInvestasi, getDataInvestasi };
