/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import LinearProgress from 'material-ui/LinearProgress';
import ReactMarkdown from 'react-markdown';


const portada = "https://a0.muscache.com/im/pictures/23991343/89872a3f_original.jpg?aki_policy=large";
const user = "https://cdn-images-1.medium.com/max/1200/0*jp3IFb08Sy3_k3N_.";
const mark = "<h1>Perro</h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, aut eum excepturi, ipsa ipsum minima, nam placeat possimus quas quasi qui rerum tempora voluptatum! Ad cum eos illum laudantium odit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni maiores nisi nobis nulla optio pariatur quo sit vel! Autem beatae eligendi fugit iure minus neque non officia quam, unde voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, beatae dolorem doloremque fuga hic illum ipsum maiores nihil perspiciatis totam veniam vitae voluptatibus? Cupiditate perferendis quae quasi temporibus vitae?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consequuntur cum est excepturi hic labore maxime molestiae necessitatibus obcaecati perferendis qui, quo rerum vel vero? Esse explicabo labore officiis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dolorem doloribus, ducimus ea esse in laboriosam libero modi neque pariatur porro sed sint sit tempore ullam veniam veritatis voluptates voluptatum!"
export const BlissDetailPageDisplay = ({showVideo, displayVideo}) => {
    return (
        <section style={{paddingTop:56}}>
            {!displayVideo ?
                <article style={{backgroundImage:`url('${portada}')`}} className="bliss-detail-portada">
                <button>
                    <FontAwesome
                        className="fa-heart-o"
                    />
                    Guardar
                </button>
                <button>
                    <FontAwesome
                        className="fa-external-link"
                    />
                    Compartir
                </button>
                <FontAwesome
                    onClick={showVideo}
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
                    <iframe title="bliss" width="100%" height="100%" src={"https://www.youtube.com/embed/" + "YdvkRnDf1qA" + "?autoplay=1"} frameBorder="0" allowFullScreen/>
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
                                    className="fa-heart-o"
                                />


                                <FontAwesome
                                    className="fa-external-link"
                                />

                                <FontAwesome
                                    onClick={showVideo}
                                    className="fa-toggle-off"
                                />

                        </span>}
                    </nav>

                    <div className="bliss-detail-prime-info">
                        <div>
                            <h2>Titulo del Proyecto que se está Mostrando</h2>
                            <LinearProgress mode="determinate" value={70} />
                            <span>
                                <FontAwesome
                                className="fa-users"
                                />
                                Seguidores
                            </span>
                            <span>
                                <FontAwesome
                                    className="fa-money"
                                />
                                Donadores
                            </span>
                            <span>
                                <FontAwesome
                                    className="fa-calendar-plus-o"
                                />

                                Días restantes
                            </span>
                        </div>
                        <figure>
                            <img src={user} alt=""/>
                            <span>Héctor BlisS</span>
                        </figure>
                    </div>

                    <div className="bliss-detail-markdown mark">
                        <ReactMarkdown source={mark} />


                    </div>



                </div> {/*Content is the white space*/}


                <div className="bliss-detail-prime-reward">  {/*Reward floating*/}
                    <div className="reward-destacado">
                        <span>
                            $2,500.00 MXN
                        </span>
                        <span>
                            Recompensa destacada
                        </span>
                    </div>

                    <article>
                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div className="reward-destacada-card"> {/*dibujado por un map*/}
                            <h3>Recompensa destacada</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 2,500.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                        <div> {/*dibujado por un map*/}
                            <h3>Titulo de la recompensa</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur aut consequuntur, cupiditate eius est et hic illum ipsum maxime nobis odio, optio placeat reiciendis rerum sed sequi sunt voluptatum?
                            </p>
                            <span>$ 5,000.00 MXN</span>
                        </div> {/*dibujado por un map*/}

                    </article>





                </div> {/*Reward floating*/}

            </article>


        </section>
    );
};

