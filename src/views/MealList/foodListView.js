import createElement from "../../utils/createElement.js";
import createFoodView from "./foodView.js";

const createFoodListView = ({ foodList, onDeleteFoodButtonClick }) => {
    const root = createElement({
        tagName: "div",
        className: "foodList"
    });

    const renderFoodListView = foodList => {
        foodList.forEach(food => {
            const foodView = createFoodView({
                id: food.id,
                titleStr: food.titleStr,
                amountNum: food.amountNum,
                proteinNum: food.total.proteinNum,
                carbsNum: food.total.carbsNum,
                fatNum: food.total.fatNum,
                energyNum: food.total.energyNum,
                onDeleteFoodButtonClick: onDeleteFoodButtonClick
            });
            root.appendChild(foodView.root);
        })
    }

    renderFoodListView(foodList);

    const update = (state) => {
        root.innerHTML = "";
        renderFoodListView(state.foodList);
    }

    return { root, update };
}

export default createFoodListView;