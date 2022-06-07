import createElement from "../../utils/createElement.js";
import createFoodValuesView from "./foodValuesView.js";

const createFoodView = ({
    id,
    titleStr,
    amountNum,
    proteinNum,
    carbsNum,
    fatNum,
    energyNum,
    onDeleteFoodButtonClick
}) => {
    const root = createElement({
        tagName: "div",
        className: "food"
    });

    root.innerHTML = String.raw`
        <div class="food__header">
            <div class="food__title">${titleStr}</div>
            <div class="food__amount">${amountNum} g</div>
            <div class="food__delete-button">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </div>
        </div>
    `;

    const deleteFoodButtonEl = root.querySelector(".food__delete-button");
    deleteFoodButtonEl.addEventListener("click", () => {
        onDeleteFoodButtonClick(id);
    });

    const foodValuesView = createFoodValuesView({
        proteinNum: proteinNum,
        carbsNum: carbsNum,
        fatNum: fatNum,
        energyNum: energyNum
    });
    root.appendChild(foodValuesView.root);

    return { root };
}

export default createFoodView;