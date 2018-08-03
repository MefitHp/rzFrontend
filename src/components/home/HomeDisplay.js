import React from 'react';
import Nav from '../nav/NavContainer';

class HomeDisplay extends React.Component {

    render() {
        return (
            <div >
                <Nav />
                <div className="filtros">
                        <label htmlFor="">Buscar Proyecto</label>
                        <input type="text" placeholder="Palabra clave"/>
                        <label htmlFor="">Categoría</label>
                        <select name="categoria" id="">
                            <option value="">Energia verde</option>
                        </select>
                        <label htmlFor="">Ordenar por</label>
                        <select name="categoria" id="">
                            <option value="">A-Z</option>
                        </select>
                </div>

            </div>
        );
    }
}
export default HomeDisplay;

