// import loadApp from './examples/menu/app.js';
// import loadApp from './examples/pokemons/app.js';
// import loadApp from './examples/currency-converter/app.js';
// import loadApp from './examples/stopwatch/app.js';
// import loadApp from './examples/github/app.js';
// import loadApp from './examples/nobelprize/app.js';
import loadApp from './app.js';

window.addEventListener('load', loadApp);

// const searchInput = document.querySelector("#search-input");
// const searchButton = document.querySelector("#search-button");
// const ulResults = document.querySelector("#results");
// const foodItems = document.querySelector("#food-items");

// searchButton.addEventListener("click", async () => {
//     try {
//         ulResults.innerHTML = "";
//         const searchInputValue = searchInput.value;
//         if (!searchInputValue) return;
//         const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?action=process&json=true&search_terms=${searchInputValue}&search_simple=1`);
//         const resData = await response.json();
//         const products = resData.products;
//         products.forEach(product => {
//             // let li = document.createElement("div");
//             // liEl.className = "liEl";
//             const productName = product.product_name;
//             const brands = product.brands ? ` (${product.brands})` : "";
//             const quantity = product.quantity ? ` - ${product.quantity}` : "";
//             const titleStr = productName + brands + quantity;
//             let li = createElement({
//                 tagName: "li",
//                 innerHTML: titleStr,
//                 onClick: openEdit
//             })
//             ulResults.append(li);
//         })
//         console.log(resData);
//     } catch (error) {
//         console.log(error.message);
//     }

// })

// const openEdit = () => {
//     // alert("!");
//     const editEl = renderEdit();
//     foodItems.append(editEl)
// }

// const renderEdit = (foodName, { kCal, proteins, fats, carbohydrates }) => {
//     let editEl = createElement({
//         tagName: "div",
//         className: "edit"
//     });

//     let editInput = createElement({
//         tagName: "input",
//         className: "adit__input"
//     });
    
//     let foodNameEl = createElement({
//         tagName: "div",
//         className: "edit__title",
//         innerHTML: foodName
//     })
//     let proteinsEl = createElement({
//         tagName: "div",
//         className: "edit__proteins",
//         innerHTML: proteins
//     });
//     let fatsEl = createElement({
//         tagName: "div",
//         className: "edit__fats",
//         innerHTML: fats
//     });
//     let carbohydratesEl = createElement({
//         tagName: "div",
//         className: "edit__carbohydrates",
//         innerHTML: carbohydrates
//     })
//     let caloriesEl = createElement({
//         tagName: "div",
//         className: "edit__calories",
//         innerHTML: kCal
//     })
// }

// const createElement = ({ tagName, className = null, innerHTML = null, onClick = null }) => {
//     let element = document.createElement(tagName);
//     if (className) element.className = className;
//     if (innerHTML) element.innerHTML = innerHTML;
//     if (onClick) element.addEventListener("click", onClick)
//     return element;
// }