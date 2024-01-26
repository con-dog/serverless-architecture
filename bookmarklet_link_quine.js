javascript: (function () {
  const quine = function () {
    document.body.innerHTML = "";
    const btn = document.createElement("button");
    btn.innerText = `javascript:(function(){const quine=${quine.toString()};quine();})()`;
    document.body.appendChild(btn);
  };
  quine();
})();

javascript: (function () {
  const quine = function () {
    document.body.innerHTML = "";
    const btn = document.createElement("button");
    btn.innerText = `javascript:(function(){const quine=${quine.toString()};quine();})()`;
    document.body.appendChild(btn);
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(btn.innerText);
      alert("Copied quine to clipboard");
    });
  };
  quine();
})();

javascript: (function () {
  const quine = function () {
    document.body.innerHTML = "";
    const btn = document.createElement("button");
    btn.innerText = `SAVE STATE TO CLIPBOARD THEN SAVE AS BOOKMARK`;
    document.body.appendChild(btn);
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);

    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(document.documentElement.innerText);
      alert("Copied quine to clipboard");
    });
  };
  quine();
})();

javascript: (function () {
  const quine = function () {
    document.body.innerHTML = "";
    const btn = document.createElement("button");
    btn.innerText = `SAVE STATE TO CLIPBOARD THEN SAVE AS BOOKMARK`;
    document.body.appendChild(btn);
    const textArea = document.createElement("textarea");
    document.body.appendChild(textArea);

    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(document.documentElement.innerText);
      alert("Copied quine to clipboard");
    });
  };
  quine();
})();

javascript: (function () {
  const quine = function () {
    document.body.innerHTML = "";
    const btn = document.createElement("button");
    btn.innerText = `javascript:(function(){const quine=${quine.toString()};quine();})()`;
    document.body.appendChild(btn);
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(btn.innerText);
      alert("Copied quine to clipboard");
    });
  };
  quine();
})();

javascript: (function () {
  const quine = function (state = "") {
    document.body.innerHTML = "";
    const textarea = document.createElement("textarea");
    textarea.value =
      state ||
      `javascript:(function(){const quine=${quine.toString()};quine();})()`;
    document.body.appendChild(textarea);
    textarea.addEventListener("input", function () {
      const newState = `javascript:(function(){const quine=${quine.toString()};quine('${textarea.value.replace(
        /'/g,
        "\\'"
      )}');})()`;
      textarea.value = newState;
    });
  };
  quine(
    "javascript:(function(){const quine=function (state = '') {    document.body.innerHTML = '';    const textarea = document.createElement('textarea');    textarea.value = state || `javascript:(function(){const quine=${quine.toString()};quine();})()`;    document.body.appendChild(textarea);    textarea.addEventListener('input', function () {      const newState = `javascript:(function(){const quine=${quine.toString()};quine('${textarea.value.replace(/'/g, \"\\'\")}');})()`;      textarea.value = newState;    });  };quine();})()A"
  );
})();

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
  quine(`Hello World`);
})();

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
  quine(`Hello World Bye World`);
})();
