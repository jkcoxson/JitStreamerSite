// jkcoxson

const axios = require('axios');

/**
 * Gets the status from the server so we know what page to display.
 */
export function status(context) {
    // Send a post request to the server.
    axios
        .get('/status/')
        .then(function (response) {
            // Parse the response as JSON.
            console.log(response);
            context.validIp = response.data.validIp;
            context.validUdid = response.data.registered;
            context.connected = true;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function submitPairingFile(context) {
    const formData = new FormData();
    formData.append('file', context.pairingFile);
    axios
        .post('/upload/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(function (response) {
            // Download the response as a file
            console.log(response);
            if (response.data.success) {
                window.location.reload();
            } else {
                alert('Error: ' + response.data.message);
            }
        })
        .catch(function (error) {
            console.log(error);
            alert('Crap went wrong while uploading your file');
        });
}
