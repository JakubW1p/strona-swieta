const articlesDiv = document.querySelector(".articles");
const articles = [];
fetch("/assets/data/articles.json")
  .then((response) => response.json())
  .then((data) => {
    let i = 1;
    data.forEach((article) => {
      const infoDiv = document.createElement("div");
      infoDiv.className = "specialDay";
      const divHeader = document.createElement("h2");
      const divHeaderLink = document.createElement("a");
      const divDate = document.createElement("h3");
      const divDescription = document.createElement("h6");
      divHeaderLink.innerText = article.nazwa;
      divHeaderLink.href = `/article${i}`;
      divHeader.innerHTML = divHeaderLink.innerText;
      divDate.innerText = article.dzien;
      divDescription.innerText = article.opis.slice(0, 200) + "...";
      infoDiv.append(divHeader, divDate, divDescription);
      articles.push(infoDiv);
      console.log(article);
    });
  })
  .then(() => {
    articles.forEach((article) => {
      articlesDiv.append(article);
    });
    console.log(articles);
  })
  .catch((error) => console.error("Błąd:", error));
