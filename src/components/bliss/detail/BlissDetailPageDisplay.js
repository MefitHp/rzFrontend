/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import LinearProgress from 'material-ui/LinearProgress';
import ReactMarkdown from 'react-markdown';
import {FontIcon} from 'material-ui';
import {UpdateCard} from "../../projectManager/Actualizaciones";


const portada = "https://a0.muscache.com/im/pictures/23991343/89872a3f_original.jpg?aki_policy=large";
const user = "https://cdn-images-1.medium.com/max/1200/0*jp3IFb08Sy3_k3N_.";
const mark = "<h1>Perro</h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, aut eum excepturi, ipsa ipsum minima, nam placeat possimus quas quasi qui rerum tempora voluptatum! Ad cum eos illum laudantium odit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni maiores nisi nobis nulla optio pariatur quo sit vel! Autem beatae eligendi fugit iure minus neque non officia quam, unde voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, beatae dolorem doloremque fuga hic illum ipsum maiores nihil perspiciatis totam veniam vitae voluptatibus? Cupiditate perferendis quae quasi temporibus vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consequuntur cum est excepturi hic labore maxime molestiae necessitatibus obcaecati perferendis qui, quo rerum vel vero? Esse explicabo labore officiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem doloribus, ducimus ea esse in laboriosam libero modi neque pariatur porro sed sint sit tempore ullam veniam veritatis voluptates voluptatum!"
export const BlissDetailPageDisplay = ({
                                           goToCart,
                                           completed,
                                           porcent,
                                           showVideo,
                                           displayVideo,
                                           name,
                                           followers,
                                           goal,
                                           author,
                                           photo,
                                           video,
                                           donaciones,
                                           description,
                                           rewards,
                                           onShare,
                                           cat,
                                           updates,
                                           changeRoute,
                                           toggleFollow,
                                           following

}) => {
    //console.log(following);
    goal = parseFloat(goal);
    if(!photo) photo=portada;
    if(video)
        video = video.split("/")[3];
    else
        video = "YdvkRnDf1qA";
    return (
        <section style={{paddingTop:56}}>
            {!displayVideo ?
                <article style={{backgroundImage:`url('${photo}')`}} className="bliss-detail-portada">
                    <div onClick={()=>changeRoute(cat.slug)} className='extras' style={{padding:"10px 20px", cursor:"pointer"}}>
                        <FontIcon className='material-icons etiqueta' style={{transform:'scale(.4)', color:'white'}} >local_offer</FontIcon>
                        <span style={{color:"white", fontSize:"200%"}}>{cat.name}</span>
                    </div>
                <button
                    onClick={toggleFollow}
                    style={following ? styles.siguiendo:null}
                >
                    <FontAwesome
                        style={{color:following ? "white":null}}
                        className={following ? "fa-heart":"fa-heart-o"}
                        name="fa-heart-o"
                    />
                    {following ? "Siguiendo":"Seguir"}
                </button>
                <button onClick={onShare} >
                    <FontAwesome
                        name='fa-external-link'
                        className="fa-external-link"
                    />
                    Compartir
                </button>
                <FontAwesome
                    onClick={showVideo}
                    name="fa-play-circle-o"
                    className="fa-play-circle-o"
                    size='5x'
                    style={{color:"white"}}
                />

            </article> :
                <div
                    style={{
                        height:'568px',
                        width:'100%',
                       // paddingTop:'64px',
                        textAlign:'center',

                    }}
                >
                    <iframe title="bliss" width="100%" height="100%" src={"https://www.youtube.com/embed/" + video  + "?autoplay=1"} frameBorder="0" allowFullScreen/>
                </div>
            }

            <article className="bliss-detail-body">
                <div className="bliss-detail-content">
                    <nav>
                        <span>Emprendedor</span>
                        <span>Resumen</span>
                        <span>Comentarios</span>
                        {displayVideo && <span >

                                <FontAwesome
                                    onClick={toggleFollow}

                                    className={following ? "fa-heart":"fa-heart-o"}
                                    name="fa-heart-o"
                                />


                                <FontAwesome
                                    onClick={onShare}
                                    className="fa-external-link"
                                    name="fa-external-link"
                                />

                                <FontAwesome
                                    onClick={showVideo}
                                    className="fa-toggle-off"
                                    name="fa-toggle-off"
                                />

                        </span>}
                    </nav>

                    <div className="bliss-detail-prime-info">
                        <div>
                            <h2>{name}</h2>
                            <div className='bar_progress'>
                                <LinearProgress mode="determinate" color="#4596A0" value={completed} />
                                <p>{porcent}% financiado <span>de la meta de</span> <span>${goal}</span> </p>

                            </div>
                            <span>
                                <FontAwesome
                                    className="fa-users"
                                    name="fa-users"
                                />
                                {followers.length} Seguidores
                            </span>
                            <span>
                                <FontAwesome
                                    className="fa-money"
                                    name="fa-money"
                                />
                                {donaciones.length} Donaciones
                            </span>
                            <span>
                                <FontAwesome
                                    className="fa-calendar-plus-o"
                                    name="fa-calendar-plus-o"
                                />

                                Días restantes
                            </span>
                        </div>
                        <figure>
                            <img src={author.profile.photoURL} alt=""/>
                            <span>{author.username}</span>
                        </figure>
                    </div>

                    <div className="bliss-detail-markdown mark">
                        <ReactMarkdown source={description} />


                    </div>

                    {/*Actualizaciones*/}

                    <div>
                        {updates.length>0 && <h2>Actualizaciones: </h2>}
                        {updates.sort((a,b)=>b.id-a.id).map(u=>{
                            return(
                                <UpdateCard
                                    key={u.id}
                                    {...u}
                                />
                            );
                        })}
                    </div>


                </div> {/*Content is the white space*/}

                <div className="bliss-detail-prime-reward">  {/*Reward floating*/}
                    <div className="reward-destacado">
                        <span>
                            $ {goal.toLocaleString(navigator.language, { minimumFractionDigits: 2 })} MXN
                        </span>
                        <span>
                            Meta Propuesta
                        </span>
                    </div>

                    <article>
                        <div className="reward-destacada-card"> {/*dibujado por un map*/}
                            <h3>Recompensa destacada</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 2,500.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        {rewards.map(r=>{
                            let monto = parseFloat(r.amount);
                            return(
                                <div
                                    onClick={()=>goToCart(r.id)}
                                    key={r.id}>
                                    <h3>{r.title}</h3>
                                    <p>
                                        {r.description}
                                    </p>
                                    <span>$ {monto.toLocaleString(navigator.language, {minimumFractionDigits:2})} MXN</span>
                                </div>
                            );
                        })}



                    </article>





                </div> {/*Reward floating*/}





            </article>


        </section>
    );
};

const styles = {
    siguiendo: {
        backgroundColor:"#87316C",
        color:"white"
    }
};

