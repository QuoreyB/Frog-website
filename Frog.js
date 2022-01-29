const display = document.getElementById("froggo");

const motivation = [{
  quote: "Are you stupid? The answer is NO :v",
  person: "-Mr. Frog"
}, {
  quote: "How is this even a question? Why of course!",
  person: "-Mr. Frog"
}, {
  quote: "Sorry to tell you this, but the answer is no",
  person: "-Mr. Frog"
}, {
  quote: "I say yes, though others may disagree with me",
  person: "-Mr. Frog"
}, {
  quote: "Maybe...could be a yes..but it's feeling like a no for me",
  person: "-Mr. Frog"
},
   {
  quote: "Yes'nt",
  person: "-Mr. Frog"
}




];


function askfrog() {
    document.getElementById("myButton").disabled = true;
  const listLength = motivation.length;
  const randVal = motivation[Math.floor(Math.random() * listLength)];
  display.innerHTML = `<q>${randVal.quote}</q><br><br><small>${randVal.person}</small>`;
}