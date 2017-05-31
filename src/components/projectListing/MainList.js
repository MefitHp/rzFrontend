import React, {Component} from 'react';
import SimpleCard from './SimpleCard';



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
                      }}>
                        <SimpleCard item={i} />
                      </div>
                  );
              })}
            </div>
        );
    }
}

export default MainList;