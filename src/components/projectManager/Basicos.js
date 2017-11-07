import React from 'react';
import {CircularProgress, Paper, CardMedia, CardTitle, TextField, RaisedButton, SelectField, MenuItem} from 'material-ui';

const icono = "https://www.gstatic.com/mobilesdk/160505_mobilesdk/zerostate/2x/storage.png";

let maxText=140;
let resto = 0;
let laRef;

export const Basicos = ({
                            loading,
                            name,
                            goal,
                            onChange,
                            onSave,
                            summary,
                            saveImage,
                            validated,
                            category,
                            categories,
                            photo,
                            video="https://youtu.be/YdvkRnDf1qA",
                            saveVideo
                        }) => {
    if(video === null) video = "https://youtu.be/YdvkRnDf1qA";
    return(
        <div>
            <Paper className="la-card" zDepth={2} >
                {validated && <div className="la-card-cover"></div>}
                <div className="el-flex">
                    <CardMedia style={{flex:1, maxWidth:300, marginRight:20}} >
                        <img alt="FixterGeek" src={icono} />
                    </CardMedia>
                    <div style={{flex:2}}>
                        <CardTitle title="Información Basica" subtitle="Completa tu proyecto" />
                        <div>
                            <TextField
                                name="name"
                                style={{
                                    borderColor:'red'
                                }}
                                floatingLabelText="Nombre de tu proyecto"
                                value={name}
                                onChange={onChange}
                            />
                            <br/>
                            <SelectField
                                name="category"
                                floatingLabelText="Categoría"
                                value={category[0]}
                                onChange={onChange}
                            >

                                {categories.map(c=>{
                                        return(
                                            <MenuItem key={c.id} value={c.id} primaryText={c.name} />
                                        );
                                    }
                                )}
                            </SelectField>
                            <br/>
                            $<TextField
                            name="goal"
                            style={{
                                borderColor:'red'
                            }}
                            type="number"
                            floatingLabelText="Cantidad de tu proyecto"
                            value={goal}
                            onChange={onChange}
                        />MXN

                            <TextField
                                name="summary"
                                style={{
                                    borderColor:'red'
                                }}
                                floatingLabelText="Describe tu proyecto"
                                value={summary}
                                onChange={onChange}
                                multiLine={true}
                                rows={4}
                                onInput={(e)=>{

                                    if(e.target.value.length < 141){

                                        resto=e.target.value

                                    }else{
                                        e.target.value = resto
                                    }
                                    maxText=140 - e.target.value.length;
                                }}
                            />
                            <span>{maxText}</span>
                            <br/>
                            <RaisedButton
                                type="submit"
                                backgroundColor="#a4c639"
                                buttonStyle={{color:'white'}}
                                onTouchTap={onSave}
                            >
                                Guardar
                            </RaisedButton>
                        </div>
                    </div>

                </div>
            </Paper>

            <Paper className="la-card" zDepth={2} >
                <div className="el-flex">
                    <CardMedia
                        onClick={()=>laRef.click()}
                        style={{flex:3, maxWidth:300, marginRight:20, cursor:"pointer"}} >
                        <img alt="No hay imagen" src={photo ? photo:icono} />
                    </CardMedia>
                    <div style={{flex:1}}>
                        {loading && <CircularProgress/>}
                        <h2>Selecciona la imagen de portada de tu proyecto</h2>
                        <p>Solo archivos png, jpg menores a 2mb </p>
                        <span>Da click en la imagen para subir una nueva</span>
                    </div>
                    <input
                        accept="image/*"
                        onChange={saveImage}
                        hidden={true} ref={input=>laRef=input} type="file"/>
                </div>
            </Paper>

            <Paper className="la-card" zDepth={2} >
                <div className="el-flex" style={{flexDirection:"column"}}>
                    <CardMedia
                        onClick={()=>laRef.click()}
                        style={{flex:3, maxWidth:300, marginRight:20, cursor:"pointer"}} >
                        <iframe title="video_principal" width="320" height="200" src={"https://www.youtube.com/embed/" + video.split("/")[3]} frameBorder="0" allowFullScreen></iframe>
                    </CardMedia>
                    <div style={{flex:1}}>
                        {loading && <CircularProgress/>}
                        <h2>Agrega un video a tu proyecto</h2>
                        <p>Pega el link de tu video de Youtube</p>
                        <input
                            style={{width:"300"}}
                            type="text"
                            value={video}
                            onChange={saveVideo}
                        />
                    </div>

                </div>
            </Paper>


        </div>

    );
};