import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/Footer.scss'
import logo from './../assets/img/second_logo.png'
import { textInputFooter } from './../assets/js/styleObjects'
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__item">
            <div>
              <Link to="/">
                <img width="280" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="mark__info">
              <p>Calle San Francisco 348</p>
              <p>Valencia, Región de Valencia</p>
              <p>España</p>
              <p>Llamanos: +31 912 33 43 21</p>
              <p>Email: support@hearyours.com</p>
            </div>
            <div className="social__media">
              <div><i class="fab fa-facebook"></i></div>
              <div><i class="fab fa-instagram"></i></div>
              <div><i class="fab fa-twitter"></i></div>
              <div><i class="fab fa-tiktok"></i></div>
            </div>
        </div>
        <div className="footer__item information">
           <h2>Información</h2>
           <a href="#">Cart</a>
           <a href="#">Sign In</a>
           <a href="#">Sign Up</a>
           <a href="#">FAQs</a>
           <a href="">Términos y Condiciones</a>
        </div>
        <div className="footer__item">
            <h2>Suscríbete al Newsletter</h2>
            <span>Ingresa tu  correo  y recibe nuestras últimas actualizaciones</span>
            <TextField sx={textInputFooter} color="primary"/> 
            <Button
              sx={{marginTop: '20px'}}  
              variant="contained" 
              color="primary">
                Suscribe
            </Button>
        </div>
      </div>
      <div>
        <p>Diseñado y desarrollado por Cristian Sanchez, todos los derechos reservados @2022</p>
      </div>
    </div>);
};

export default Footer;
