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
                              style={styles.papel}
                              key={index}
                             >
                              <img width="auto" height="70%" src={p.photo ? p.photo : img} alt="Portada"/>
                            <h4>{p.name}</h4>
                            <div style={styles.flexin}>
                                  <Chip style={{margin:"5"}} onClick={()=>{}}>
                                  <Avatar size={32}>+</Avatar>
                                    {p.followers} días
                                </Chip>
                                  <Chip style={{margin:"5"}} onClick={()=>{}}>
                                      <Avatar size={32}>+</Avatar>
                                      {p.actual_score} recaudado
                                  </Chip>
                                <Chip style={{margin:"5"}} onClick={()=>{}}>
                                    <Avatar size={32}>+</Avatar>
                                    {p.followers.length} seguidores
                                </Chip>
                            </div>
                          </Paper>
                        </Link>

                    );
                  })}
              </div>

          }


          {projects.length > 0 &&
          <Link to="/new">
              <FloatingActionButton style={{position: 'absolute', right: 5, bottom: 5}} backgroundColor="#87316C">
                  <ContentAdd/>
              </FloatingActionButton>
          </Link>
          }
      </div>
    );
};

const styles = {
    flexin:{
        display:'flex',
        justifyContent: 'center'

    },
    papel:{
        height:"400px",
        minWidth: "400px",
        maxWidth:"400px",
        paddingBottom:"5",
        overflow:"hidden"
    },
    root: {
        display: 'flex',
        flexWrap:"wrap",
        margin:"20px",

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
