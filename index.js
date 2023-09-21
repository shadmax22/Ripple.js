function Ripple(p, element = null) {
  let SuperInitiated = false;
  let ReRenderFunction;

  let SuperDom;
  let SuperRenderEngine = new RenderEngine();
  const ReservedPrototypes = ["render", "const", "Ri", "Rig"];

  let SuperState = new HookMiddleWare({
    render: false,
    Ri: new RippleComponentCaller(),
  });

  function RippleComponentCaller(params) {
    return new Proxy(
      {},
      {
        get: function (target, key) {
          return target[key];
        },

        set: function (target, key, value) {
          target[key] = new Ripple(($) => {
            value?.__PROPS ? value.fun($, ...value.__PROPS) : value($);
          })[0];

          return true;
        },
      }
    );
  }
  function HookMiddleWare(TARGET) {
    return new Proxy(TARGET, {
      get: function (target, key) {
        if (
          typeof target[key] == "object" &&
          ReservedPrototypes.includes(key) == false
        ) {
          return new HookMiddleWare(target[key]);
        }
        return target[key];
      },
      set: function (target, key, value) {
        target[key] = value;
        if (SuperInitiated && SuperState.render != false) {
          return (
            SuperRenderEngine.replace(SuperState.render(SuperState)) || true
          );
        }

        return true;
      },
    });
  }
  let SuperFunction = p(SuperState);

  let Render_Super = SuperState.render;

  try {
    ReRenderFunction = Render_Super(SuperState);
  } catch (e) {
    console.error(
      "Supervariable not returning {render}. \n Please check your Supervariable & verify Ripple defined instance structure. \n \n Trace: \n\n " +
        e.stack
    );

    return false;
  }

  if (element != null) {
    SuperRenderEngine.setNode(element);

    SuperRenderEngine.set(ReRenderFunction);
  } else {
    // debugger;
    SuperRenderEngine.setReturn(ReRenderFunction);
  }

  // This function is responsible for rendering dom.
  function RenderEngine() {
    let e;
    /*  ↑ Render BASE ELEMENT */

    function setNode(element) {
      e = document.querySelector(element);

      // Initial node must be set to began vdom modification.
    }
    function setReturn(element) {
      e = element;

      /*
       On Render component calling, it gets return dom from .render() function for bind with parent dom.
      

       e.g.

       Here we have 

        new Ripple(($) => {
              $.count = 0;

              const c = comp();  ----> Sample Component
              $.render = () => {   ----> Make this line Render 1.
                return jsml(
                  "div",
                  {
                    style: { color: "green" },
                  },
                  jsml(
                    "button",
                    {
                      onclick: () => {
                        $.count++;
                      },
                    },
                    $.count
                  ),
                  c.render()
                );
              };
          }, "#root"); ---> base element 



          # So `Render 1` is first node that will be bind to base element
            -> If any thing updates it must reflect in base element. So using base element dom Instance our Render Engine will update data

            eg.

            1 >> If we "Render Base Element" is and we update its html like e.innerHTML it will be realtime updated So this basic   concept.

            -> So in first run "Base Element" is require to set "Render Base Element".
            -> On const c=comp() (Sample Component) calling by using c.render() it will call "RENDERING WORKER".

            2>> "RENDERING WORKER" calls setReturn to set new element. To allow dom-manuplations in future instance.
            
            3>> Whenever dom-manuplations happens it just play with dom and re-calculate the return.




            Like here



              function comp() {
                  return new Ripple(($) => {
                    $.count = 0;

                    $.render = () => {
                      return jsml(
                        "div",
                        {
                          style: { color: "green" },
                          onclick: () => {
                            $.count++;
                          },
                        },
                        "  Count 2: " + $.count
                      );
                    };
                  });
                }


                This comp.render() only returning new dom element which is "Render BASE ELEMENT". If parent of "Comp" will be updated then only parent will get to know new changes although our DOM already changed as per changes.  

            



       
       */
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

  /* RENDERING WORKER */

  const render = function () {
    const r = SuperState.render(SuperState);
    SuperRenderEngine.setReturn(r);
    return SuperRenderEngine.get();
  };
  return [render];
  /*  
    # Render worker re-calulate or re-render component saved in SuperState.render.

      1>> It set new return elemement cooked by {r}. 
  */
}

Function.prototype.props = function (...props) {
  return { __PROPS: props, fun: this };
};

export { Ripple };
