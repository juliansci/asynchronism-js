const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const URL_API = 'https://rickandmortyapi.com/api/character/';
const XHTTP_STATUS_COMPLETED = 4;
const HTTP_STATUS_OK = 200;

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === XHTTP_STATUS_COMPLETED) {
        xhhtp.status === HTTP_STATUS_OK ?
          resolve(JSON.parse(xhttp.responseText)) :
          reject(new Error(`Error in ${url}`));
      }
    };
    xhttp.send();
  });

}

fetchData(URL_API)
  .then(allData => {
    const firstResultId = allData && allData.results && allData.results[0] && allData.results[0].id;
    if (!firstResultId) return console.error('We cannot get the firstResultId');
    return fetchData(`${URL_API}${firstResultId}`);
  })
  .then(characterData => {
    const characterOriginUrl = characterData && characterData.origin && characterData.origin.url;
    return fetchData(characterOriginUrl);
  })
  .then(originData => {
    console.log(allData.info.count);
    console.log(characterData.name);
    console.log(originData.dimension);
  })
  .catch(error => console.error(error));
