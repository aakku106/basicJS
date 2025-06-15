let myPromis = new Promise((resolve, reject) => {
  let isCakeAvaible = true;
  if (isCakeAvaible) resolve("Prosise Relosved");
  else reject("Promise Reject");
});

myPromis
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

// ------------------------------fetch-----------------\\

// Promise Channing
fetch("https://fakeapi.net/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
