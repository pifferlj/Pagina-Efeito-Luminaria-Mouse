// Get a reference to the .mask element.
const mask = document.querySelector('.mask');

// Add an event to catch mouse movements.
document.addEventListener('pointermove', (pos) => {
  
    // Calculate mouse position in percentages.
    let x = parseInt( pos.clientX / window.innerWidth * 100 );
    let y = parseInt( pos.clientY / window.innerHeight * 100 );
  
    // Update the custom property values on the body.
    mask.style.setProperty('--mouse-x', x + '%');
    mask.style.setProperty('--mouse-y', y + '%'); 
  
});