//your code here
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the input and button elements
  var newTodoInput = document.getElementById("newTodoInput");
  var addTodoBtn = document.getElementById("addTodoBtn");
  var todoList = document.getElementById("todoList");

  // Add click event listener to the "Add todo" button
  addTodoBtn.addEventListener("click", function () {
    // Get the value of the input field and trim any leading/trailing spaces
    var todoText = newTodoInput.value.trim();

    // Check if the input is not empty
    if (todoText !== "") {
      // Create a new list item (li) element
      var listItem = document.createElement("li");

      // Set the text content of the list item to the todo text
      listItem.textContent = todoText;

      // Append the list item to the todo list
      todoList.appendChild(listItem);

      // Clear the input field
      newTodoInput.value = "";
    }
  });

  // Add keypress event listener to the input for Enter key (keyCode 13)
  newTodoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Simulate a click on the "Add todo" button
      addTodoBtn.click();
    }
  });
});

