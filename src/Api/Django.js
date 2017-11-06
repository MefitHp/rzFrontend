import $ from "jquery";
import axios from 'axios';
import FormData from 'form-data'




let debug = false;


// let url = 'https://still-harbor-68517.herokuapp.com/projects/';
// let urlProfiles = 'https://still-harbor-68517.herokuapp.com/profiles/';
// let urlRewards = 'https://still-harbor-68517.herokuapp.com/rewards/';
// let publicurl = 'https://still-harbor-68517.herokuapp.com/list/';
// let urlToken = 'https://still-harbor-68517.herokuapp.com/convert-token';
// let urlSelfProfile = 'https://still-harbor-68517.herokuapp.com/profile/';
// let urlUsers = "https://still-harbor-68517.herokuapp.com/users/";
// let urlPreview = 'https://still-harbor-68517.herokuapp.com/preview/';
// let urlObservations = 'https://still-harbor-68517.herokuapp.com/observations/';
// let urlUserProjects = 'https://still-harbor-68517.herokuapp.com/userprojects/';
// let urlPay = 'https://still-harbor-68517.herokuapp.com/pay/';
// let urlUserUpdates = 'https://still-harbor-68517.herokuapp.com/userupdates/';
// let urlUpdates = 'https://still-harbor-68517.herokuapp.com/updates/';
// let urlFollow = 'https://still-harbor-68517.herokuapp.com/follow/';
// //nuevas octubre 2017
// let urlDonaciones = 'https://still-harbor-68517.herokuapp.com/donaciones/';
// let followedprojectsUrl = 'https://still-harbor-68517.herokuapp.com/followedprojects/';




// let firebase = true;

let url = 'http://pelusina.fixter.org/projects/';
let urlProfiles = 'http://pelusina.fixter.org/profiles/';
let urlRewards = 'http://pelusina.fixter.org/rewards/';
let publicurl = 'http://pelusina.fixter.org/list/';
let urlToken = 'http://pelusina.fixter.org/auth/convert-token';
let urlSelfProfile = 'http://pelusina.fixter.org/profile/';
let urlUsers = "http://pelusina.fixter.org/users/";
let urlUserProjects = 'http://pelusina.fixter.org/userprojects/';
let urlPreview = 'https://still-harbor-68517.herokuapp.com/preview/';
let urlObservations = 'http://pelusina.fixter.org/observations/';
let urlPay = 'https://still-harbor-68517.herokuapp.com/pay/';
let urlUserUpdates = 'http://pelusina.fixter.org/userupdates/';
let urlUpdates = 'http://pelusina.fixter.org/updates/';
let urlFollow = 'http://pelusina.fixter.org/follow/';
let urlDonaciones = 'http://pelusina.fixter.org/donaciones/';
let followedprojectsUrl = 'http://pelusina.fixter.org/followedprojects/';

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


// if (debug) {
//     url = 'https://still-harbor-68517.herokuapp.com/projects/';
//     urlProfiles = 'https://still-harbor-68517.herokuapp.com/profiles/';
//     urlRewards = 'https://still-harbor-68517.herokuapp.com/rewards/';
//     publicurl = 'https://still-harbor-68517.herokuapp.com/list/';
//     urlToken = 'https://still-harbor-68517.herokuapp.com/convert-token';
//     urlSelfProfile = 'https://still-harbor-68517.herokuapp.com/profile/';
//     urlUsers = "https://still-harbor-68517.herokuapp.com/users/";
//     urlPreview = 'https://still-harbor-68517.herokuapp.com/preview/';
//     urlObservations = 'http://still-harbor-68517.herokuapp.com/observations/';
//     urlUserProjects = 'http://still-harbor-68517.herokuapp.com/userprojects/';
//     urlPay = 'https://still-harbor-68517.herokuapp.com/pay/';
//
//
//
// }

if (debug) {
    url = 'http://localhost:8000/projects/';
    urlProfiles = 'http://localhost:8000/profiles/';
    urlRewards = 'http://localhost:8000/rewards/';
    publicurl = 'http://localhost:8000/list/';
    urlToken = 'http://localhost:8000/convert-token';
    urlSelfProfile = 'http://localhost:8000/profile/';
    urlUsers = "http://localhost:8000/users/";
    urlPreview = 'http://localhost:8000/preview/';
    urlObservations = 'http://localhost:8000/observations/';
    urlUserProjects = 'http://localhost:8000/userprojects/';
    urlPay = 'http://localhost:8000/pay/';
    followedprojectsUrl = "http://localhost:8000/followedprojects/";
    //nuevas octubre
    urlDonaciones = "http://localhost:8000/donaciones/"




}






const api = {
    getAllFollowedProjects: () => {

        return new Promise(function (resolve, reject) {
            const token = JSON.parse(localStorage.getItem('userToken'));
            const instance = axios.create({
                baseURL: followedprojectsUrl,
                // timeout: 5000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token}
            });
            instance.get()
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error.response);
                });


        });
    },

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
                        resolve(response.data);
                })
                .catch(function (error) {
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
                    reject(error.response);
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

    patchImageProject: (id, link) => {
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
//            let data = new FormData();
//            data.append('photo', file, file.fileName);
//            console.log('mandado: ', data);
            const instance = axios.create({
                baseURL: url,
                // timeout: 2000,
                headers: {
                    // 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
//            instance.patch(id + "/" ,data)
            instance.patch(id + "/" ,{"photo":link})
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

    createProfile: (photoURL, uid) => {
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
            instance.post('',{photoURL, uid})
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

                        resolve(response.data);

                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    // console.log('respuesta?', error.response.data);
                    // reject(error.response.data);
                    reject(error);
                });


        });
    },
    //updates
    getUserUpdates:() => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlUserUpdates,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.get()
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    // console.log('respuesta?', error.response.data);
                    // reject(error.response.data);
                    reject(error);
                });


        });
    },
    postUpdates:(update) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlUpdates,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            console.log(update)
            instance.post('', update)
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
    follow:(project) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlFollow,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.post('', project)
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
    updateUser: (user) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));


        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlUsers,
                // timeout: 5000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken}
            });
            instance.patch(user.id+'/', user)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });

    },


    // Recompensas

    getReward: (id) => {
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlRewards,
                // timeout: 2000,
                headers: {'Content-Type': 'application/json'}
            });
            instance.get(id + '/')
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ',error.response);
                    reject(error);
                });


        });

    },


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
    //observations
    newObservation: (observation) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlObservations,
                // timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken}
            });
            instance.post('', observation)
                .then(function (response) {

                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error.response);
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

    getUserProjects: (id) => {
      const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlUserProjects,
//                timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.get(id + '/')
                .then(function (response) {


                  resolve(response.data);

                })
                .catch(function (error) {
                    console.log('el error: ',error.response);
                    reject(error);
                });


        });
    },


//    ===========================  PAGOS CONEKTA ======================
    createCharge: (obj) => {
    const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlPay,
//                timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            instance.post('', obj)
                .then(function (response) {


                  resolve(response.data);

                })
                .catch(function (error) {
                    console.log('el error: ',error.response);
                    reject(error);
                });


        });
    },


    //    ===========================  Listado de donaciones  ======================
    //    == Si proyectoId no se envía devuelve lo que el usuario ha donado, de lo contrario devuelve las donaciones de un proyecto  ==
    getDonaciones: (proyectoId=null) => {
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let p;
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: urlDonaciones,
//                timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + userToken
                }
            });
            if(proyectoId){
                p = '?proyectoId='+parseInt(proyectoId);
            } else{
                p="";
            }
            instance.get(p)
                .then(function (response) {

                    console.log(response.data);
                    resolve(response.data);

                })
                .catch(function (error) {
                    console.log('el error: ',error.response);
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
