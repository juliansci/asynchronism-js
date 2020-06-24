const aPromise = () => {
  return new Promise((resolve, reject) => {
    const isAllOk = true;
    (isAllOk) ?
      setTimeout(() => resolve('Hey!'), 5000)
      : reject('Opps');
  });
}
const secondPromise = () => {
  return new Promise((resolve, reject) => {
    const isAllOk = true;
    (isAllOk) ?
      setTimeout(() => resolve('Hey!'), 5000)
      : reject('Opps');
  });
}
aPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

Promise.all([aPromise(), secondPromise()])
  .then(([response1, response2]) => {
    console.log('Array of responses: ', response1, response2);
  })  ;

