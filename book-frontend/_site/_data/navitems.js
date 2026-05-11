const API_URL = "http://localhost:1337/api";

module.exports = async function () {
  try {
    const response = await fetch(`${API_URL}/navItems?populate=*`);
    const data = await response.json();

    return data.data; // 👈 this is what Eleventy will use
  } catch (error) {
    console.error(error);
    return [];
  }
};