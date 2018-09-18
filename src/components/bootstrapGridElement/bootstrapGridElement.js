const bootstrapGridElement = (type, cssClasses, parentNode)=>{
    let _htmlNode = document.createElement('div');
    const getHtmlNode = (htmlNode = _htmlNode)=>{
        return htmlNode;
    };
    const setCssClass = (cssClasses, htmlNode = _htmlNode)=>{
        cssClasses.forEach((cssClass)=>{
            htmlNode.classList.toggle(cssClass);
        })
    };
    const setChildNode = (childNode, parentNode = _htmlNode)=>{
        parentNode.appendChild(childNode);
    };
    const setParentNode = (parentNode, childNode = _htmlNode)=>{
        parentNode.appendChild(childNode);
    };
    const _init = ((type, cssClasses, parentNode)=>{
        _htmlNode.classList.toggle(type);
        setCssClass(cssClasses);
        setParentNode(parentNode);
    })(type, cssClasses, parentNode);
    return {getHtmlNode, setCssClass, setChildNode, setParentNode}
};

module.exports = {
    bootstrapGridElement:bootstrapGridElement
};