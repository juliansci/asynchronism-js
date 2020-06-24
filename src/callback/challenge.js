const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const URL_API = 'https://rickandmortyapi.com/api/character/';
const XHTTP_STATUS_COMPLETED = 4;
const HTTP_STATUS_OK = 200;

function fetchData(url, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === XHTTP_STATUS_COMPLETED) {
      if (xhttp.status === HTTP_STATUS_OK) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error(`Error in ${url}`);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

// Callback HELL!!!
fetchData(URL_API, (error1, data1) => {
  if (error1) return console.error(error1);
  const firstResultId = data1 && data1.results && data1.results[0] && data1.results[0].id;
  if (!firstResultId) return console.error('We cannot get the firstResultId');

  fetchData(`${URL_API}${firstResultId}`, (error2, data2) => {
    if (error2) return console.error(error2);
    const characterOriginUrl = data2 && data2.origin && data2.origin.url;
    console.log(characterOriginUrl);
    fetchData(characterOriginUrl, (error3, data3) => {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  });
});