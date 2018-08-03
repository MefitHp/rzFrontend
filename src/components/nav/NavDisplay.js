import React from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';

export const NavDisplay= () => (
    <div className="nav">
        <div>
        <img src={logo} alt=""/>

        <p>Nosotros</p>
        <p>¿Cómo participar?</p>
        <p>¿Cómo donar?</p>
    </div>
        <div>
            <span>Explorar</span>
            <button>Comienza tu proyecto</button>
        </div>
    </div>
);