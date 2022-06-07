import createElement from "../../utils/createElement.js";

const createAddFoodButtonView = ({ onAddFoodButtonClick }) => {
    const root = createElement({
        tagName: "div",
        className: "add-food-button"
    })
    root.innerHTML = String.raw`
        <div class="add-food-icon">
            <span class="material-symbols-outlined">
                add
            </span>
        </div>
    `;

    root.addEventListener("click", onAddFoodButtonClick);
    return { root };
}

export default createAddFoodButtonView;