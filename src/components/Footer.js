import React from "react";
import { Link } from 'react-router-dom';
import tw from './twitter.svg';
import fb from './facebook.svg';
import gh from './github.svg';
import it from './instagram.svg';
import './Footer.css';

function Footer(){
     return (
  <footer className="bg-dark text-center text-white">
  <div className="container">
    <section className="mb-2">
      <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"><img src={tw} width="30"/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/" role="button"><img src={fb} width="30"/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.github.com/" role="button"><img src={gh} width="30"/></a>
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button"><img src={it} width="30"/></a>
    </section>
    <div className="container mb-1">
                    <ul className="d-flex">
                        <li className="mx-3">
                        <Link to="/">Home</Link>  
                        </li>      
                        <li className="mx-3">
                            <Link to="/category/PC">PC</Link>
                        </li>    
                        <li className="mx-3">
                            <Link to="/category/Celulares">Celulares</Link>
                        </li>   
                        <li className="mx-3">
                            <Link to="/category/Consolas">Consolas</Link>
                        </li>
                    </ul>
                </div>
  </div>
  <div className="text-center">
    <span>© 2022 Copyright Jonathan Arriagada</span>
  </div>
</footer>
 )
}
export default Footer;