import React from "react";
import whatssapp from "../../../public/whatsapp.svg";
import email from "../../../public/email.svg";
import instagram from "../../../public/instagram.svg";
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
            <a href="#" className="nav-link px-2 text-body-secondary">
              <img src={whatssapp} alt="whatsapp" width={24} height={24} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              <img src={email} alt="whatsapp" width={28} height={28} />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
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
            <a href="#" className="nav-link px-2 ">
              Manuals
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 ">
              Tutorial
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
export default Footer;
