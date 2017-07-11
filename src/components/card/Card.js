import React from 'react';
import './Card.css';
import Avatar from '../common/Avatar';
import FontIcon from 'material-ui/FontIcon';
import LinearProgress from 'material-ui/LinearProgress';
import {Link} from 'react-router-dom';


class Card extends React.Component {
     constructor(props) {
    super(props);

    this.state = {
      completed: 0,
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
        <div className='container'>
          <Link to={'detail/' + project.id}>
            <div className='card flip'>
                  <div className='front'>
                      <div className='image'>
                        <div className='extras'>
                          <FontIcon className='material-icons etiqueta' style={{transform:'scale(.4)', color:'white'}}>local_offer</FontIcon>
                          <span>Tecnología</span>
                        </div>
                      </div>
              		<div className='foto'>
              			<Avatar src={this.props.project.photoURL}/>
              		</div>
              		<div className='datos'>
                  		<p className="project" style={{margin:0}}>
                        {this.props.project.name}
                      </p>
                  		<span>{project.author.username}</span>
              		</div>
              		<div className='meta'>
              			<p>$ {project.goal}</p>
              		</div>
              		<div className='iconos'>
                          <div className='inf_project'>
                              <div className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}>group</FontIcon>
                                  <p className='cantidad'>14 mil</p>
                                  <p>Seguidores</p>
                              </div>
                              <div  className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}>thumb_up</FontIcon>
                                  <p className='cantidad'>14 mil</p>
                                  <p>Donadores</p>
                              </div>
                              <div  className='data_project'>
                                  <FontIcon className='material-icons icon_dest' style={{color:'#61656a'}}>trending_up</FontIcon>
                                  <p className='cantidad'>14 mil</p>
                                  <p>Recaudado</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='backs'>
                          <div className='foto_back'>
                              <Avatar />
                          </div>
                          <div className='datos_back'>
                            <p className="project" style={{margin:0}}>
                              {this.props.project.name}
                            </p>
                            <span>{project.author.username}</span>
                          </div>
                          <div className='description'>
                            <p>
                              {this.props.project.description}
                            </p>
                          </div>
                          <div className='bar_progress'>
                              <LinearProgress mode="determinate"
                               value={30} 
                               color=' #89BE53'
                               style={{height:10}}/>
                          </div>
                          <div className='period_progress'>
                              <span className='left'>3 de Julio 2017</span>
                              <span className='right'>3 de Sept 2017</span>
                          </div>

                           <div className='bar_progress'>
                              <LinearProgress mode="determinate"
                               value={70}
                               color='#76CECB' 
                               style={{height:10}}/>
                          </div>
                          <div className='period_progress'>
                              <span className='left'>$0</span>
                              <span className='right'>${this.props.project.goal}</span>
                          </div>        
                  </div>
          	</div>
            </Link>
        </div>
        );
    }
}

export default Card;