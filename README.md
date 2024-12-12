
# To-Do List Web Application

## Project Title: To-Do List Web Application

### Description:
This is a simple and user-friendly web-based To-Do List application that allows users to add, view, mark as completed, and delete tasks. The application helps users stay organized and productive by offering a clean interface to manage daily tasks.

### Features:
- **Add Task**: Users can enter a task and add it to the list.
- **View Tasks**: Display all the tasks added by the user.
- **Mark Task as Completed**: Tasks can be marked as completed by clicking on them, with a visual indication (e.g., strikethrough).
- **Delete Task**: Tasks can be deleted from the list by clicking the delete icon.
- **Responsive Layout**: The app adapts to different screen sizes for a smooth experience on both mobile and desktop devices.

### Technologies Used:
- **HTML**: For the structure of the application.
- **CSS**: For styling the app and ensuring it is responsive.
- **JavaScript**: For adding interactivity to the app (adding, marking, and deleting tasks).
- **Font Awesome**: For adding icons like the task checkmark and delete button.

### How to Use:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   ```

2. **Open the `index.html` file in a browser** to start using the app.

### Running the Project:
- Simply open the `index.html` file in any modern web browser to use the app.

### Code Explanation:
- **HTML Structure**: The app has an input field for users to add tasks, a button to add the tasks to the list, and a container to display the tasks.
  ```html
  <div class="row">
      <input type="text" id="input-box" placeholder="Enter task">
      <button id="add-btn">Add</button>
  </div>
  <div id="task-container-list"></div>
  ```
  
- **JavaScript Functionality**: The app dynamically adds tasks, marks them as completed, and removes tasks using JavaScript. Tasks are stored in the DOM and can be manipulated in real time.
  ```javascript
  document.getElementById('add-btn').addEventListener('click', addTask);
  document.getElementById('task-container-list').addEventListener('click', deleteTask);
  ```

- **CSS Styling**: CSS styles the input field, button, and tasks. It ensures completed tasks are visually distinct and the layout is responsive.
  ```css
  .completed {
      text-decoration: line-through;
      background-color: #f0f0f0;
  }
  ```

### Challenges Faced:
- **Dynamic Task Management**: Ensuring tasks are dynamically added and removed without reloading the page was a challenge. This was resolved by using JavaScript to manipulate the DOM.
- **Cross-Browser Compatibility**: Ensuring the app worked across different browsers and devices required attention to responsive design and CSS compatibility.
- **UI Enhancements**: Initially, the design was basic, but integrating Font Awesome icons and enhancing the layout improved the user experience.

### Future Improvements:
- **Persistent Data**: Store tasks in `localStorage` to persist the data even after refreshing the page.
- **Task Editing**: Allow users to edit tasks after they are added.
- **Due Dates & Reminders**: Add a feature to set due dates and reminders for tasks.
- **Priority Levels**: Allow users to set priority levels for tasks.

### Conclusion:
The To-Do List Web Application is an easy-to-use tool for managing tasks. It offers basic task management features, including adding, completing, and deleting tasks. With further improvements, it could become a robust productivity tool for users.

---

### Contact:
If you have any questions or suggestions, feel free to reach out at [shubhampandey8663@gmail.com].

