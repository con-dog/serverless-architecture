javascript: (function () {
  const quine = function (state = "") {
    document.body.innerHTML = "";
    const textarea = document.createElement("textarea");
    const hyperlink = document.createElement("a");
    hyperlink.textContent = "Quine Link";
    hyperlink.style.display = "block";

    textarea.value = state;
    document.body.appendChild(textarea);
    document.body.appendChild(hyperlink);

    const updateQuine = () => {
      const newState = textarea.value;
      const newQuine = `javascript:(function(){const quine=${quine.toString()};quine(\`${newState.replace(
        /`/g,
        "\\`"
      )}\`);})();`;
      hyperlink.href = newQuine;
      navigator.clipboard.writeText(newQuine);
    };

    textarea.addEventListener("input", updateQuine);

    updateQuine();
  };
  quine();
})();

javascript: (function () {
  const quine = function (state = "") {
    document.body.innerHTML = "";
    const textarea = document.createElement("textarea");
    const hyperlink = document.createElement("a");
    hyperlink.textContent = "Drag to bookmarks to save program state";
    hyperlink.style.display = "block";
    textarea.value = state;
    document.body.appendChild(textarea);
    document.body.appendChild(hyperlink);
    const updateQuine = () => {
      const newState = textarea.value;
      const newQuine = `javascript:(function(){const quine=${quine.toString()};quine(\`${newState.replace(
        /`/g,
        "\\`"
      )}\`);})();`;
      hyperlink.href = newQuine;
      navigator.clipboard.writeText(newQuine);
    };
    textarea.addEventListener("input", updateQuine);
    updateQuine();
  };
  quine(``);
})();

javascript: (function () {
  const quine = function (state = "") {
    document.body.innerHTML = "";
    const textarea = document.createElement("textarea");
    const hyperlink = document.createElement("a");
    hyperlink.textContent = "Quine Link";
    hyperlink.style.display = "block";
    textarea.value = state;
    document.body.appendChild(textarea);
    document.body.appendChild(hyperlink);
    const updateQuine = () => {
      const newState = textarea.value;
      const newQuine = `javascript:(function(){const quine=${quine.toString()};quine(\`${newState.replace(
        /`/g,
        "\\`"
      )}\`);})();`;
      hyperlink.href = newQuine;
      navigator.clipboard.writeText(newQuine);
    };
    textarea.addEventListener("input", updateQuine);
    updateQuine();
  };
  quine(`Hello`);
})();
