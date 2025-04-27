function task1(callback) {
  console.log("Task 1 started");
  setTimeout(function () {
    console.log("Task 1 completed");
    callback(); // Call the callback function after Task 1 is completed
  }, 2000);
}

function task2() {
  console.log("Task 2 started");
  setTimeout(function () {
    console.log("Task 2 completed");
  }, 500);
}

task1(() => {
  task2();
});
