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

    textarea.addEventListener("keydown", function (e) {
      if (e.ctrlKey && e.key === "Enter") {
        const newState = textarea.value;
        const newQuine = `javascript:(function(){const quine=${quine.toString()};quine(\`${newState.replace(
          /`/g,
          "\\`"
        )}\`);})();`;
        navigator.clipboard.writeText(newQuine);
        alert("Copied quine with state to clipboard");
      }
    });
  };
  quine();
})();
