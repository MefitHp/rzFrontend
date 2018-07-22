import React, { Component } from 'react';
import ControlBar from './ControlBar';
import { Route } from 'react-router-dom';
import {Basicos} from './Basicos';
import Rewards from './Rewards';
import api from '../../Api/Django';
import './Manager.css';
import firebase from '../../Api/firebase';
import DescriptionPage from './DescriptionPage';
import toastr from 'toastr';
import {Actualizaciones} from './Actualizaciones';
import Aportaciones from './Aportaciones';
import PreviewPage from './PreviewPage';
import MainLoader from '../common/MainLoader';

//redux
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
//import {withRouter} from 'react-router-dom';
// import * as navActions from '../../redux/actions/navBarNameActions';
// import * as filterActions from '../../redux/actions/filterActions';
// import {saveProject} from '../../redux/actions/projectsActions';
// import {addReward} from "../../redux/actions/rewardsActions";
// import {saveUpdate, removeUpdate} from "../../redux/actions/updatesActions";
// import {getAllDonaciones} from "../../redux/actions/donacionActions";
//api
import {getOwnProject, getCategories, updateProject} from '../../Api/nodejs';


class ProjectManagerContainer extends Component {

    constructor() {
        super();

        this.state = {
            project: {},
            categories:[],
            //before 2018
            open: true,
            ancho: document.documentElement.clientWidth < 600,
            loading: false,
            fetched: false,
            update: {
                update: "",
                image: null,
                date: "2017-11-06T21:28:35.357306Z",
                project: 1,
                author: 3,
                file: null

            }


        }
    }

    onChangeBasicos = (e,index,value) => {
       // console.log(e.target)
        const {project} = this.state;
        const field = e.target.name;
        if(value){
            project.category = value;
        }else{
            project[field] = e.target.value;
        }
        
        this.setState({project});
    };

    saveImage = (e) => {
        this.setState({loading:true})
        //console.log(e.target.files[0]);
        const file = e.target.files[0];
        const {project} = this.state;
        if (file.size > 2000000 ) return toastr.warning("Tu imagen supera el tamaño máximo");
        let storageRef = firebase.storage().ref('projects/covers');
        storageRef.child(project._id).put(file)
            .then(s=>{
                console.log(s);
                toastr.success("Tu imagen se subió correctamente");
                //version 4
                    project.photo = s.downloadURL;
                //version 5 
                    //storageRef.getDownloadURL().then(url=> project.photo = url)
                    return updateProject(project)
                    
                

            })
            .then(project=>{
                toastr.success("Se actualizó tu projecto");
                this.setState({project, loading:false})
            })
            .catch(e=>{
                toastr.error("No se pudo subir tu archivo, intenta de nuevo", e)
            });

    };

    saveVideo = (e) => {
      let value = e.target.value;
      let {project} = this.state;
      project.video = value;
      //value = value.split("/");
      updateProject(project)
          .then(r=>{
              toastr.success("Tu video se guardó correctamente");
              this.setState({project});
          })
          .catch(e=>toastr.error("no se pudo guardar tu video"));
    };

    saveBasicos = () => {
        //e.preventDefault();
        const {project} = this.state;
        if(project.title.length < 5) return toastr.error("El nombre de el proyecto es muy corto");
        else if(project.goal < 1000) return toastr.error("El monto minimo es de 1000");
        else if(!project.summary || project.summary.length < 7) return toastr.error("El resumen de tu proyecto es muy corto");
        else{
            //preparamos la categoría:
            //project.category = [project.category[0].id];
            //this.props.saveProject(project)
            updateProject(project)
                .then(project=>toastr.success("Tus cambios se guardaón"))
                .catch(err=>toastr.error("No se pudo guardar"));
        }

        //delete project.photo; // evitar subir link en vez de archivo

     // api.updateProject(this.state.project.id, project)
       //   .then(r=>toastr.success('proyecto guardado'))
         // .catch(e=>toastr.error('problema al guardar ',e));
    };

    updateProject = () => {
        this.setState({
            loading:true
        });
        let {project} = this.state;
        // project.body = input;
        //this.props.saveProject(project)
        updateProject(project)
            .then(project=>{
                toastr.success('Descripción guardada con éxito');
                //console.log(project);
                this.setState({loading:false, project})
            })
            .catch(e=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
        //delete project.photo; // evitar subir link en vez de archivo
        // api.updateProject(this.state.project.id, project)
        //     .then((project)=>{
        //         console.log(project);
        //         toastr.success('Descripción guardada con éxito');
        //         this.setState({
        //             loading:false,
        //             project
        //         });
        //     })
        //     .catch((e)=>toastr.error('Algo muy malo pasó!, intenta de nuevo porfavor '));
    };

    getProjectAgain = () => {
        api.getProject(this.props.match.params.projectId)
            .then(project=>{
                if(project.detail === "No encontrado."){
                    this.props.history.push('/');
                }
                this.setState({project, loading:false});
                // console.log('dentro', project);

                console.log('state: ',this.state.project);
            })
            .catch(e=>{
                alert('no se pudo',e);
                this.props.history.push('/');

            });
    };


    handleToggle = () => {
       // this.setState({
         //   open: !this.state.open
       // });

        //this.props.toggleMenu();

    };

    //para las actualizaciones:
    onUpload = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        let update = this.state.update;

        console.log(file);
        if(file.size > 1500000) return toastr.warning("Tu foto es demaciado pesada");

        reader.onloadend = () => {
            update["file"] = file;
            update["image"] = reader.result;
            this.setState({update});
        };

        reader.readAsDataURL(file)
    };

    onChangeUpdate = (e) => {
        let update = this.state.update;
        update["update"] = e.target.value;
        this.setState({update});
    };

    onPostUpdate = (e) => {
        e.preventDefault();
        this.setState({loading:true});
        let update = this.state.update;
        update["project"] = this.state.project.id;
        delete update["image"];
        this.props.saveUpdate(update)
            .then(r=>{
                console.log(r);
                if(update["file"]){
                    firebase.storage().ref(JSON.stringify(this.state.project.id)).child("update" + r.id).put(update["file"])
                        .then(s=>{
                            r["image"] = s.downloadURL;
                            //console.log(r);
                            this.props.saveUpdate(r);
                            //console.log(r)
                            this.setState({loading:false, update:{}});
                        });
                }else{
                    this.setState({loading:false});
                }

            })
            .catch();

        //subiendo img
        //firebase.storage().ref("update" + id).put(update["file"])
            //.then(s=>update["image"] = s.downloadURL)
        //subiendo img

    };

    deleteUpdate = (update) => {
        this.props.removeUpdate(update)
            .then(r=>toastr.success("Tu actualización se ha borrado"))
            .catch(e=>toastr.error("no se pudo borrar"));
    };

    //quitar reward
    rewardRemoved = (reward) => {
        let {rewards} = this.state.project;
        const {project} = this.state;
        rewards = rewards.filter(r=>r._id != reward._id);
        project.rewards = rewards;
        console.log(project)
        this.setState({project});
        this.props.history.goBack()
    }

    requestRevision = () => {
        if(!window.confirm('¿Estas seguro de mandar a revisión?, ya no podras modificar el proyecto')) return;
        const {project} = this.state;
        project.status = "VALIDATING";
        updateProject(project)
        .then(project=>{
            this.setState({project})
            this.props.history.push('/userProfile')
        })
        .catch(e=>toastr.error('No se pudo enviar, intenta más tarde '));
    }




    basicsPage = () => {
    return (
        <Basicos
            {...this.state.project}
            onChange={this.onChangeBasicos}
            onSave={this.saveBasicos}
            saveImage={this.saveImage}
            saveVideo={this.saveVideo}
            loading={this.state.loading}
            categories={this.state.categories}
            requestRevision={this.requestRevision}
        />
    );
};

    rewardsPage = () => {
        return (
            <Rewards
                project={this.state.project}
                loading={this.state.loading}
                history={this.props.history}
                updateProject={this.getProjectAgain}
                addReward={this.props.addReward}
                rewards={this.state.project.rewards}
                rewardRemoved = {this.rewardRemoved}

            />
        );
    };

    descPage = () => {
        return(
            <DescriptionPage
                project={this.state.project}
                onChange={this.onChangeBasicos}
                loading={this.state.loading}
                onSave={this.updateProject}
            />
        );
    };

    // updates = () => {
    //   return(
    //       <Actualizaciones
    //           onChange={this.onChangeUpdate}
    //           onUpload={this.onUpload}
    //           {...this.state.update}
    //           loading={this.state.loading}
    //           onSubmit={this.onPostUpdate}
    //           updates={this.state.project.updates}
    //           deleteUpdate={this.deleteUpdate}
    //       />
    //   );
    // };

    funds = () => {
      return(
          <Aportaciones
              donaciones={this.state.project.funds}
              {...this.state.project}
          />
      );
    };

    preview = () => {
      return (
          <PreviewPage
            project={this.state.project}
          />
      );
    };


    componentWillMount(){
        getOwnProject(this.props.match.params.projectId)
        .then(project=>{
            if(project.status === "VALIDATING"){
                toastr.warning('Tu Proyecto está en revisión, pronto recibirás una respuesta')
                 return this.props.history.push('/userProfile')
             }
            this.setState({project, fetched:true, loading:false})
        })
        .catch(e=>{
            toastr.error("mijo " + e)
        })
        getCategories()
        .then(categories=>{
            this.setState({categories})
        })

    }



    render(){
        const {fetched, open, ancho} = this.state;
        if(!fetched) return  <MainLoader/>;
        return(
            <div>
                {/*<ManageNavBar elMatch={this.props.match} handleToggle={this.handleToggle} />*/}

                <div>
                    <ControlBar handleToggle={this.handleToggle} ancho={ancho} open={open} project={this.state.project} elMatch={this.props.match} />
                    <div className={true ? 'el-ancho':'pura-transition'}>
                        {/*<h4>{this.props.match.params.projectId}</h4>*/}

                        {/*<Route path={`${this.props.match.url}/:topicId`} component={Seccion}/>*/}


                        <Route path={`${this.props.match.url}/basicos`} render={this.basicsPage} />
                        <Route path={`${this.props.match.url}/descripcion`} render={this.descPage} />
                        <Route path={`${this.props.match.url}/recompensas`} render={this.rewardsPage} />
                        {/* <Route path={`${this.props.match.url}/actualizaciones`} render={this.updates} /> */}
                        <Route path={`${this.props.match.url}/aportaciones`} render={this.funds} />
                        <Route path={`${this.props.match.url}/preview`} render={this.preview}/>

                        <Route exact path={this.props.match.url} render={this.basicsPage}/>



                    </div>
                </div>


            </div>
        );
    }
}

export const ManagerPage =  ProjectManagerContainer;
