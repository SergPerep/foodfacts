import createElement from "../../utils/createElement.js";

const createSearchResultView = ({ result, onClick }) => {
    const {
        titleStr,
        brandsStr,
        energyNum,
        perStr
    } = result;
    let root = createElement({
        tagName: "div",
        className: "search-result"
    });

    root.innerHTML = String.raw`
        <div class="search-result__header">
            <span class="search-result__title">Chocomel</span>
            <span class="search-result__cal">490cal</span>
        </div>
        <div class="search-result__desc">
            <span class="search-result__brands">Campina</span>
            <span class="search-result__per">100g</span>
        </div>
    `;
    const baseClassName = "search-result";

    const titleEl = root.querySelector(`.${baseClassName}__title`);
    titleEl.innerText = titleStr;

    const calEl = root.querySelector(`.${baseClassName}__cal`);
    calEl.innerText = energyNum + " kcal";

    const brandsEl = root.querySelector(`.${baseClassName}__brands`);
    brandsEl.innerText = brandsStr;

    const perEl = root.querySelector(`.${baseClassName}__per`);
    perEl.innerText = perStr;

    root.addEventListener("click", () => {
        onClick(result)
    });

    return { root }
}

export default createSearchResultView;