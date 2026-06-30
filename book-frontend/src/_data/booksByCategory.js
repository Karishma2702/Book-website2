export default async function () {
  const res = await fetch(
    "http://localhost:1337/api/books?populate=category"
  );

  const json = await res.json();

  const books = json.data;

  const grouped = {};

  for (const item of books) {
    const category =
      item.category?.categoryName || "Uncategorized";

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(item);
  }


  return grouped;
}