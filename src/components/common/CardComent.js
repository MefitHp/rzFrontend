import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from '../common/Avatar';

import './CardComent.css';


class CardComent extends React.Component {

    render() {
        return (
            <div className='container'>
              	<Paper zDepth={1} className='coment'>
                	<div className='foto_coment'>
        				<Avatar size={80} />
        			</div>
        		<div className='data'>
	        		<p>"En crowdfundind Zapopan
	        		encontre la mejor manera de fondear 
	        		mi proyecto y llevarlo al mercado; ademas
	        		de conocer emprendedores que apoyaron mi 
	        		idea y le aportaron a la misma"</p>

	        	</div>
	        	<div className='author_coment'>
	        		<p>Brenda 0rtega</p>
	        	</div>
				</Paper>
            </div>
        );
    }
}

export default CardComent;