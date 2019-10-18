var GitHub = require('github-api');
var axios = require('axios');
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const getToken = (code) => axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?'
        + `client_id=${clientID}&`
        + `client_secret=${clientSecret}&`
        + `code=${code}`,
    headers: {
        accept: 'application/json',
    },
    crossDomain: true,
});
module.exports = getToken;