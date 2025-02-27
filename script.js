window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  //elemekFormazasa1();
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("section h2")[0];
  let vami = ELEM.innerHTML;
  console.log(vami);
}
function elemekElerese2() {
  const ELEM = document.querySelectorAll("#ide")[0];
  //const ELEM = document.getElementById("ide");
  ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
  const ELEM = document.querySelectorAll(".ide")[0];
  //const ELEM = document.getElementsByClassName("ide");
  ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
  const ELEM = document.getElementsByClassName("lista")[0];
  let txt = "<ul>";
  for (let i = 0; i < 6; i++) {
    let velszam = Math.floor(Math.random() * 21 + 10);
    txt += `<li>${velszam} </li>`;
  }
  txt += "</ul>";
  console.log(txt);
  ELEM.innerHTML = txt;
  //function elemekFormazasa1()
  ELEM.classList.add("formazott");
  ELEM.addEventListener("click",kattintasutan)
}
function kattintasutan() {
    const ELEM = document.getElementsByClassName("lista")[0];
    const ELEM2 = document.getElementsByClassName("kattintasutan")[0];
    ELEM2.innerHTML= ELEM.innerHTML
}

