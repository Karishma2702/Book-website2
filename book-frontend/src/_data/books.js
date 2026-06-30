export default async function () {
  const res = await fetch(
    "http://localhost:1337/api/books?populate=*"
  );

  const json = await res.json();

  return json.data;
}