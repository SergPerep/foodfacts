import createElement from "../../utils/createElement.js";
import createFoodValuesView from "./foodValuesView.js";
import countMealValues from "../../utils/countMealValues.js";

const createTotalView = ({ foodList }) => {



    const root = createElement({
        tagName: "div",
        className: "total"
    });

    const renderFoodValuesView = (foodList) => {
        const {
            proteinTotalNum,
            carbsTotalNum,
            fatTotalNum,
            energyTotalNum
        } = countMealValues(foodList);

        const foodValuesView = createFoodValuesView({
            proteinNum: proteinTotalNum,
            carbsNum: carbsTotalNum,
            fatNum: fatTotalNum,
            energyNum: energyTotalNum
        });

        root.appendChild(foodValuesView.root);
    }

    renderFoodValuesView(foodList);

    const update = (state) => {
        root.innerHTML = "";
        renderFoodValuesView(state.foodList);
    }

    return { root, update };
}

export default createTotalView;