import createElement from "../../utils/createElement.js";
import createSearchFieldView from "./searchFieldView.js";
import createSearchResultsView from "./searchResultsView.js";
import getSearchResults from "../../fetchers/getSearchResults.js";

const createSearchView = ({ onResultClick, onOverlayClick }) => {

    const root = createElement({
        tagName: "div",
        className: "search"
    });

    root.innerHTML = String.raw`
        <div class="overlay">
            <div class="container">
                <div class="search-wrapper"></div>
            </div>
        </div>
    `;

    const overlayEl = root.querySelector(".overlay");
    overlayEl.addEventListener("click", onOverlayClick);

    const searchWrapper = root.querySelector(".search-wrapper");
    searchWrapper.addEventListener("click", e => {
        e.stopPropagation();
    })

    /*======= SEARCH RESULTS =======*/
    const searchResultsView = createSearchResultsView({ results: [], onResultClick });
    searchWrapper.appendChild(searchResultsView.root);

    /*======= SEARCH FIELD =======*/

    const onInputChange = async (e) => {
        searchFieldView.update({ isSpinnerVisible: true });
        const searchResult = await getSearchResults({ searchInputValue: e.target.value });
        searchResultsView.update({ results: searchResult, onResultClick });
        searchFieldView.update({ isSpinnerVisible: false });
    }

    const searchFieldView = createSearchFieldView({ onInputChange });
    searchWrapper.prepend(searchFieldView.root);

    return { root };
}

export default createSearchView;
