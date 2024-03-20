function addTask() {
    var taskInput = document.getElementById("taskInput")
    var taskList = document.getElementById("taskList")

    if (taskInput.value === "") {
        alert("Please enter a task.")
        return
    }

    var li = document.createElement("li")
    var taskText = document.createTextNode(taskInput.value)
    li.appendChild(taskText)

    var span = document.createElement("span")
    var closeBtn = document.createTextNode("×")
    span.className = "close"
    span.appendChild(closeBtn)
    li.appendChild(span)

    taskList.appendChild(li)

    taskInput.value = ""

    var close = document.getElementsByClassName("close")
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var listItem = this.parentElement
            listItem.style.display = "none"
        }
    }

    li.onclick = function () {
        this.classList.toggle("completed")
    }
}
