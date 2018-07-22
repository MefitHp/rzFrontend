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



const UserProjects = ({projects=[], fetched}) => {
    const exists = projects.length > 0;
    return(
      <div>
          {projects.map((p, index)=>{
              return(
                <Link to={`/manage/${p._id}`} >
                <Paper
                style={styles.papel}
                key={index}
               >
                    <img width="auto" height="70%" src={p.photo ? p.photo : img} alt="Portada"/>
                    <h4>{p.title}</h4>
                </Paper>
                </Link>
              );
          })}
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
