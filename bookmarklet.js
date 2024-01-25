javascript: (() => {
  document.head.innerHTML = "<title>Serverless Motherfucking Website</title>";
  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href =
    "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";

  head.appendChild(link);

  document.body.innerHTML = `
      <main class="container mx-auto px-16">
        <h1 class="text-4xl font-bold text-center p-16">Serverless Motherfucking Website.</h1>
        <h2 class="text-2xl text-center">Tired of hearing the word <em><strong><u>Serverless</u></strong></em> yet?</h2>
        <p class="p-8"><em><strong>I am.</em></strong> For too long the marketing departments of large organizations have been using the word "Serverless" to describe their products. These "serverless" products ALWAYS have a server, ALWAYS.
        <p class="p-8">
          BUT. This right here IS a website that is <strong><em>TRULY SERVERLESS</em></strong>. This is the FIRST serverless website. <strong>CLIENT SIDE ONLY</strong>. Go on, check that Network tab, I know you want to. NOTHING. <strong>THERE IS NO FUCKING SERVER!</strong>, NO clever marketing. Guess what?! You can even save and fetch and data locally. BOOKMARKLETS.</p>
        </p>
        <h3 class="p-8">Lets add some Data. How about our Goals for 2024?</h3>
        <div class="flex gap-4 items-center justify-center p-8">
        <input id="goalInput" type="text" placeholder="Add a goal for 2024" class="italic"/>
          <button id="addButton" class="border rounded-md bg-blue-500 text-white px-4 py-2">ADD</button>
        </div>
        <ul id="goalsList" class="list-disc p-4 px-24 flex flex-col justify-center"></ul>
        <p class="p-8">Congratulations!! You beautiful bastard, goalsetting all without the MAN stealing your previous interwebs data!</p>
      </main>
    `;

  const script = document.createElement("script");
  script.textContent = `
    let goals = JSON.parse(localStorage.getItem('serverlessGoals')) || [];
    const goalsList = document.getElementById('goalsList');
    const renderGoals = () => {
      goalsList.innerHTML = goals.map(goal => '<li>' + goal + '</li>').join('');
    };
    renderGoals();

    document.getElementById('addButton').addEventListener('click', function() {
      const goalInput = document.getElementById('goalInput');
      if (goalInput.value.trim() !== '') {
        goals.push(goalInput.value);
        localStorage.setItem('serverlessGoals', JSON.stringify(goals));
        renderGoals();
        goalInput.value = '';
      }
    });
  `;
  document.body.appendChild(script);
})();
