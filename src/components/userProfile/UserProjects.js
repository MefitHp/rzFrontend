import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Link} from 'react-router-dom';
//MaterialUI
import {Paper, RefreshIndicator, Chip, Avatar} from 'material-ui';

const img = "https://cdn3.iconfinder.com/data/icons/photography/512/Icon_3-512.png";

const Loader = () => (
    <RefreshIndicator
        size={50}
        left={70}
        top={0}
        loadingColor="#FF9800"
        status="loading"
        //style={style.refresh}
    />
);



const UserProjects = ({projects, fetched}) => {
    return(
      <div>
          {!fetched ? <Loader/> :
              <div style={styles.root}>
                  {projects.map((p, index)=>{
                    return(
                        <Link
                            key={index}
                            style={styles.item}
                            to={`/manage/${p.id}`}>
                          <Paper
                              key={index}
                             >
                              <img width="100%" height="auto" src={p.photo ? p.photo : img} alt="Portada"/>
                            <h4>{p.name}</h4>
                            <Chip onClick={()=>{}}>
                              <Avatar size={32}>+</Avatar>
                              215 seguidores
                            </Chip>
                          </Paper>
                        </Link>

                    );
                  })}
              </div>

          }



        <Link to="/new">
          <FloatingActionButton style={{position:'absolute', right:5, bottom:5}} backgroundColor="#87316C">
            <ContentAdd />
          </FloatingActionButton>
        </Link>
      </div>
    );
};

const styles = {
    root: {
        display: 'flex',
        flexWrap:"wrap",
        margin:"20px"
    },
    item:{
        padding:'3%',
        textAlign:"center",
        //maxWidth:"300px",
        flex:1,
        cursor:"pointer",
        textDecoration:"none"
    }
};

export default UserProjects;
