export class Ui {
   displayDataGame(data) {
      let gamesBox = ``;
      for (let i = 0; i < data.length; i++) {
         gamesBox += `
         <div class="col">
         <div data-id="${data[i].id}"  class="card h-100 bg-transparent" role="button" ">
            <div  class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${data[i].thumbnail}" />
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 text-light small">${data[i].title}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
   
                  <p class="card-text text-light small text-center opacity-50">
                     ${data[i].short_description.split(" ", 8)}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge text-light badge-color">${data[i].genre}</span>
               <span class="badge text-light badge-color">${data[i].platform}</span>
   
            </footer>
         </div>
      </div>
         `;
      }

      document.getElementById("gameData").innerHTML = gamesBox;
   }

   displayDetails(data) {
      const content = `
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details" />
   </div>
   <div class="col-md-8">
      <h3>Title: ${data.title}</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
      <p class="small text-light">${data.description}</p>
      <a class="btn btn-outline-warning text-light" target="_blank" href="${data.game_url}">Show Game</a>
   </div>
      
      `;

      document.getElementById("detailsContent").innerHTML = content;
   }
}

















// export class Ui{


//      displayData(data){
//         let cols=``;
//         for( let i=0; i< data.length ;i++){
//             cols+=`
//             <div class="col-md-3">
//             <div class="card h-100 p-2 bg-transparent ">
//                 <img src="${data[i].thumbnail}" class="w-100 rounded imgo "  alt="...">
//                 <div class="card-body">
//                   <div class="d-flex justify-content-between mb-2">
//                     <h5 class="card;4-title text-light fs-6 fw-lighter">${data[i].title}</h5>
//                     <button class="btn  text-light">Free</button>
//                   </div>
//                   <p class="card-text text-light  small text-center opacity-50">${data[i].short_description.split(" ", 8)}</p>
//                 </div>
               
//                 <div class="card-body footer py-1 d-flex justify-content-between">
//                   <span  class="  text-light">${data[i].genre}</span>
//                   <span class=" text-light ">${data[i].platform}</span>
//                 </div>
//               </div>
    
//         </div>
            
            
//             `
//         console.log(cols);
          
    
//         }
//         document.getElementById('Row').innerHTML=cols;
    
//     }
//     displayDetails(data){
    
        
//         let content= `
//          <div class="col-md-4">
//          <img src="${data.thumbnail}" class="w-100" alt="image details" />
//       </div>
//       <div class="col-md-8">
//          <h3>Title: ${data.title}</h3>
//          <p>Category: <span class="badge text-bg-info text-light"> ${data.genre}</span> </p>
//          <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
//          <p>Status: <span class="badge text-bg-info "> ${data.status}</span> </p>
//          <p class="small">${data.description}</p>
//          <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
//       </div>
         
//          `;
   
//          document.getElementById("detailsContent").innerHTML = content; 
//          console.log(content); 
   
//    }





// }















// getData('mmorpg');


// let links=document.querySelectorAll('.nav-link')
// let Alink=document.querySelector('.active')
// for(let i=0; i<links.length;i++){
//     links[i].addEventListener('click',function(e){
//         document.querySelector(".active").classList.remove("active");
//         links[i].classList.add("active")
       
//        let curCatogry=e.target.innerHTML
//        getData(curCatogry);

//        console.log(curCatogry );

//     })
// }

// async function getData(catogry){
//     const load = document.querySelector(".load");
//     load.classList.remove("d-none");
//     const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catogry}`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'cb9b332012mshd9a7100146d2137p1863a5jsn891dcabefa9e',
// 		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();

//     displayData(result);
//     cardClick()
//     load.classList.add("d-none");
//     displayDetails(result);
    
// 	console.log(result);
   
// } catch (error) {
// 	console.error(error);
//     displayData();
    
// }

// }

//  async function getId(idGames){
//     const load = document.querySelector(".loading");
//     load.classList.remove("d-none");
//     const options = {
//         method: "GET",
//         headers: {
//            "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
//            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//         },
//      };

//      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`, options)
//         .then((response) => response.json())
//         .then((response) => this.ui.displayDetails(response))
//         .catch((err) => console.error(err))
//         .finally(() => {
//            load.classList.add("d-none");
//         });
//   }






// function displayData(data){
//     let cols=``;
//     for( let i=0; i< data.length ;i++){
//         cols+=`
//         <div class="col-md-3">
//         <div class="card h-100 p-2 bg-transparent ">
//             <img src="${data[i].thumbnail}" class="w-100 rounded imgo "  alt="...">
//             <div class="card-body">
//               <div class="d-flex justify-content-between mb-2">
//                 <h5 class="card;4-title text-light fs-6 fw-lighter">${data[i].title}</h5>
//                 <button class="btn  text-light">Free</button>
//               </div>
//               <p class="card-text text-light  small text-center opacity-50">${data[i].short_description.split(" ", 8)}</p>
//             </div>
           
//             <div class="card-body footer py-1 d-flex justify-content-between">
//               <span  class="  text-light">${data[i].genre}</span>
//               <span class=" text-light ">${data[i].platform}</span>
//             </div>
//           </div>

//     </div>
        
        
//         `
//     console.log(cols);
      

//     }
//     document.getElementById('Row').innerHTML=cols;

// }
// displayData();



// function displayDetails(data){
    
        
//      let content= `
//       <div class="col-md-4">
//       <img src="${data.thumbnail}" class="w-100" alt="image details" />
//    </div>
//    <div class="col-md-8">
//       <h3>Title: ${data.title}</h3>
//       <p>Category: <span class="badge text-bg-info text-light"> ${data.genre}</span> </p>
//       <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
//       <p>Status: <span class="badge text-bg-info "> ${data.status}</span> </p>
//       <p class="small">${data.description}</p>
//       <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
//    </div>
      
//       `;

//       document.getElementById("detailsContent").innerHTML = content; 
//       console.log(content); 

// }



// displayDetails();





// let closeInpute=document.querySelector('.fa-xmark');
// closeInpute.addEventListener('click',function(){
//   console.log("hhhhhhhhhhhhhhhhh")
//     document.querySelector(".games").classList.remove("d-none");
//     document.querySelector(".details").classList.add("d-none");
  

// })



// function cardClick(){
// let cards= document.querySelectorAll('.card');
// for(let i=0;i< cards.length ;i++){
// cards[i].addEventListener('click',function () {
//     let id=cards[i].dataset.id;
  
  
//     document.querySelector(".games").classList.add("d-none");
//     document.querySelector(".details").classList.remove("d-none");
//     getId(id)
    // showDetails(id);
//     displayDetails(id);
    
// })
// }



//  }



// function showDetails(idGame) {
//     const details = new Details(idGame);
//     document.querySelector(".games").classList.add("d-none");
//     document.querySelector(".details").classList.remove("d-none");
//  }






