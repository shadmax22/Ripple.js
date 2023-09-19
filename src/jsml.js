function jsml(el, attribute, html) {
  const e = document.createElement(el);
  const Fun = {
    id: (v) => {
      e.id = v;
    },
    onclick: (v) => {
      e.onclick = () => {
        v();
      };
    },

    style: (v) => {
      for (let styleName of Object.keys(v)) {
        e.style[styleName] = v[styleName];
      }
    },

    attr: (k, v) => {
      e.setAttribute(k, v);
    },
  };

  switch (true) {
    case attribute instanceof Element:
      e.appendChild(attribute);
      break;

    case typeof attribute == "object":
      for (let key of Object.keys(attribute)) {
        if (typeof Fun[key] === "function") {
          Fun[key](attribute[key]);
        } else {
          Fun["attr"](key, attribute[key]);
        }
      }
      break;

    default:
      e.innerText = attribute;

      break;
  }

  for (let i of html) {
    const TypeOf = typeof i;
    switch (true) {
      case TypeOf == "object":
        e.appendChild(i);
        break;
      case TypeOf == "string" || TypeOf == "number":
        e.innerText = i;
        break;
    }
  }

  return e;
}

function a(attribute, ...html) {
  return jsml("a", attribute, html);
}

function abbr(attribute, ...html) {
  return jsml("abbr", attribute, html);
}

function address(attribute, ...html) {
  return jsml("address", attribute, html);
}

function article(attribute, ...html) {
  return jsml("article", attribute, html);
}

function aside(attribute, ...html) {
  return jsml("aside", attribute, html);
}

function audio(attribute, ...html) {
  return jsml("audio", attribute, html);
}

function b(attribute, ...html) {
  return jsml("b", attribute, html);
}

function blockquote(attribute, ...html) {
  return jsml("blockquote", attribute, html);
}

function body(attribute, ...html) {
  return jsml("body", attribute, html);
}

function button(attribute, ...html) {
  return jsml("button", attribute, html);
}

function canvas(attribute, ...html) {
  return jsml("canvas", attribute, html);
}

function caption(attribute, ...html) {
  return jsml("caption", attribute, html);
}

function cite(attribute, ...html) {
  return jsml("cite", attribute, html);
}

function code(attribute, ...html) {
  return jsml("code", attribute, html);
}

function col(attribute, ...html) {
  return jsml("col", attribute, html);
}

function colgroup(attribute, ...html) {
  return jsml("colgroup", attribute, html);
}

function data(attribute, ...html) {
  return jsml("data", attribute, html);
}

function datalist(attribute, ...html) {
  return jsml("datalist", attribute, html);
}

function dd(attribute, ...html) {
  return jsml("dd", attribute, html);
}

function del(attribute, ...html) {
  return jsml("del", attribute, html);
}

function details(attribute, ...html) {
  return jsml("details", attribute, html);
}

function dfn(attribute, ...html) {
  return jsml("dfn", attribute, html);
}

function dialog(attribute, ...html) {
  return jsml("dialog", attribute, html);
}

function div(attribute, ...html) {
  return jsml("div", attribute, html);
}

function dl(attribute, ...html) {
  return jsml("dl", attribute, html);
}

function dt(attribute, ...html) {
  return jsml("dt", attribute, html);
}

function em(attribute, ...html) {
  return jsml("em", attribute, html);
}

function embed(attribute, ...html) {
  return jsml("embed", attribute, html);
}

function fieldset(attribute, ...html) {
  return jsml("fieldset", attribute, html);
}

function figcaption(attribute, ...html) {
  return jsml("figcaption", attribute, html);
}

function figure(attribute, ...html) {
  return jsml("figure", attribute, html);
}

function footer(attribute, ...html) {
  return jsml("footer", attribute, html);
}

function form(attribute, ...html) {
  return jsml("form", attribute, html);
}

function h1(attribute, ...html) {
  return jsml("h1", attribute, html);
}

function h2(attribute, ...html) {
  return jsml("h2", attribute, html);
}

function h3(attribute, ...html) {
  return jsml("h3", attribute, html);
}

function h4(attribute, ...html) {
  return jsml("h4", attribute, html);
}

function h5(attribute, ...html) {
  return jsml("h5", attribute, html);
}

function h6(attribute, ...html) {
  return jsml("h6", attribute, html);
}

function head(attribute, ...html) {
  return jsml("head", attribute, html);
}

function header(attribute, ...html) {
  return jsml("header", attribute, html);
}

function hr(attribute, ...html) {
  return jsml("hr", attribute, html);
}

function html(attribute, ...html) {
  return jsml("html", attribute, html);
}

function i(attribute, ...html) {
  return jsml("i", attribute, html);
}

function iframe(attribute, ...html) {
  return jsml("iframe", attribute, html);
}

function img(attribute, ...html) {
  return jsml("img", attribute, html);
}

function input(attribute, ...html) {
  return jsml("input", attribute, html);
}

function ins(attribute, ...html) {
  return jsml("ins", attribute, html);
}

function kbd(attribute, ...html) {
  return jsml("kbd", attribute, html);
}

function label(attribute, ...html) {
  return jsml("label", attribute, html);
}

function legend(attribute, ...html) {
  return jsml("legend", attribute, html);
}

function li(attribute, ...html) {
  return jsml("li", attribute, html);
}

function link(attribute, ...html) {
  return jsml("link", attribute, html);
}

function main(attribute, ...html) {
  return jsml("main", attribute, html);
}

function map(attribute, ...html) {
  return jsml("map", attribute, html);
}

function mark(attribute, ...html) {
  return jsml("mark", attribute, html);
}

function meta(attribute, ...html) {
  return jsml("meta", attribute, html);
}

function meter(attribute, ...html) {
  return jsml("meter", attribute, html);
}

function nav(attribute, ...html) {
  return jsml("nav", attribute, html);
}

function noscript(attribute, ...html) {
  return jsml("noscript", attribute, html);
}

function object(attribute, ...html) {
  return jsml("object", attribute, html);
}

function ol(attribute, ...html) {
  return jsml("ol", attribute, html);
}

function optgroup(attribute, ...html) {
  return jsml("optgroup", attribute, html);
}

function option(attribute, ...html) {
  return jsml("option", attribute, html);
}

function output(attribute, ...html) {
  return jsml("output", attribute, html);
}

function p(attribute, ...html) {
  return jsml("p", attribute, html);
}

function param(attribute, ...html) {
  return jsml("param", attribute, html);
}

function picture(attribute, ...html) {
  return jsml("picture", attribute, html);
}

function pre(attribute, ...html) {
  return jsml("pre", attribute, html);
}

function progress(attribute, ...html) {
  return jsml("progress", attribute, html);
}

function q(attribute, ...html) {
  return jsml("q", attribute, html);
}

function rb(attribute, ...html) {
  return jsml("rb", attribute, html);
}

function rp(attribute, ...html) {
  return jsml("rp", attribute, html);
}

function select(attribute, ...html) {
  return jsml("select", attribute, html);
}

function small(attribute, ...html) {
  return jsml("small", attribute, html);
}

function source(attribute, ...html) {
  return jsml("source", attribute, html);
}

function span(attribute, ...html) {
  return jsml("span", attribute, html);
}

function strong(attribute, ...html) {
  return jsml("strong", attribute, html);
}

function style(attribute, ...html) {
  return jsml("style", attribute, html);
}

function sub(attribute, ...html) {
  return jsml("sub", attribute, html);
}

function summary(attribute, ...html) {
  return jsml("summary", attribute, html);
}

function sup(attribute, ...html) {
  return jsml("sup", attribute, html);
}

function table(attribute, ...html) {
  return jsml("table", attribute, html);
}

function tbody(attribute, ...html) {
  return jsml("tbody", attribute, html);
}

function td(attribute, ...html) {
  return jsml("td", attribute, html);
}

function template(attribute, ...html) {
  return jsml("template", attribute, html);
}

function textarea(attribute, ...html) {
  return jsml("textarea", attribute, html);
}

function tfoot(attribute, ...html) {
  return jsml("tfoot", attribute, html);
}

function th(attribute, ...html) {
  return jsml("th", attribute, html);
}

function thead(attribute, ...html) {
  return jsml("thead", attribute, html);
}

function time(attribute, ...html) {
  return jsml("time", attribute, html);
}

function title(attribute, ...html) {
  return jsml("title", attribute, html);
}

function tr(attribute, ...html) {
  return jsml("tr", attribute, html);
}

function track(attribute, ...html) {
  return jsml("track", attribute, html);
}

function u(attribute, ...html) {
  return jsml("u", attribute, html);
}

function ul(attribute, ...html) {
  return jsml("ul", attribute, html);
}

function varTag(attribute, ...html) {
  return jsml("var", attribute, html);
}

function video(attribute, ...html) {
  return jsml("video", attribute, html);
}

function wbr(attribute, ...html) {
  return jsml("wbr", attribute, html);
}

// Export all the functions
export {
  a,
  abbr,
  address,
  article,
  aside,
  audio,
  b,
  blockquote,
  body,
  button,
  canvas,
  caption,
  cite,
  code,
  col,
  colgroup,
  data,
  datalist,
  dd,
  del,
  details,
  dfn,
  dialog,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  head,
  header,
  hr,
  html,
  i,
  iframe,
  img,
  input,
  ins,
  kbd,
  label,
  legend,
  li,
  link,
  main,
  map,
  mark,
  meta,
  meter,
  nav,
  noscript,
  object,
  ol,
  optgroup,
  option,
  output,
  p,
  param,
  picture,
  pre,
  progress,
  q,
  rb,
  rp,
  select,
  small,
  source,
  span,
  strong,
  style,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  template,
  textarea,
  tfoot,
  th,
  thead,
  time,
  title,
  tr,
  track,
  u,
  ul,
  varTag,
  video,
  wbr,
};
