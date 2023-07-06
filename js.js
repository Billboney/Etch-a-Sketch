let grid = document.getElementById('container')

const squares = ['First child div', 'Second child div', 'Third child div'];

// Loop through the array and create a new div for each item
squares.forEach(content => {
  const childDiv = document.createElement('div');
  childDiv.textContent = content;
  parentDiv.appendChild(childDiv);
});