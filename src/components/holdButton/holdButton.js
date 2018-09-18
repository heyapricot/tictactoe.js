const holdButtonFactory = () =>{
    let _htmlButton = document.createElement('button');
    let _cssClass = "btn-dark";
    let _defaultCssClass = "btn-secondary";
    let _onClickCallbacks = [];
    let _resetCallbacks = [];
    let _pressed = false;
    const _init = (width, height)=>{
        ["btn", _defaultCssClass].forEach((cssClass) =>{
            _htmlButton.classList.toggle(cssClass);
        });
        _htmlButton.style.width = `${width}px`;
        _htmlButton.style.height = `${height}px`;
        _htmlButton.addEventListener('click', _onClick)
    };
    const _onClick = ()=>{
        if(!_pressed){
            _onClickCallbacks.forEach((clickCallback)=>{
                clickCallback.call();
            });
            _toggleAppearance();
            _togglePressed();
        }
    };

    const _removeChildren = ()=>{
        _htmlButton.childNodes.forEach((childNode)=>{
            _htmlButton.removeChild(childNode);
        });
    };

    const _resetAppearance = ()=>{
        if(_htmlButton.classList.contains(_cssClass)){
            _toggleAppearance();
        }
    };

    const _resetPressedState = ()=>{
        _pressed = false;
    };

    const _toggleAppearance = (cssClass = _cssClass, defaultCssClass = _defaultCssClass, pressed = _pressed)=>{
            _htmlButton.classList.toggle(defaultCssClass);
            _htmlButton.classList.toggle(cssClass)
    };
    const _togglePressed = ()=>{
        _pressed = true;
    };

    const reset = ()=>{
        _resetAppearance();
        _resetPressedState();
        _removeChildren();
        _resetCallbacks.forEach((resetCallback)=>{
            resetCallback.call();
        });
    };

    const setParent = (parentNode, childNode = _htmlButton ) =>{
        parentNode.appendChild(childNode);
    };
    const setIcon = (iconClasses)=>{
        let icon = document.createElement('i');
        iconClasses.forEach((cssClass)=>{
            icon.classList.toggle(cssClass);
        });
        _htmlButton.appendChild(icon);
    };
    const setCssClass = (cssClass)=>{
        _cssClass = cssClass;
    };
    const addClickFunction = (functionReference)=>{
        _onClickCallbacks.push(functionReference);
    };
    const addResetFunction = (functionReference)=>{
        _resetCallbacks.push(functionReference);
    };
    _init(60, 60);
    return {addClickFunction,addResetFunction,reset,setCssClass,setIcon,setParent}
};

module.exports = {
    holdButtonFactory:holdButtonFactory
};