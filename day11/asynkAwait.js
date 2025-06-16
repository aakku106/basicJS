const wee = async () => {
  try {
    let cat = await fetch("https://fakeapi.net/products");
    let rat = await cat.json();
    console.log(rat);
  } catch (err) {
    console.log(err);
  }
};
wee();
