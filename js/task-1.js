const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll("li.item");
const elementQuantity = categories.length;




console.log(`Number of categories: ${elementQuantity}`)




categories.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const list = category.querySelectorAll("ul > li")
    console.log(`Category: ${title}`);
    console.log(`Elements: ${list.length}`);
}) 





