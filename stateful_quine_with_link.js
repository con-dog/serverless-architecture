javascript: (function () {
  const quine = function (state = "") {
    document.head.innerHTML = "";
    document.body.innerHTML = "";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    const h1 = document.createElement("h1");
    h1.textContent = "Serverless Notepad Quine Bookmarklet 🤖🔖";
    const subheading = document.createElement("p");
    subheading.textContent =
      "Write notes, save them, share them with others, and sync across devices - all without a server or database";
    document.body.appendChild(h1);
    document.body.appendChild(subheading);
    const textarea = document.createElement("textarea");
    textarea.style.width = "500px";
    textarea.style.height = "500px";
    textarea.style.display = "block";
    textarea.style.padding = "1rem";
    textarea.style.margin = "1.5rem";
    const hyperlink = document.createElement("a");
    hyperlink.textContent =
      ":: 🤏 Drag me to your bookmarks bar to save state 💾 ::";
    hyperlink.style.display = "block";
    hyperlink.style.cursor = "move";
    hyperlink.style.padding = "1rem";
    hyperlink.style.border = "1px solid blue";
    hyperlink.style.borderRadius = "1rem";
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
    hyperlink.addEventListener("mouseover", function () {
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const dateTime = new Date()
        .toLocaleString("en-NZ", options)
        .replace(",", "");

      hyperlink.textContent = `Notes: ${dateTime}`;
    });
    hyperlink.addEventListener("mouseout", function () {
      hyperlink.textContent =
        ":: Drag me to your bookmarks bar to save state ::";
    });
    textarea.addEventListener("input", updateQuine);
    updateQuine();
  };
  quine(``);
})();
