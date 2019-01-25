const firstCardContainer = document.getElementById("firstCard-container")

let myFirstArticles = new XMLHttpRequest();

// http://myjson.com/jgh8c

myFirstArticles.open("GET", "https://api.myjson.com/bins/1evb1o");
myFirstArticles.onload = function () {

    let myData = JSON.parse(myFirstArticles.responseText);

    renderNewCards(myData.articles);
};

myFirstArticles.send();


function renderNewCards(articles) {
    firstHtmlInput = "";

    for (i = 0; i < articles.length; i++) {
        firstHtmlInput += `  
     <div class="col-sm-12 col-md-4 col-lg-4 pb-4"  >
     <div class="card">
     <img class="card-img-top" src="${articles[i].imageUrl}" alt="Card image cap">
     <div class="card-body">
         <p class="TextStyle text-info">
         ${articles[i].Text}</p>
             <a class="text-primary relative-bottom" href="#" role="button">Read more</a>
             <a class="text-primary relative-bottom" href="#" role="button">Rent car</a>
     </div>
 </div>
 </div>`
    }

    firstCardContainer.insertAdjacentHTML("beforeend", firstHtmlInput)
}



const cardContainer = document.getElementById("card-container")
const aBtn = document.getElementById("aBtn")

aBtn.addEventListener("click", function() {
    
   
    let myArticles = new XMLHttpRequest();
    myArticles.open("GET", "https://api.myjson.com/bins/1evb1o");
    myArticles.onload = function() {
     
    let myData = JSON.parse(myArticles.responseText);
      
    renderNewCards(myData.articles);
    };
    
    myArticles.send();

});

function renderNewCards(articles){
 htmlInput = "" ;

 for (i = 0; i< articles.length; i++) {
     htmlInput +=  `  
     <div class="col-sm-12 col-md-4 col-lg-4 pb-4"  >
     <div class="card">
     <img class="card-img-top" src="${articles[i].imageUrl}" alt="Card image cap">
     <div class="card-body">
         <p class="TextStyle text-info">
         ${articles[i].Text}</p>
             <a class="text-primary relative-bottom" href="#" role="button">Read more</a>
             <br>
             <a class="text-primary relative-bottom" href="#" role="button">Rent car</a>
     </div>
 </div>
 </div>`
 }

cardContainer.insertAdjacentHTML("beforeend" , htmlInput)
}




