const headlineContainer = document.getElementById("headline-container")

let myHeadlines = new XMLHttpRequest();

// http://myjson.com/jgh8c

myHeadlines.open("GET", "https://api.myjson.com/bins/jd79o");
myHeadlines.onload = function() {

    let ourData = JSON.parse(myHeadlines.responseText);

    renderHeadlines(ourData.headlines);
};

myHeadlines.send();


function renderHeadlines(headlines) {
    htmlInput = "";

    for (i = 0; i < headlines.length; i++) {
        htmlInput += `  
     

     <div class="container card mt-4 mb-2">
     <div class="row" >
         <div class="col-sm-12 col-md-6 col-lg-4 nopadding">
             <div class="card">
                 <img class="card-img-right" src="${headlines[i].imageUrl}" alt="Card image cap">

             </div>
         </div>
         <div class="col-sm-12 col-md-6 col-lg-8 nopadding">
             <div class="card-body ">
                 <h5 class="card-title text-primary hTags">${headlines[i].Title}</h5>
                 <p class="TextStyle text-info">${headlines[i].Text}</p>
                 <a class="text-primary relative-bottom" href="#" role="button">Read more</a>
             </div>

         </div>
     </div>
 </div>
   `
    }

    headlineContainer.insertAdjacentHTML("beforeend", htmlInput)
}



