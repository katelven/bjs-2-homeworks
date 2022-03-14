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
    if (flag === false) {
      flag = true;
    timeout = setTimeout(()=> 
    { func(...args)
    flag = false }, ms);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(()=> func(...args), ms);
    }
  }
}

function debounceDecorator2(debounceDecoratorNew) {
    let count = 0;
    function wrapper(...args) {
      wrapper.history = count++;
      return debounceDecoratorNew.call(this, ...args);
    }
    return wrapper;
  }
