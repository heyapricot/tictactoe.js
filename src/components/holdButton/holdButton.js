const holdButtonFactory = (cssClass) =>{
    let _htmlButton = document.createElement('button');
    let _cssClass = cssClass;
    let _defaultCssClass = "btn-secondary";
    const _init = (width, height)=>{
        ["btn", _defaultCssClass].forEach((cssClass) =>{
            _htmlButton.classList.toggle(cssClass);
        });
        _htmlButton.style.width = `${width}px`;
        _htmlButton.style.height = `${height}px`;
        _htmlButton.addEventListener('click', _onClick)
    };
    const setParent = (parentNode, childNode = _htmlButton ) =>{
        parentNode.appendChild(childNode);
    };
    const _onClick = ()=>{
        _toggleAppearance();
        _togglePressed();
    };
    const _toggleAppearance = (cssClass = _cssClass, defaultCssClass = _defaultCssClass, pressed = _pressed)=>{
        if(!pressed){
            _htmlButton.classList.toggle(defaultCssClass);
            _htmlButton.classList.toggle(cssClass)
        }
    };
    const _togglePressed = ()=>{
        _pressed = true;
    };
    let _pressed = false;
    _init(50, 50);

    return {setParent}
};

module.exports = {
    holdButtonFactory:holdButtonFactory
};