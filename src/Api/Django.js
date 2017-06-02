import $ from "jquery";

const url = 'http://pelusina.fixter.org/projects/';
const urlProfiles = 'http://pelusina.fixter.org/profiles/';
const otra = 'http://perro.com'

const api = {
    postNewProject: (project) => {
        let request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(project),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        return fetch(request)
            .then(r=>{
                console.log(r);
                return r.json();
            })
            .catch(e=>console.log(e));

  },

    jqueryPost: (project) => {
        return $.ajax({
            url:url,
            method:'POST',
            data: project,
            success: function(r){
                console.log('exito', r);
                return r
            },
            error: function(e){
                console.log('error', e)
            }
        });
    },

    getProject: (id) => {
        return fetch(url + id + '/')
            .then(r=>{
                console.log('res',r)
                return r.json();
            })
            .catch(e=>{
                return e
            });
    },

    updateProject: (id, project) => {
        let request = new Request(url + id + '/', {
            method: 'PUT',
            body: JSON.stringify(project),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        return fetch(request)
            .then(handleErrors)
            .then(r=>{
                console.log(r);
                return r.json();
            })
            .catch(e=>{
                console.log(e);
                return e.json();
            });

    },

    //User Profiles

    getProfile: (id) => {
        return fetch(urlProfiles + id + '/')
            .then(r=>{
                console.log('res',r);
                return r.json();
            })
            .catch(e=>{
                return e
            });
    }

  };

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


export default api;
