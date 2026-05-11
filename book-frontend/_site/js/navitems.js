const API_URL = "http://localhost:1337/api";

let allItems = [];

const navItemsContainer = document.getElementById("navItemsContainer");

async function navItems() {
  try {
    const response = await fetch(`${API_URL}/navItems?populate=*`);
    const data = await response.json();

    console.log(data);

    allItems = data.data;

    displayNavItems(allItems);
  } catch (error) {
    console.error(error);
  }
}

function displayNavItems(items) {
  navItemsContainer.innerHTML = "";

  items.forEach(item => {
    const navName = item.attributes?.name || "No name";

    const li = document.createElement("li");
    li.textContent = navName;

    navItemsContainer.appendChild(li);
  });
}

navItems();