import "../scss/style.scss";
import tampilanAwal from "../../public/awal.png";

document.addEventListener("DOMContentLoaded", () => {
  loadGambar();
});

// load gambar
const loadGambar = () => {
  const img = document.getElementById("tampilanAwal");
  img.src = tampilanAwal;
  img.alt = "Tampilan Awal";
};
