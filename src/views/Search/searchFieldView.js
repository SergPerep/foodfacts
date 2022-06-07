import createElement from "../../utils/createElement.js";
import createSearchSpinnerView from "./searchSpinner.js";

const createSearchFieldView = ({ onInputChange }) => {
    const placeholder = "Search food product..."
    const root = createElement({
        tagName: "div",
        className: "search-field"
    });
    root.innerHTML = String.raw`
        <div class="search-field__icon">
            <span class="material-symbols-outlined">search</span>
        </div>
        <input type="text" class="search-field__input" placeholder=${placeholder} value="">
        <div class="spinner-container"></div>
    `;
    const spinnerContainer = root.querySelector(".spinner-container");
    const searchInputEl = root.querySelector(".search-field__input");
    searchInputEl.addEventListener("input", onInputChange);

    const renderSpinner = isSpinnerVisible => {
        if (isSpinnerVisible) {
            spinnerContainer.innerHTML = "";
            const searchSpinnerView = createSearchSpinnerView();
            spinnerContainer.appendChild(searchSpinnerView.root);
        } else {
            spinnerContainer.innerHTML = "";
        }
    }

    const update = state => {
        renderSpinner(state.isSpinnerVisible);
    }

    return { root, update };
}

export default createSearchFieldView;