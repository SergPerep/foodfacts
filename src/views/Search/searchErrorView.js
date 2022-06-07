import createElement from "../../utils/createElement.js";

const createSearchErrorView = errorMessage => {
    const root = createElement({
        tagName: "div",
        className: "search-error-message"
    });
    root.innerHTML = errorMessage;
    return { root };
}

export default createSearchErrorView;