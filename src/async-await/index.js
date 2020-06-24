const aPromise = () => {
  return new Promise((resolve, reject) => {
    const isAllOk = false;
    isAllOk
      ? setTimeout(() => resolve('Do something async'), 3000)
      : reject(new Error('Test Error'));
  });
}

const aResult = async () => {
  const result = await aPromise();
  console.log(result);
}




const anotherFunction = async () => {
  try {
    const result = await aPromise();
    console.log(result);
  } catch(error){
    console.error(error);
  }
}

console.log('Before');
anotherFunction();
console.log('After');