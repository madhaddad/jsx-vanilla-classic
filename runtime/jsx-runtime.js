function jsx(type, config) {
    if (typeof type === "function") {
      return type(config);
    }const { children = [], ...props } = config;
    const childrenProps = [].concat(children);
    return {
      type,
      props: {
        ...props,
        children: childrenProps.map((child) =>
          typeof child === "object" ? child : createTextElement(child)
        ),
      },
    };
  }
  
  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    };
  }

  function render(element, container) {
    const dom =
      element.type === "TEXT_ELEMENT"
        ? container.ownerDocument.createTextNode("")
        : container.ownerDocument.createElement(element.type);
    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
      .filter(isProperty)
      .forEach((name) => {
        dom[name] = element.props[name];
      });
    element.props.children.forEach((child) => render(child, dom));
    container.appendChild(dom);
  }
  
  // let jsx = (tag, props, ...children) => {

  //   if (typeof tag === "function") return tag(props, ...children);
  //   const element = document.createElement(tag);
  
  //   Object.entries(props || {}).forEach(([name, value]) => {
  //     if (name.startsWith("on") && name.toLowerCase() in window)
  //       element.addEventListener(name.toLowerCase().substr(2), value);
  //     else element.setAttribute(name, value.toString());
  //   });
  
  //   children.forEach(child => {
  //     appendChild(element, child);
  //   });
  
  
  //   return element;
  // };
  
  const appendChild = (parent, child) => {
    if (Array.isArray(child))
      child.forEach(nestedChild => appendChild(parent, nestedChild));
    else
      parent.appendChild(child.nodeType ? child : document.createTextNode(child));
  };
  
let createFragment = (props, ...children) => {
    return children;
  };

  export { jsx as jsxs, jsx,render };