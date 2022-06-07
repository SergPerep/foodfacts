const createElement = ({ tagName, className = null, innerHTML = null, onClick = null }) => {
    let element = document.createElement(tagName);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    if (onClick) element.addEventListener("click", onClick)
    return element;
}

export default createElement;