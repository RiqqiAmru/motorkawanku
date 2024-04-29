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

export { dataToElement, decimaltoPercent, styleSelected };
