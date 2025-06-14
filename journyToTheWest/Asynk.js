const weee = async () => {
  console.log("weeeeeeeeeeeeeeeeeeeeeeeee");

  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  console.log("Cat Fact:", data.fact);
};

weee();
