import $ from "jquery";
import axios from 'axios';
import FormData from 'form-data'


let debug = true;
// let firebase = true;

let url = 'http://pelusina.fixter.org/projects/';
let urlProfiles = 'http://pelusina.fixter.org/profiles/';
let urlRewards = 'http://pelusina.fixter.org/rewards/';
let publicurl = 'http://pelusina.fixter.org/list/';
let urlToken = 'http://pelusina.fixter.org/auth/convert-token';
let urlSelfProfile = 'http://pelusina.fixter.org/profile/';
let urlUsers = "http://pelusina.fixter.org/users/";
let urlPreview = 'https://still-harbor-68517.herokuapp.com/preview/';

// const otra = 'http://perro.com';


// const userToken = JSON.parse(localStorage.getItem('userToken'));


// if (debug) {
//     url = 'http://localhost:8000/projects/';
//     urlProfiles = 'http://pelusina.fixter.org/profiles/';
//     urlRewards = 'http://localhost:8000/rewards/';
//     publicurl = 'http://localhost:8000/list/';
//     urlToken = 'http://localhost:8000/auth/convert-token';
//     urlSelfProfile = 'http://localhost:8000/profile/';
//     urlUsers = "http://localhost:8000/users/";
//
//
//
// }

if (debug) {
    url = 'https://still-harbor-68517.herokuapp.com/projects/';
    urlProfiles = 'https://still-harbor-68517.herokuapp.com/profiles/';
    urlRewards = 'https://still-harbor-68517.herokuapp.com/rewards/';
    publicurl = 'https://still-harbor-68517.herokuapp.com/list/';
    urlToken = 'https://still-harbor-68517.herokuapp.com/convert-token';
    urlSelfProfile = 'https://still-harbor-68517.herokuapp.com/profile/';
    urlUsers = "https://still-harbor-68517.herokuapp.com/users/";
    urlPreview = 'https://still-harbor-68517.herokuapp.com/preview/';



}






const api = {
    postNewProject: (project) => {

        return new Promise(function (resolve, reject) {
            const token = JSON.parse(localStorage.getItem('userToken'));
            const instance = axios.create({
                baseURL: url,
                // data:project,
                // timeout: 5000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token}
            });
            instance.post('',project)
                .then(function (response) {
                        resolve(response);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });

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
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: publicurl,
                // timeout: 5000,
                headers: {'Content-Type': 'application/json'}
            });
            instance.get(id + '/')
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },

    updateProject: (id, project) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));


        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: url,
                // timeout: 5000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken}
            });
            instance.patch(id+'/', project)
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });

    },

    //Axios project requests

    getAxiosAllProjects: () => {

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: publicurl,
                // timeout: 5000,
                headers: {'Content-Type': 'application/json'}
            });
            instance.get()
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },

    getAxiosProject: (id) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: url,
                timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken}
            });
            instance.get(id + '/')
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },

    getPreview: (project) => {
        return new Promise(function (resolve, reject) {

            const instance = axios.create({
                baseURL: urlPreview,
                headers: {'Content-Type': 'application/json'}
            });
            instance.get(project.id + '/')
                .then(function (response) {

                    resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },

    patchImageProject: (id, file) => {
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            let data = new FormData();
            data.append('photo', file, file.fileName);
            console.log('mandado: ', data);
            const instance = axios.create({
                baseURL: url,
                // timeout: 2000,
                headers: {
                    // 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.patch(id + "/" ,data)
                .then(function (response) {

                    resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    // console.log('respuesta?', error.response.data);
                    // reject(error.response.data);
                    reject(error);
                });


        });
    },

    //User Profiles

    createProfile: (photoURL) => {
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlSelfProfile,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.post('',{photoURL})
                .then(function (response) {

                        resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ', error);
                    // console.log('respuesta?', error.response.data);
                    // reject(error.response.data);
                    reject(error);
                });


        });
    },

    getAllUsers: () => {
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlUsers,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            instance.get()
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error);
                    console.log('respuesta?', error.response);
                    reject(error);
                });


        });
    },

    getProfile: (id) => {
        return fetch(urlProfiles + id + '/')
            .then(handleErrors)
            .then(r=>{
                console.log('res',r);
                return r.json();
            })
            .catch(e=>{
                return e
            });
    },

    getSelfProfile:() => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlSelfProfile,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.get()
                .then(function (response) {

                        resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    // console.log('respuesta?', error.response.data);
                    // reject(error.response.data);
                    reject(error);
                });


        });
    },

    updateProfile:(id, profile) => {


        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlProfiles,
                // timeout: 2000,
                headers: {'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + userToken}
            });
            instance.put(id + '/', profile)
                .then(function (response) {

                        resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ',error);
                    reject(error);
                });


        });
    },


    // Recompensas


    updateReward: (id, profile) => {
        let request = new Request(urlRewards + id + '/', {
            method: 'PUT',
            body: JSON.stringify(profile),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        return fetch(request)
            // .then(handleErrors)
            .then(fixterErrors)
            .then(r=>{
                return r.json();
            })
            .catch(e=>{
                console.log(e);
                throw Error(e.statusText);


            });

    },

    deleteReward: (id) => {
        let request = new Request(urlRewards + id + '/', {
            method: 'DELETE',
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
                    console.log('estoy aquí!!!');
                    return e;
                });

    },

    postNewReward: (reward) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlRewards,
                // timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken}
            });
            instance.post('', reward)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ',error.response);
                    reject(error);
                });


        });

    },

    //Axios testing:

    putAxiosReward: (id, reward) => {

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlRewards,
                timeout: 2000,
                headers: {'Content-Type': 'application/json'}
            });
            instance.put(id + '/', reward)
                .then(function (response) {

                        resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ',error);
                    reject(error);
                });


        });
    },

    getAndSaveToken: (token) => {
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlToken,
                timeout: 2000,
                headers: {'Content-Type': 'application/json'}
            });
            instance.post()
                .then(function (response) {

                        resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ',error);
                    reject(error);
                });


        });
    },

    getUserProjects: () => {
      const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: url,
//                timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.get()
                .then(function (response) {

                  console.log(response.data)
                        resolve(response);
                })
                .catch(function (error) {
                    console.log('el error: ',error);
                    reject(error);
                });


        });
    }

  };

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function fixterErrors(response) {
    return new Promise((res, rej) => {
        if(!response.ok){
            return rej(response);
        }
        return res(response);
    });
}


export default api;
