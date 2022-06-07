import createElement from "../../utils/createElement.js";
import createSearchResultView from "./searchResultView.js";
const createSearchResultsView = ({ results, onResultClick }) => {
    const root = createElement({
        tagName: "div",
        className: "results"
    });

    results.forEach(result => {
        const resultView = createSearchResultView({ result, onClick: onResultClick});
        root.appendChild(resultView.root);
    });

    const update = state => {
        root.innerHTML = "";
        state.results.forEach(result => {
            const resultView = createSearchResultView({ result, onClick: onResultClick});
            root.appendChild(resultView.root);
        });
    };

    return { root, update };
}

export default createSearchResultsView;