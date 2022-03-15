function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      let result = cache[idx].result;
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
    }
    let result = func(...args);
    cache.push({
      result: result,
      hash: hash,
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;
  return function wrapper(...args) {
    if (!flag) {
      func.apply(this, args);
    }
    flag = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      flag = false;
    }, ms);
  };
}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;
  function wrapper(...args) {
    wrapper.count++;
    if (!flag) {
      func.apply(this, args);
    }
    flag = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      flag = false;
    }, ms);
  };
  return wrapper;
}
