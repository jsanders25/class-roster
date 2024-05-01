// https://assets.codepen.io/16425/web-3-spring-2024-roster.json

// Data source
const dataSource = 'https://assets.codepen.io/16425/web-3-spring-2024-roster.json';

// Get
const container = document.querySelector('.swiper-wrapper');

// Fetch It
fetch( dataSource )
  .then( response => response.json() )
  .then( students => { 

    console.log(students);
     
    students.forEach( (student) => {
      
      // template
      const template =`
      <div class="swiper-slide">
        
         <img src="${student.Image}" />
         <h1 style=" color: ${student.Color} ">${student.Emoji} 
          
         ${student.Name}
         </h1>

         <p>${student.Quote}</p>
      

        </div>
      `
      
      //  dynamically insert      
      container.insertAdjacentHTML('afterbegin', template);
      
      
    });
  
});