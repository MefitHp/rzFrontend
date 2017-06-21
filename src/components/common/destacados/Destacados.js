import React from 'react';
import './Destacados.css';
import Card from '../../card/Card';
import api from '../../../Api/Django';

class Destacados extends React.Component {

    state = {
        destacados:[],
        loading:true
    };

    componentWillMount(){
        api.getAxiosAllProjects()
            .then(

                response => {
                    this.setState({destacados:response.data});

                }
            );
    }

    render() {
        return (
        	<div className='atras'>

        		<h3 className='tittle'> Proyectos Destacados </h3>

				{this.state.destacados.map(
					pelusin => {
						return <Card project={pelusin} />
					}
				)}
        	</div>
        );
    }
}

export default Destacados;
