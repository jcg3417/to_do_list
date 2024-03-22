function addTask() {
    const taskInput = document.getElementById("taskInput")
    const taskList = document.getElementById("taskList")

    if (taskInput.value === "") {
        alert("Please enter a task.")
        return
    }

    const li = document.createElement("li")
    const taskText = document.createTextNode(taskInput.value)
    li.appendChild(taskText)

    const span = document.createElement("span")
    const closeBtn = document.createTextNode("×")
    span.className = "close"
    span.appendChild(closeBtn)
    li.appendChild(span)

    taskList.appendChild(li)

    taskInput.value = ""

    const close = document.getElementsByClassName("close")
    for (const i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const listItem = this.parentElement
            listItem.style.display = "none"
        }
    }

    li.onclick = function () {
        this.classList.toggle("completed")
    }
}
