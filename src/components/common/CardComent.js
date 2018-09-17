import React from 'react';
import Paper from 'material-ui/Paper';
import './CardComent.css';


class CardComent extends React.Component {

    render() {
        return (
            <div className='container'>
              	<Paper zDepth={1} className='coment'>
                	<div className='foto_coment'>
        				<img alt="coment" className='img_coment' src='https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1' />
        			</div>
        		<div className='data'>
	        		<p><b>"En crowdfundind Zapopan
	        		encontre la mejor manera de fondear 
	        		mi proyecto y llevarlo al mercado; ademas
	        		de conocer emprendedores que apoyaron mi 
	        		idea y le aportaron a la misma"</b></p>

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