const holdButtonFactory = (cssClass) =>{
    let _htmlButton = document.createElement('button');
    let _cssClass = cssClass;
    const _init = (width, height)=>{
        ["btn", "btn-secondary"].forEach((cssClass) =>{
            _htmlButton.classList.toggle(cssClass);
        });
        _htmlButton.style.width = `${width}px`;
        _htmlButton.style.height = `${height}px`;
    };
    const setParent = (parentNode, childNode = _htmlButton ) =>{
        parentNode.appendChild(childNode);
    };
    _init(50, 50);
    return {setParent}
};

module.exports = {
    holdButtonFactory:holdButtonFactory
};