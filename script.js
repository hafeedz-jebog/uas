// Ambil elemen DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTask = document.getElementById("totalTask");
const completedTask = document.getElementById("completedTask");

// Event tombol tambah
addTaskBtn.addEventListener("click", addTask);

// Fungsi tambah tugas
function addTask() {
  const taskText = taskInput.value.trim();

  // Validasi input
  if (taskText === "") {
    alert("HARUS ADA ISINYA!");
    return;
  }

  // Buat elemen list
  const li = document.createElement("li");

  // Checkbox selesai
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Text tugas
  const span = document.createElement("span");
  span.textContent = taskText;

  // Tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";

  // Event tandai selesai
  checkbox.addEventListener("change", () => {
    span.classList.toggle("completed");
    updateCount();
  });

  // Event hapus tugas
  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateCount();
  });

  // Gabungkan elemen
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Reset input
  taskInput.value = "";

  updateCount();
}

// Hitung jumlah tugas
function updateCount() {
  const tasks = taskList.children;
  let completed = 0;

  for (let task of tasks) {
    if (task.querySelector("input").checked) {
      completed++;
    }
  }

  totalTask.textContent = tasks.length;
  completedTask.textContent = completed;
}
