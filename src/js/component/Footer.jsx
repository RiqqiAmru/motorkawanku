import React from "react";
import whatssapp from "../../../public/whatsapp.svg";
import email from "../../../public/email.svg";
import instagram from "../../../public/instagram.svg";
import manuals from "../../../public/MotorKawankuManuals.pdf";
import sop from "../../../public/sop.pdf";
const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-6 mb-0 text-body-secondary">
          © 2024 Motor Kawanku,
          <br />
          Dinas Perumahan Rakyat dan Kawasan Permukiman Kota Pekalongan
        </p>

        <ul className="nav col-md-3 justify-content-center">
          <li className="nav-item">
            <a
              href="https://wa.me/62816644000"
              className="nav-link px-2 text-body-secondary"
              target="_blank"
            >
              <img src={whatssapp} alt="whatsapp" width={24} height={24} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="mailto:dinperkim.pekalongankota@gmail.com."
              className="nav-link px-2 text-body-secondary"
              target="_blank"
            >
              <img src={email} alt="whatsapp" width={28} height={28} />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/dinperkim.pekalongankota/"
              className="nav-link px-2 text-body-secondary"
              target="_blank"
            >
              <img src={instagram} alt="whatsapp" width={24} height={24} />
            </a>
          </li>
        </ul>
        <ul className="nav col-md-3 justify-content-end">
          <li className="nav-item">
            <a href="about.html" className="nav-link px-2 ">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href={manuals} target="_blank" className="nav-link px-2 ">
              Manuals
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://youtu.be/Y_W6owMw_00"
              target="_blank"
              className="nav-link px-2 "
            >
              Dokumentasi
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://forms.gle/9n18bn57fRRFCnYE9"
              target="_blank"
              className="nav-link px-2 "
              noreferrer
              noopener
            >
              Survey Kepuasan
            </a>
          </li>
          <li className="nav-item">
            <a
              href={sop}
              target="_blank"
              className="nav-link px-2 "
              noreferrer
              noopener
            >
              Petunjuk Pengoperasian
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
