const categoriesList = document.querySelector("#categories");
const categories = categoriesList.querySelectorAll("li.item");
const elementQuantity = categories.length;
const totalTitle = [];
const totalList = [];
for (let i = 0; i > elementQuantity; i++){
    const title = categories.querySelectorAll("h2").textContent
    const list = categories.querySelectorAll("ul > li").length
    console.log(title)
    console.log(list)
}



console.log(` Number of categories: ${elementQuantity}`)


