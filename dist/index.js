import { Ripple } from "../index";
import { jsml } from "../src/jsml.js";
import { s } from "@mdshad/sel";
new Ripple($ => {
  const [NavBar] = new Nav($);
  $.Ri.Nav = new Nav($);
  $.render = () => {
    return jsml("div", {
      "class": "main fluid"
    }, jsml($.NavBar, null));
  };
}, "#root");
function Nav(PREVIOUS_STATE) {
  return new Ripple($ => {
    $.navStyle = {
      height: "100px",
      width: "100%"
    };
    const [Title] = title();
    $.render = () => {
      return jsml("div", null, jsml("div", {
        "class": "nav cntr",
        style: $.navStyle
      }, jsml(Title, null), jsml("button", {
        style: {
          marginLeft: "auto"
        },
        onclick: () => {
          $.navStyle = {
            width: "400px",
            height: "300px",
            margin: "auto",
            bottom: "0"
          };
        }
      }, "OPEN MODAL")));
    };
  });
}
function title() {
  return new Ripple($ => {
    $.render = () => {
      return jsml("b", {
        style: {
          marginLeft: "auto"
        }
      }, "TITLE");
    };
  });
}