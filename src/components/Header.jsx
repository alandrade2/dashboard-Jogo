import React  from 'react';
import imguser from '../assets/foto1.png';
import './style.css';

export default function Header() {
  return (

<div>
        <header>
            <h1>
                Dashboard - Jogo Zumbi
            </h1>
          <div className="user-wrapper">
              <img src={imguser} alt="photouser"/> 
              <div>
                <h2>Andre Luiz</h2>
                <small>Admin</small>
              </div>
          </div>
        </header>
</div>    

    );
}