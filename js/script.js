// 1. Byt namn på första hoodien från Ash till Potato.
const ash = document.querySelector("article.art-1 h3");
ash.innerText = "Potato";

// 2. Byt namn på Home till Start.
const home = document.querySelector("nav a:nth-of-type(1)");
home.innerText = "Start";

// 3. Byt namn på Contact till Mail Us.
const contact = document.querySelector("nav a:nth-of-type(3)");
contact.innerText = "Mail Us";

// 4. Byt ut informationen om Sinus Hoodie - Fire.
const art2 = document.querySelector("article.art-2 p");
art2.innerText = "The sun sets beyond the distant hills.";

// 5. Byt bakgrundsfärg och text på en knapp.
const button = document.querySelector("article.art-3");
button.lastElementChild.style.backgroundColor = "#F6B1F3";
button.lastElementChild.innerText = "BUY!!!";

// 6. Byt bakgrundsfärg på någon av produkterna.
const art22 = document.querySelector("article.art-2");
art22.style.backgroundColor = "#66E706";
art22.firstElementChild.style.backgroundColor = "#66E706";

// 7. Byt ut adressen på sidan.
const address = document.querySelector("footer section article p");
address.innerHTML =
  "Utvecklarskolan<br />Stora Södergatan 47<br />222 23 Lund, Sweden";

// 8. Byt färg på samtliga <p>.
const allPTags = document.querySelectorAll("p");
allPTags.forEach((i) => {
  i.style.backgroundColor = "#1DC3E9";
});

// 9. Ändra text på samtliga knappar till add to cart.
const allButtonTags = document.querySelectorAll("button");
allButtonTags.forEach((i) => {
  i.innerText = "add to cart";
});

// 10. Lägg till classen active på menyalternativet home.
home.classList.add("active");

// 11. Ta bort classen logo på logotypen.
const removeLogo = document.querySelector("body header img");
removeLogo.classList.remove("logo");
console.log(`#11: ${removeLogo.classList.contains("logo")}`);
// #11: false

// 12. Lägg till ett nytt menyalternativ.
const newMenuOption = document.querySelector("body header nav img");
newMenuOption.insertAdjacentHTML(
  "beforebegin",
  "<a href='#'>New Menu Option</a>"
);

/* 13. Lägg till en ny produkt med följande info.

el	beskrivning
img	hoodie-forrest.png
h2	Sinus Hoodie
h3	Forrest
p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores. */
const newArticle = document.querySelector("body main");
newArticle.insertAdjacentHTML(
  "beforeend",
  `<article class="art-4"><figure><img src="img/hoodie-forrest.png" alt="hoodie" /></figure><h2>Sinus Hoodie</h2><h3>Forrest</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p></article>`
);

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
removeLogo.addEventListener("click", function () {
  console.log("found you!");
});

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
const allArticles = document.querySelectorAll("article");
allArticles.forEach((i) => {
  if (i.classList.contains("art-1")) {
    i.addEventListener("click", function () {
      console.log("Hi, Im article Ash.");
    });
  } else if (i.classList.contains("art-2")) {
    i.addEventListener("click", function () {
      console.log("Hi, Im article Fire.");
    });
  } else if (i.classList.contains("art-3")) {
    i.addEventListener("click", function () {
      console.log("Hi, Im article Water.");
    });
  } else if (i.classList.contains("art-4")) {
    i.addEventListener("click", function () {
      console.log("Hi, Im article Forrest.");
    });
  }
});
