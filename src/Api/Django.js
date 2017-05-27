import $ from "jquery";

const url = 'http://pelusina.fixter.org/projects/';

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
            .then(r=>console.log(r))
            .catch(e=>console.log(e));

  },

    jqueryPost: (project) => {
        $.ajax({
            url:url,
            method:'POST',
            data: project,
            success: function(r){
                console.log('exito', r)
            },
            error: function(e){
                console.log('error', e)
            }
        });
    }

  };


export default api;