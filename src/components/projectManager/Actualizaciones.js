import React from 'react';
import {Paper, TextField, RaisedButton, CircularProgress, CardHeader, CardMedia, CardText} from 'material-ui';
import AddPhoto from 'material-ui/svg-icons/image/add-a-photo';
import moment from 'moment';
import es from 'moment/locale/es';
import RemoveCircle from 'material-ui/svg-icons/content/remove-circle-outline';

let fileInput = {};
let showPrev = false;

const preview = "https://tinyclipart.com/resource/preview-clipart/preview-clipart-cliparti1_preview_01.jpg";


const UpdateCard = ({update, image, date, deleteUpdate}) => (
  <Paper style={{margin:"10px"}}>
      <CardHeader
          titleStyle={{color:"grey"}}
          title={moment(date).fromNow()}
          children={<RemoveCircle onClick={()=>{
              if(window.confirm("¿Seguro que quieres eliminar?")) deleteUpdate();
          }} color="grey" style={{float:"right"}} />}
      />

      <CardText>
          {update}
      </CardText>

      <CardMedia>
          <img src={image} alt="."/>
      </CardMedia>

  </Paper>
);


export const Actualizaciones = ({onSubmit, onUpload, image, update, loading, onChange, updates, deleteUpdate}) => {

    if (!image) {
        image = preview;
        showPrev=false;
    }else{
        showPrev=true;
    }

    updates = updates.sort((a,b)=>b.id - a.id);

    return (
        <div>
            <form onSubmit={onSubmit} className="actualizaciones-container">
                <Paper style={{padding:20, marginBottom:20}}>
                    <TextField
                        floatingLabelText="Agrega una actualización de tu proyecto"
                        multiLine={true}
                        rows={3}
                        style={{width:"100%"}}
                        underlineFocusStyle={{borderColor:"#87316C"}}
                        floatingLabelShrinkStyle={{color:"#87316c"}}
                        onChange={onChange}
                        value={update}
                    />
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <AddPhoto
                            id="photo"
                            color="#87316C"
                            onClick={()=>fileInput.click()}
                        />
                        <RaisedButton
                            type="submit"
                            label={"Postear"}
                            backgroundColor="#87316C"
                            labelColor="white"
                        />
                    </div>


                </Paper>

                {showPrev && <Paper style={{padding:20}}>
                    <h3>Tu imagen:</h3>
                    {loading && <CircularProgress/>}
                    <div  style={{height:"200px", textAlign:"center"}}>
                        <img style={{height:"100%", maxWidth:"100%"}} src={image} alt="preview"/>
                    </div>

                </Paper>}

                <input onChange={onUpload} hidden={true} ref={input=>fileInput=input} type="file" accept="image/*"/>

                {updates.map(u=><UpdateCard deleteUpdate={()=>deleteUpdate(u)} key={u.id} {...u} />)}

            </form>



        </div>


    );
};
