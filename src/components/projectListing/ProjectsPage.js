import React, { Component } from 'react';
//import ListingNavBar from './ListingNavBar';
import MainList from './MainList';
//import AppBar from 'material-ui/AppBar';
import api from '../../Api/Django';
import toastr from 'toastr';
import MainLoader from '../common/MainLoader';
//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navActions from '../../redux/actions/navBarNameActions';
import {setFilter, search} from "../../redux/actions/filterActions";


class ProjectsPage extends Component{

    state = {
        search: null,
        loading:true,
        category: null,
        ancho: document.documentElement.clientWidth < 600,
        items: [],
    };


    changeCategory = (value) => {
        // this.getAll()
        //     .then(
        //         ()=>{

        //             if(value){
        //                 const {items} = this.state;
        //                 // console.log('change', items);
        //                 const cat = value;
        //                 // const newArray = _.sortBy(items, 'category', function(i){
        //                 const newArray = items.filter(function(i){
        //                     return i.category[0].slug === cat
        //                 });
        //                 this.setState({items:newArray});



        //             }
        //         }
        //     );



    };


    componentWillMount(){
        //this.getAll();
        //console.log("mi match: ", this.props.match)

    }


    getAll = () =>{
        return api.getAxiosAllProjects()
            .then(r=>{
                // console.log(r.data);
                this.setState({items:r, loading:false});
            })
            .catch(e=>toastr.error('no se puedieron cargar los proyectos, revisa tu conexción a internet'));
    };

    provisionalLink = (id) => {
        this.props.history.push('/detail/'+id);
    };

    onChangeSearch = (e) => {
        console.log(e.target.value);
      this.setState({
          search: e.target.value
      });
    };

    componentWillReceiveProps(nP){
        this.setState({
            items:nP.projects,
            loading:!nP.fetched,
            category:nP.category,
            setSearch:nP.setSearch,
            search:nP.search
        });
        nP.changeName("explorar")
    }

    componentDidMount(){
        this.setState({
            items:this.props.projects,
            loading:!this.props.fetched,
            category:this.props.category,
            setSearch:this.props.setSearch,
            search:this.props.search
        });
        //
        this.props.changeName("explorar");
    }

    componentWillUnmount(){
        this.props.changeName("");
        this.props.setSearch(null);

    }

    render(){
        // const {category, search} = this.state;
        // //const regEx = new RegExp(category.id,'i');
        // let items = this.state.items.filter(
        //     item=>{
        //         //console.log("categoria del project", item.category[0]);
        //         //console.log("del reducer: ", category);
        //         if(category.slug === "todos") return item;
        //         //return regEx.test(item.category[0]);
        //         return item.category[0] === category.id;
        //     }
        // );
        let items = this.props.projects;
        // if(search){
        //     //console.log("busca: ",search);
        //     const rEx = new RegExp(search,'i');
        //     items = this.state.items.filter(
        //         item=>{
        //             return rEx.test(item.name) || rEx.test(item.description);
        //         }
        //     );
        // }
        return(
            <div>
                {this.state.loading && <MainLoader/>}


                {/*{!this.state.ancho ? <ListingNavBar*/}
                        {/*history={this.props.history}*/}
                        {/*onChangeSearch={this.onChangeSearch}*/}
                        {/*changeCategory = {this.changeCategory}*/}
                    {/*/> : <MiniNav/> }*/}
                <MainList
                    provisionalLink={this.provisionalLink}
                    items={items}/>
            </div>
        );
    }
}

// const MiniNav = () => (
//     <AppBar
//         title="Explorar"
//         iconElementLeft={<span></span>}
//     />
// );


function mapStateToProps(state, ownProps){
    let category;
    const categories = state.category.list;
    category = categories.find(c=>c.slug == state.filter.category);
    if(category===undefined) category = {slug:"todos"};
    console.log(state);
    return {
        categories,
        category,
        search:state.filter.search,
        projects:state.projects,
        fetched:state.projects.length !== 0
    }
}

function mapDispatchToProps(dispatch, ownProps){
    //console.log(ownProps.match.params.category);
    const {category} = ownProps.match.params;
    //console.log(category);
    if(category !== undefined) dispatch(setFilter(category));
    if(category === undefined) dispatch(setFilter("todos"));
    return {
        changeName: bindActionCreators(navActions.changeName, dispatch),
        setSearch:bindActionCreators(search, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);