javascript: (function () {
  const quine = function () {
    document.documentElement.textContent = `javascript:(function(){const quine=${quine.toString()};quine();})()`;
  };
  quine();
})();
