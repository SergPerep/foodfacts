
import createElement from "../../utils/createElement.js";
import createFoodValueView from "./foodValueView.js";

const createFoodValuesView = ({
    proteinNum,
    carbsNum,
    fatNum,
    energyNum
}) => {

    const root = createElement({
        tagName: "div",
        className: "food-values"
    });

    root.innerHTML = String.raw`
        <div class="nutrients"></div>
        <div class="calories"></div>
    `;

    const nutrientsEl = root.querySelector(".nutrients");
    const proteinView = createFoodValueView({
        titleStr: "Protein",
        valueNum: proteinNum,
        unitStr: "g"
    })
    nutrientsEl.appendChild(proteinView.root);
    const carbsView = createFoodValueView({
        titleStr: "Carbs",
        valueNum: carbsNum,
        unitStr: "g"
    })
    nutrientsEl.appendChild(carbsView.root);
    const fatView = createFoodValueView({
        titleStr: "Fat",
        valueNum: fatNum,
        unitStr: "g"
    })
    nutrientsEl.appendChild(fatView.root);

    const caloriesEl = root.querySelector(".calories");
    const energyView = createFoodValueView({
        titleStr: "Calories",
        valueNum: energyNum,
        unitStr: "cal"
    });
    caloriesEl.appendChild(energyView.root);

    const update = (state) => {
        // console.log({ state });
        proteinView.update(state.proteinNum);
        carbsView.update(state.carbsNum);
        fatView.update(state.fatNum);
        energyView.update(state.energyNum);
    }

    return { root, update }
}

export default createFoodValuesView;