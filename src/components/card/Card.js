import React from 'react';
import './Card.css';
import Avatar from '../common/Avatar';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FontIcon from 'material-ui/FontIcon';
import LinearProgress from 'material-ui/LinearProgress';


class Card extends React.Component {
     constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

    render() {

       
        return (
        <div className='container'>

        	<div className='card flip'>
        		
                <div className='front'>
                    <div className='image'></div>
            		<div className='foto'>
            			<Avatar />
                  
            		</div>
            		<div className='datos'>
                		<p className='project' 
                			style={{margin:0}}
                		>Brenda Ortega</p>
                		<p className='name'
                			style={{margin:0}}
                		>Hola mundo con rea</p>
            		</div>
            		<div className='description'>
            			<p>Este proyecto esta bien bonis..</p>
            		</div>
            		<div className='iconos'>
            		
                        <div className='inf_project'>
                            <div className='data_project'>
                                <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}
                                        >group</FontIcon>
                                    <p>Seguidores</p>
                            </div>
                            <div  className='data_project'>
                                <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}
                                        >thumb_up</FontIcon>
                                         <p>Donadores</p>
                            </div>
                            <div  className='data_project'>
                                <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}
                                        >trending_up</FontIcon>
                                         <p>Recaudado</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='backs'>
                     <div className='image'></div>
                        <div className='foto'>
                            <Avatar />
                        </div>
                        <div className='datos'>
                            <p className='project' 
                                style={{margin:0}}
                            >Brenda Ortega</p>
                            <p className='name'
                                style={{margin:0}}
                            >Hola mundo con rea</p>
                        </div>

                        <div className='bar_progress'>
                            <LinearProgress mode="determinate"
                             value={30} 
                             style={{height:10}}/>
                        </div>
                        <div className='period_progress'>
                            <span className='left'>3 de Julio 2017</span>
                            <span className='right'>3 de Sept 2017</span>
                        </div>

                         <div className='bar_progress'>
                            <LinearProgress mode="determinate"
                             value={70}
                             color='pink' 
                             style={{height:10}}/>
                        </div>
                        <div className='period_progress'>
                            <span className='left'>$0</span>
                            <span className='right'>$300,000.00</span>
                        </div>

                       
                </div>
        	</div>
        </div>
        );
    }
}

export default Card;