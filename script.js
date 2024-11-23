// Categories and items
const categories = {
  "Category 1": ["Item 1.1", "Item 1.2", "Item 1.3", "Item 1.4", "Item 1.5"],
  "Category 2": ["Item 2.1", "Item 2.2", "Item 2.3", "Item 2.4", "Item 2.5"],
  "Category 3": ["Item 3.1", "Item 3.2", "Item 3.3", "Item 3.4", "Item 3.5"],
  "Category 4": ["Item 4.1", "Item 4.2", "Item 4.3", "Item 4.4", "Item 4.5"],
};

// Function to generate random items
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to handle the roll button click
document.getElementById("rollButton").addEventListener("click", () => {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous output

  // Generate and display random items for each category
  for (const [category, items] of Object.entries(categories)) {
    const categoryElement = document.createElement("p");
    categoryElement.textContent = category;

    const itemElement = document.createElement("p");
    itemElement.textContent = getRandomItem(items);

    outputDiv.appendChild(categoryElement);
    outputDiv.appendChild(itemElement);
  }
});
