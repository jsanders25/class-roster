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
      <img style='border: ${student.Color} solid 10px' src="${student.Image}" alt="${student.Name}"/>
      <h1 style='color: ${student.Color}'>
      ${student.Name}${student.Emoji}
      </h1>
      <h3>Superpower is ${student.Superpower}</h3>
      <blockquote>${student.Quote}</blockquote>
      
    </div>
      `
      
      //  dynamically insert      
      container.insertAdjacentHTML('afterbegin', template);
      
      
    });
  
});