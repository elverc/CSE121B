// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
document.getElementById('year').textContent = currentYear;

// Declare and instantiate variables
const fullName = "Elisa Furtado";
const favoriteFoods = ['Pizza', 'Ice Cream', 'Burger', 'Sushi', 'Pasta', 'Chocolate', 'Tacos', 'Cheesecake'];

// Set the name in the info block
document.getElementById('name').textContent = fullName;

// Display favoriteFoods array under h2 with line breaks
const foodElement = document.getElementById('food');
foodElement.innerHTML = favoriteFoods.map(food => `<li>${food}</li>`).join('');
