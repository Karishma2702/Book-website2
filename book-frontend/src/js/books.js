const API_URL = "http://localhost:1337/api";

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "/";
}

const booksContainer = document.getElementById("booksContainer");
const filter = document.getElementById("categoryFilter");

let allBooks = [];

async function fetchBooks() {

  try {

    const response = await fetch(
      `${API_URL}/books?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const data = await response.json();

    console.log(data);

    allBooks = data.data;

    displayBooks(allBooks);

  } catch (error) {
    console.error(error);
  }
}

function displayBooks(books) {

  booksContainer.innerHTML = "";

  books.forEach(book => {

    // STRAPI V5 STYLE
    const title = book.Title || "No Title";
    const author = book.Author || "Unknown Author";
    const description = book.Description || "No Description";

    // IMAGE
    let imageUrl = "https://via.placeholder.com/300x400";

    if (book.Image?.url) {
      imageUrl = `http://localhost:1337${book.Image.url}`;
    }

    // CATEGORY
    let categoryName = "Unknown";

    if (book.category?.categoryName) {
      categoryName = book.category.categoryName;
    }

    const card = document.createElement("div");

    card.classList.add("book-card");

    card.innerHTML = `
      <img
        src="${imageUrl}"
        class="book-image"
        onclick="showDescription(
          \`${title}\`,
          \`${author}\`,
          \`${description}\`
        )"
      >

      <div class="book-content">
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
        <p>${categoryName}</p>
      </div>
    `;

    booksContainer.appendChild(card);
  });
}

// FILTER
filter.addEventListener("change", () => {

  const value = filter.value;

  if (value === "all") {
    displayBooks(allBooks);
    return;
  }

  const filteredBooks = allBooks.filter(book => {
    return book.category?.categoryName === value;
  });

  displayBooks(filteredBooks);
});

// MODAL
function showDescription(title, author, description) {

  document.getElementById("bookModal").style.display = "flex";

  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalAuthor").innerText = author;
  document.getElementById("modalDescription").innerText = description;
}

function closeModal() {
  document.getElementById("bookModal").style.display = "none";
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "/";
}

fetchBooks();