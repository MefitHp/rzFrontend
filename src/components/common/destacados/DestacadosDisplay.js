import React from 'react';
import './Destacados.css';
import Card from '../../card/Card';
//import api from '../../../Api/Django';
import CircularProgress from 'material-ui/CircularProgress';

export const DestacadosDisplay = ({fetched, destacados}) => {
    console.log(destacados);
    return (
        	<div className='atras'>

                {fetched ?
                    <div>
                    <h3 className='tittle'> Proyectos Destacados </h3>

                    {destacados.map(
                        pelusin => {
                            return <Card key={pelusin.id} project={pelusin} />
                        }
                    )}
                    </div>
                    :
                    <div>
                        <h3 className='tittle'>
                            Cargando los proyectos destacados...
                        </h3>
                        <CircularProgress
                            size={50}
                            thickness={7}
                        />
                    </div>

                } {/*fetched*/}


        	</div>
        );
};

