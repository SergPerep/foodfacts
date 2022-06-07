import createElement from "../../utils/createElement.js"

const createSearchSpinnerView = () => {
    const root = createElement({
        tagName: "div",
        className: "search-field__spinner"
    });

    root.innerHTML = String.raw`
        <svg class="loader" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <g class="spinner">
                <circle class="spinner-line" cy="24" cx="24" />
            </g>
        </svg>
    `;

    return { root };

}

export default createSearchSpinnerView;