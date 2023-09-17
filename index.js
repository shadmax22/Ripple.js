function Ripple(p) {
  let SuperInitiated = false;
  let SuperState = new Proxy(
    {},
    {
      get: function (target, key) {
        return target[key];
      },
      set: function (target, key, value) {
        target[key] = value;

        if (SuperInitiated) SuperFunction.render(SuperState);

        return true;
      },
    }
  );
  let SuperFunction = p(SuperState);

  SuperInitiated = true;

  SuperFunction.render(SuperState);
}

export { Ripple };
