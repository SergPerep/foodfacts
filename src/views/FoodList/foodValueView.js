import createElement from "../../utils/createElement.js";

const createFoodValueView = ({
    titleStr,
    valueNum,
    unitStr
}) => {
    const root = createElement({
        tagName: "div",
        className: "food-value"
    });
    

    root.innerHTML = String.raw`
        <div class="food-value__title">${titleStr}</div>
        <div class="food-value__desc">${valueNum.toFixed(2)} ${unitStr}</div>
    `;
    
    const foodValueDescEl = root.querySelector(".food-value__desc");
    const update = (state) => {
        foodValueDescEl.innerText = `${state.toFixed(2)} ${unitStr}`;
    }

    return { root, update }
}

export default createFoodValueView;