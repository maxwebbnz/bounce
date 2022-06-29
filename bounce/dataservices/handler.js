/**========================================================================
 *                             Data Handler
 *
 *  This is used for handling and interacting with the database, using AXIOS
 *
 *
 *========================================================================**/


import axios from 'axios';
//? localhost for development


const dataService = {
    get: function (_toGet) {
        // make the get request
        axios.get('http://localhost:8010/users')
            .then(function (response) {
                // handle success
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }
}

export {
    dataService
}