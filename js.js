function gridGen() {
  const size = document.getElementById('size');
  const container = document.getElementById('container');
  const count = parseInt(size.value) * parseInt(size.value);
  const gridSize = parseInt(size.value); // Get the grid size

  // Set the class style of the container
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

  // Clear existing divs
  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.classList.add(`square-${i}`, `square`);
    container.appendChild(div);

    // Add onmousemove event handler to each div
    div.onmousemove = function(event) {
      event.stopPropagation;
      div.classList.add(`blue`);
      
      
    };
  }
}




gridGen();
