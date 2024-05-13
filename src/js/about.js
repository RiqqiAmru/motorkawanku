import "../scss/style.scss";
import tampilanAwal from "../../public/awal.png";
import pilihKawasan from "../../public/pilihKawasan.png";
import tampilanKawasan from "../../public/tampilanKawasan.png";
import pilihRT from "../../public/pilihRT.png";
import tampilanRT from "../../public/tampilanRT.png";
import pilihTahun from "../../public/pilihTahun.png";
import tahunAwal from "../../public/tahunAwal.png";
import tahunAkhir from "../../public/tahunAkhir.png";
import baseline from "../../public/baseline.png";
import investasi from "../../public/investasi.png";
import kumuhAkhir from "../../public/kumuhAkhir.png";
import simulasi from "../../public/simulasi.png";
import whatsapp from "../../public/whatsapp.svg";
import riqqi from "../../public/riqqi.jpg";
import person from "../../public/person.svg";
import linkedin from "../../public/linkedin.svg";
import github from "../../public/github.svg";

document.addEventListener("DOMContentLoaded", () => {
  loadGambar();
});

// load gambar
const loadGambar = () => {
  const img = document.getElementById("tampilanAwal");
  img.src = tampilanAwal;
  img.alt = "Tampilan Awal";

  const pilihKawasanEl = document.getElementById("pilihKawasan");
  pilihKawasanEl.src = pilihKawasan;
  pilihKawasanEl.alt = "Pilih Kawasan";

  const tampilanKawasanEl = document.getElementById("tampilanKawasan");
  tampilanKawasanEl.src = tampilanKawasan;
  tampilanKawasanEl.alt = "Tampilan Kawasan";

  const pilihRTEl = document.getElementById("pilihRT");
  pilihRTEl.src = pilihRT;
  pilihRTEl.alt = "Pilih RT";

  const tampilanRTEl = document.getElementById("tampilanRT");
  tampilanRTEl.src = tampilanRT;
  tampilanRTEl.alt = "Tampilan RT";

  const pilihTahunEl = document.getElementById("pilihTahun");
  pilihTahunEl.src = pilihTahun;
  pilihTahunEl.alt = "Pilih Tahun";

  const tahunAwalEl = document.getElementById("tahunAwal");
  tahunAwalEl.src = tahunAwal;
  tahunAwalEl.alt = "Tahun Awal";

  const tahunAkhirEl = document.getElementById("tahunAkhir");
  tahunAkhirEl.src = tahunAkhir;
  tahunAkhirEl.alt = "Tahun Akhir";

  const baselineEl = document.getElementById("baseline");
  baselineEl.src = baseline;
  baselineEl.alt = "Baseline";

  const investasiEl = document.getElementById("investasi");
  investasiEl.src = investasi;
  investasiEl.alt = "Investasi";

  const kumuhAkhirEl = document.getElementById("kumuhAkhir");
  kumuhAkhirEl.src = kumuhAkhir;
  kumuhAkhirEl.alt = "Kumuh Akhir";

  const simulasiEl = document.getElementById("simulasi");
  simulasiEl.src = simulasi;
  simulasiEl.alt = "Simulasi";

  const imgRiqqi = document.getElementById("riqqi");
  imgRiqqi.src = riqqi;
  imgRiqqi.alt = "Riqqi";

  const imgWhatsapp = document.getElementsByClassName("whatsapp");
  for (let i = 0; i < imgWhatsapp.length; i++) {
    imgWhatsapp[i].src = whatsapp;
    imgWhatsapp[i].alt = "whatsapp";
  }
  const imgPerson = document.getElementsByClassName("person");
  for (let i = 0; i < imgPerson.length; i++) {
    imgPerson[i].src = person;
    imgPerson[i].alt = "person";
  }

  const imgLinkedin = document.getElementsByClassName("linkedin");
  for (let i = 0; i < imgLinkedin.length; i++) {
    imgLinkedin[i].src = linkedin;
    imgLinkedin[i].alt = "linkedin";
  }

  const imgGithub = document.getElementsByClassName("github");
  for (let i = 0; i < imgGithub.length; i++) {
    imgGithub[i].src = github;
    imgGithub[i].alt = "github";
  }
};
