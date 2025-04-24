// Function to change the text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('intro').textContent = "The text content has been changed! You can now modify other elements as well.";
});

// Function to modify CSS styles via JavaScript
document.getElementById('changeStyleButton').addEventListener('click', function() {
    document.getElementById('intro').classList.toggle('highlight');
});

// Function to add a new element when a button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a dynamically added paragraph!";
    document.getElementById('newElementContainer').appendChild(newElement);
});

// Function to remove the last added element when a button is clicked
document.getElementById('removeElementButton').addEventListener('click', function() {
    const container = document.getElementById('newElementContainer');
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
});
