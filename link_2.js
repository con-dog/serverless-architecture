// works
javascript: (function () {
  const quine = function (state = "", link = "") {
    document.body.innerHTML = "";
    const textarea = document.createElement("textarea");
    textarea.value = state;
    document.body.appendChild(textarea);
    const hyperlink = document.createElement("a");
    hyperlink.href = link;
    document.body.appendChild(hyperlink);

    textarea.addEventListener("input", function () {
      // Somehow update the href and insert into newQuine
      const newState = textarea.value;
      const newQuine = `javascript:(function(){const quine=${quine.toString()};quine(\`${newState.replace(
        /`/g,
        "\\`"
      )}\`);})();`;

      navigator.clipboard.writeText(newQuine);
    });
  };
  quine();
})();

// works
javascript: (function () {
  const quine = function (state = "") {
    document.body.innerHTML = "";
    const textarea = document.createElement("textarea");
    textarea.value = state;
    document.body.appendChild(textarea);

    textarea.addEventListener("input", function () {
      const newState = textarea.value;
      const newQuine = `javascript:(function(){const quine=${quine.toString()};quine(\`${newState.replace(
        /`/g,
        "\\`"
      )}\`);})();`;
      navigator.clipboard.writeText(newQuine);
    });
  };
  quine();
})();
