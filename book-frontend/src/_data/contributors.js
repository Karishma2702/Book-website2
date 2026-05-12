export default async function () {

  const response = await fetch(
    "http://localhost:1337/api/contributers"
  );

  const data = await response.json();

  console.log(data);

  return data.data;
}