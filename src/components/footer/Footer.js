import React from 'react';
import './Footer.css';
<<<<<<< HEAD
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Fondo from '../../assets/space.jpg';

=======
import logo from '../../assets/reto_blanco.png';
import lg from '../../assets/zapopan_blanco.png';
>>>>>>> a78d8de88724608a045d4ba9cfe8e7e0e642e89b

class Footer extends React.Component {

    render() {
        return (
        <div className='footer'>
       		<div className='footer_info'>
       			<div className='definition'>
<<<<<<< HEAD
       				<h4> Reto Zapopan</h4>
       				<p> Somos un programa impulsado por el Gobierno Municipal de Zapopan,
       				 que a través de una competencia de ideas, buscamos impulsar, 
       				 de manera gratuita, a los emprendedores a través de un programa integral 
       				 de consultoría, mentoría, financiamiento, vinculación e internacionalización.
       				  Buscamos emprendedores que destaquen por sus ideas,
					empresas e iniciativas valiosas, relevantes y con valor agregado.</p>

       			</div>
       
       			<div className='definition'>
       				<h4> Nos encontramos en</h4>
              
              <div className='izq'>
              <div className='inf_flex'><FontIcon className='material-icons inf_z' style={{color:'white', fontSize:'20'}}><span>place</span></FontIcon><p>Av. Vallarta No.6503, Plaza Concentro, Local E-48, Zapopan, Jalisco.</p></div>
              <div className='inf_flex'><FontIcon className='material-icons inf_z' style={{color:'white', fontSize:'20'}}><span>email</span></FontIcon><p>contacto@retozapopan.com</p></div>
              <div className='inf_flex'><FontIcon className='material-icons inf_z' style={{color:'white', fontSize:'20'}}><span>phone_in_talk</span></FontIcon><p>3818.2200 ext.2822 / 2821 / 2816</p></div>
       			</div>
            </div>
       		</div>
    		<hr/>
    		<div className='social'>

          <Link to='https://www.facebook.com/RetoZapopanOficial/' target='_blank'>
    	   	   <FontAwesome name='facebook-square' className='icon_social' size='2x' />
	       	</Link>	
          <Link to='https://twitter.com/reto_zapopan?lang=es' target='_blank'>
            <FontAwesome name='twitter-square' className='icon_social' size='2x'/>
          </Link> 
          <Link to='https://www.instagram.com/retozapopan/' target='_blank'>
            <FontAwesome name='instagram' className='icon_social' size='2x'/>
          </Link> 

            
    	   </div>
=======
       				<p>Av. Vallarta 6503 Local E-48</p>
					<p>Plaza Concentro, Col. Ciudad Granja</p>
					<p>Zapopan, Jalisco, México</p>
       			</div>
       			<div className='definition'>
					<img src={logo} alt=""/>
					<img src={lg} alt=""/>
				</div>
    	   </div>
			<hr/>
			<div className="politicas" style={{textAlign:"center"}}>
				<p>Aviso de Privacidad</p>
			</div>
>>>>>>> a78d8de88724608a045d4ba9cfe8e7e0e642e89b
      </div>
        );
    }
}

export default Footer;