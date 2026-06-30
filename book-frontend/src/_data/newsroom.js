export default async function () {

  const response = await fetch(
    "http://localhost:1337/api/news-room?populate=*"
  );

  const data = await response.json();

  console.log(data);

  return data.data;
}