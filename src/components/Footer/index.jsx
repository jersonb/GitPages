import React from "react";
import styles from "./footer.module.css";
import { FaLinkedin, FaGithub, FaPhoneSquareAlt, FaRegEnvelope, FaFilePdf } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container-fluid">
      
        <div class="d-flex d-flex justify-content-center">
          <h5 className={styles.title}>Contatos</h5>
        </div>

        <div class="d-flex d-flex justify-content-center">
      
          <div class="p-1">
            <a className={styles.footericons} title="https://linkedin.com/in/jersonb" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/jersonb">
              <FaLinkedin />
            </a>
          </div>
      
          <div class="p-1">
            <a className={styles.footericons} title="https://github.com/jersonb" target="_blank" rel="noopener noreferrer" href="https://github.com/jersonb">
              <FaGithub />
            </a>
          </div>
      
          <div class="p-1">
            <a className={styles.footericons} title="(81) 9 8190-0785" href="tel:+5581981900785">
              <FaPhoneSquareAlt />
            </a>
          </div>
      
          <div class="p-1">
            <a className={styles.footericons} title="jersonlbrito@hotmail.com" href="mailto:jersonlbrito@hotmail.com">
              <FaRegEnvelope />
            </a>
          </div>
      
          <div class="p-1">
            <a className={styles.footericons} title="Currículo em PDF" href="https://github.com/jersonb/Bio/raw/master/CV/CV%20Jerson%202020.pdf" target="_blank" rel="noopener noreferrer">
              <FaFilePdf />
            </a>
          </div>
      
        </div>
      </div>


    </footer>
  );
}
export default Footer;