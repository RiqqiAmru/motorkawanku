import { Toast } from "bootstrap";
import $ from "jquery";

/**
 *
 * @param {*} id element id
 * @param {*} data string data
 * @description set data to element
 */
function dataToElement(id, data) {
  let el = document.getElementById(id);
  el.innerHTML = data;
}

function decimaltoPercent(decimal) {
  return (decimal * 100).toFixed(2) + "%";
}

function styleSelected(el) {
  let selected = document.querySelector(".selected");
  if (selected) {
    selected.classList.remove("selected");
  }
  el.classList.add("selected");
}

function showToast(message, type) {
  const toastBootstrap = Toast.getOrCreateInstance($("#alertToast")[0]);
  toastBootstrap._element.classList.add(`bg-${type}`);
  toastBootstrap._element.querySelector(".toast-body").textContent = message;
  toastBootstrap.show();
}

function formatRupiah(angka) {
  var number_string = angka.toString(),
    sisa = number_string.length % 3,
    rupiah = number_string.substr(0, sisa),
    ribuan = number_string.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = "Rp." + rupiah + ",00";

  return rupiah;
}

export {
  dataToElement,
  decimaltoPercent,
  styleSelected,
  showToast,
  formatRupiah,
};
