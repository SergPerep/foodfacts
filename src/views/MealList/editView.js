import createElement from "../../utils/createElement.js";
import createFoodValuesView from "./foodValuesView.js";

const createEditView = ({ result, onEditInput, onEditCancelClick, onEditSaveClick }) => {

    const {
        id,
        titleStr,
        proteinNum,
        carbsNum,
        fatNum,
        energyNum
    } = result;

    const root = createElement({
        tagName: "div",
        className: "edit"
    });

    root.innerHTML = String.raw`
        <div class="edit__title">${titleStr}</div>
        <input type="number" class="edit__input" value="100">
        <div class="food-values-container"></div>
        <div class="btn-group">
            <button class="button button--pale cancel-button">Cancel</button>
            <button class="button button--default save-button">Save</button>
        </div>
    `;
    const editInputEl = root.querySelector(".edit__input");
    const foodValuesContainer = root.querySelector(".food-values-container");
    const cancelButton = root.querySelector(".cancel-button");
    const saveButton = root.querySelector(".save-button");

    saveButton.addEventListener("click", onEditSaveClick);
    cancelButton.addEventListener("click", onEditCancelClick);

    let amountNum = 100;

    editInputEl.addEventListener("input", (e) => {
        const foodValues = onEditInput(e);
        // console.log(foodValues);

        foodValuesView.update(foodValues);
    })

    const foodValuesView = createFoodValuesView({
        proteinNum: proteinNum * amountNum / 100 || 0,
        carbsNum: carbsNum * amountNum / 100 || 0,
        fatNum: fatNum * amountNum / 100 || 0,
        energyNum: energyNum * amountNum / 100 || 0
    });

    foodValuesContainer.appendChild(foodValuesView.root);

    return { root };
}

export default createEditView;