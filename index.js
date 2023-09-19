function Ripple(p, element = null) {
  let SuperInitiated = false;
  let SuperCalled = 0;
  let SuperDom;
  let SuperRenderEngine = new RenderEngine();
  let SuperState = new Proxy(
    {},
    {
      get: function (target, key) {
        return target[key];
      },
      set: function (target, key, value) {
        // console.log(target, key, "set");
        target[key] = value;

        if (SuperInitiated) {
          return (
            SuperRenderEngine.replace(SuperFunction.render(SuperState)) || true
          );
        }

        return true;
      },
    }
  );
  let SuperFunction = p(SuperState);

  const SuperRenderRequest = SuperFunction.render(SuperState);

  if (element != null) {
    SuperRenderEngine.setNode(element);
    SuperRenderEngine.set(SuperRenderRequest);
  } else {
    // debugger;
    SuperRenderEngine.setReturn(SuperRenderRequest);
  }
  function RenderEngine() {
    let e;

    function setNode(element) {
      e = document.querySelector(element);
    }
    function setReturn(element) {
      e = element;
    }
    function set(element) {
      e.appendChild(element);
    }
    function replace(newElement) {
      if (newElement instanceof Element) {
        e.parentNode.replaceChild(newElement, e);
        e = newElement;
      } else {
      }
    }
    function get() {
      return e;
    }

    return { get, set, setNode, replace, setReturn };
  }

  SuperInitiated = true;
  SuperCalled++;
  const render = function () {
    const r = SuperFunction.render(SuperState);
    SuperRenderEngine.setReturn(r);
    return SuperRenderEngine.get();
  };
  return { render };
  return SuperRenderRequest;
}

export { Ripple };
