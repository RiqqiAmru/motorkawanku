// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Excel = require("exceljs");
// read excel file
const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1 class="mt-5"> Motorkawanku!</h1>
    <p class="lead">Cek Kawasan Kumuh di lokasi anda!</p>
    <input type="text" class="form-control" placeholder="Masukkan Lokasi Anda">
    <hr class="my-4">
    <div class="row">
     <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
           <tr><th>Provinsi</th><td id='provinsi'></td></tr>
           <tr><th>Kabupaten</th><td id='kabupaten'></td></tr>
           <tr><th>Kecamatan</th><td id='kecamatan'></td></tr>
           <tr><th>Kelurahan</th><td id='kelurahan'></td></tr>
           <tr><th>Wilayah RT/RW</th><td id='rtrw'></td></tr>
          </table>
        </div>
     </div>
    </div>
  </div>
`;
