import React, {Component} from 'react';
import SimpleCard from './SimpleCard';
import Card from '../card/Card';



class MainList extends Component{
    render(){
        return(
            <div
                style={{
                    display:'flex',
                    flexFlow: 'row wrap',
                    paddingTop:70
                }}>

              {this.props.items.map(i=> {

                  return (
                      <div
                          key={i.id}
                          style={{
                              flex:1,
                              maxWidth:'350px',
                                margin:'0 auto'
                      }}>
                        <Card project={i} />
                      </div>
                  );
              })}
            </div>
        );
    }
}

export default MainList;