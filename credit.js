// Initialize a Vue app
const app = Vue.createApp({
  data() {
    return {
      taskLists: [
        {
          name: "Task List 1",
          tasks: ["Work from home", "Project"],
        },
        // You can add more task lists here
      ],
      newTaskListName: "", // To track the name of the new task list
      newTaskName: "", // To track the name of the new task
    };
  },
  methods: {
    // Function to add a new task list
    addTaskList() {
      if (this.newTaskListName.trim() !== "") {
        this.taskLists.push({
          name: this.newTaskListName,
          tasks: [],
        });
        this.newTaskListName = ""; // Clear the input field
      }
    },
    // Function to remove a task list
    removeTaskList(index) {
      this.taskLists.splice(index, 1);
    },
    // Function to add a new task to a task list
    addTask(taskListIndex) {
      if (this.newTaskName.trim() !== "") {
        this.taskLists[taskListIndex].tasks.push(this.newTaskName);
        this.newTaskName = ""; // Clear the input field
      }
    },
    // Function to remove a task from a task list
    removeTask(taskListIndex, taskIndex) {
      this.taskLists[taskListIndex].tasks.splice(taskIndex, 1);
    },
  },
});

app.mount("#app");