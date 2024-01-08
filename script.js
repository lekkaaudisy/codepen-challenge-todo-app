// Selecting elements
const taskForm = document.getElementById("task_form");
const taskInput = document.getElementById("task_input");
const taskList = document.getElementById("task_list");

// Function to create a new task
function createTask(taskText) {
  // Creating task element
  const task = document.createElement("div");
  task.classList.add("task");

  // Creating task text element
  const taskTextElement = document.createElement("div");
  taskTextElement.classList.add("task_text");
  taskTextElement.textContent = taskText;

  // Creating task checkbox element
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.classList.add("task_checkbox");

  // Adding event listener to mark task as completed
  taskCheckbox.addEventListener("change", function () {
    task.classList.toggle("completed");
  });

  // Creating remove button element
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove_btn");
  removeButton.textContent = "Remove";

  // Adding event listener to remove task
  removeButton.addEventListener("click", function () {
    task.remove();
  });

  // Appending elements to task
  task.appendChild(taskCheckbox);
  task.appendChild(taskTextElement);
  task.appendChild(removeButton);

  // Appending task to task list
  taskList.appendChild(task);
}

// Event listener for form submission
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = ""; // Clear input field
  }
});
