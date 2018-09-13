import React from 'react';
import Nav from '../nav/NavContainer';
import {ProjectCardDisplay} from '../card/ProjectCardDisplay';
import {CardRelevantesDisplay} from '../card/CardRelevantesDisplay';

class HomeDisplay extends React.Component {

    componentWillMount = () => {
        const user = localStorage.getItem('user');
        console.log("Home user: " + user);
    }

    render() {
        return (
            <div >
                <Nav />
                <div className="filtros">
                    <label htmlFor="">Buscar Proyecto</label>
                    <input type="text" placeholder="Palabra clave" />
                    <label htmlFor="">Categoría</label>
                    <select name="categoria" id="">
                        <option value="">Energia verde</option>
                    </select>
                    <label htmlFor="">Ordenar por</label>
                    <select name="categoria" id="">
                        <option value="">A-Z</option>
                    </select>
                </div>
                <div className="ancho">
                    <h2 >Proyectos destacados</h2>
                    <CardRelevantesDisplay />
                    <div className="fl">
                        <ProjectCardDisplay />
                        <ProjectCardDisplay />
                        <ProjectCardDisplay />
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeDisplay;

