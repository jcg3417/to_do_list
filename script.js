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

    const deleteSymbol = document.createElement("deleteSymbol")
    const closeBtn = document.createTextNode("×")
    deleteSymbol.className = "close"
    deleteSymbol.appendChild(closeBtn)
    li.appendChild(deleteSymbol)

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
