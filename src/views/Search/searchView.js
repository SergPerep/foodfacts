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
    let timeout = 0;
    const onInputChange = (e) => {
        const delay = 500;
        searchFieldView.update({ isSpinnerVisible: true });
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            const fetchedData = await getSearchResults({ searchInputValue: e.target.value });
            console.log(e.target.value);
            if (fetchedData.error) {
                searchResultsView.update({ error: fetchedData.error });
            } else {
                searchResultsView.update({ results: fetchedData.searchResults, onResultClick });
            }
            searchFieldView.update({ isSpinnerVisible: false });
        }, delay)
    }

    const searchFieldView = createSearchFieldView({ onInputChange });
    searchWrapper.prepend(searchFieldView.root);

    return { root };
}

export default createSearchView;
