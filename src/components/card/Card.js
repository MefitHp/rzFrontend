import React from 'react';
import './Card.css';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import LinearProgress from 'material-ui/LinearProgress';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 0
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
    // console.log('mi prop:',this.props.project);
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
         const {project} = this.props;
        return (
        <div id="busqueda" className='container'>
<Link to={'detail/' + project.id} >
            <div className='card flip '>
                  <div className='front'>
                      <div className='image' style={{backgroundImage:`url('${project.photo}')`}}>
                        <div className='extras'>
                          <FontIcon className='material-icons etiqueta' style={{transform:'scale(.4)', color:'white'}} >local_offer</FontIcon>
                          <span>{project.category[0].name}</span>
                        </div>
                      </div>

                  		<p className="project" style={{fontWeight:'bold', fontSize:20, color:'black', textAlign: 'left', margin: '20px', marginBottom: 0}}>
                        {this.props.project.name}
                      </p>

                  <div>
                    <p className="parra" >
                        {project.description ? project.description.slice(0, 140):null}
                    </p>
                  </div>

                  <div style={{textAlign: 'left', marginLeft: '20px', display: 'flex', alignItems: 'center'}}>
                    <Avatar src={this.props.project.photoURL} style={{height: '25px',width: '25px', marginRight:'5px'}}/>
                    <span style={{fontSize:'12px', color:'#61656a'}}>{project.author.username}</span>
                  </div>

                  <div className='bar_progress'>
                              <LinearProgress mode="determinate"
                               value={70}
                               color='#3E9EB9'
                               style={{height:10}}/>
                  </div>

                  <div className='iconos'>
                          <div className='inf_project'>

                              <div className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}>timer</FontIcon>
                                  <p className='cantidad'>14 Horas</p>
                                  <p>Restantes</p>
                              </div>
                              <div  className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}>group</FontIcon>
                                  <p className='cantidad'>14 mil</p>
                                  <p>Donadores</p>
                              </div>
                              <div  className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}>trending_up</FontIcon>
                                  <p className='cantidad'>$ {project.goal}</p>
                                  <p>Recaudado</p>
                              </div>
                          </div>
                      </div>
                  </div>
          	</div>
            </Link>
        </div>
        );
    }
}

export default Card;
