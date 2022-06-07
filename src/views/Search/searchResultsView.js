import createElement from "../../utils/createElement.js";
import createSearchErrorView from "./searchErrorView.js";
import createSearchResultView from "./searchResultView.js";
const createSearchResultsView = ({ results, onResultClick }) => {
    const root = createElement({
        tagName: "div",
        className: "results"
    });

    results.forEach(result => {
        const resultView = createSearchResultView({ result, onClick: onResultClick });
        root.appendChild(resultView.root);
    });

    const update = state => {
        root.innerHTML = "";
        if (state.error) {
            const searchErrorView = createSearchErrorView(state.error.message);
            root.appendChild(searchErrorView.root);
        }
        if (state.results) {
            state.results.forEach(result => {
                const resultView = createSearchResultView({ result, onClick: onResultClick });
                root.appendChild(resultView.root);
            });
        }
    };

    return { root, update };
}

export default createSearchResultsView;