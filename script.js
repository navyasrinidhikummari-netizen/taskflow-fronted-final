console.log("JavaScript is working");
async function createTask() {
    const taskName = document.getElementById("taskName").value.trim();

    if (taskName === "") {
        alert("Please enter a task name");
        return;
    }

    try {
        const task = {
    id: Date.now(),
    name: taskName,
    status: "waiting"
};
        const table = document.getElementById("taskList");

        const row = table.insertRow();

        row.insertCell(0).textContent = task.name;
        row.insertCell(1).textContent = task.status;
        row.insertCell(2).textContent = "Worker 1";
        setTimeout(() => {
    row.cells[1].textContent = "running";
}, 2000);

setTimeout(() => {
    row.cells[1].textContent = "completed";
}, 5000);
setTimeout(() => {
    const failed = Math.random() < 0.3; // 30% chance it "fails"
    if (failed) {
        row.cells[1].textContent = "failed - reassigning...";
        row.cells[2].textContent = "Worker 2";

        setTimeout(() => {
            row.cells[1].textContent = "running";
        }, 1500);

        setTimeout(() => {
            row.cells[1].textContent = "completed";
        }, 4000);
    }
}, 2500);

        document.getElementById("taskName").value = "";

        alert("Task created successfully!");

    } catch (error) {
        alert("Something went wrong, please try again.");
        console.error(error);
    }
}