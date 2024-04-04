function addTask() {
    // Grabbing HTML elements
    const taskInput = document.getElementById("taskInput")
    const taskList = document.getElementById("taskList")

    // Alert message when input is empty
    if (taskInput.value === "") {
        alert("Please enter a task.")
        return
    }

    // Appending taskInput value as li
    const li = document.createElement("li")
    const taskText = document.createTextNode(taskInput.value)
    li.appendChild(taskText)

    // Delete button
    const deleteSymbol = document.createElement("deleteSymbol")
    const closeBtn = document.createTextNode("×")
    deleteSymbol.className = "close"
    deleteSymbol.appendChild(closeBtn)
    li.appendChild(deleteSymbol)

    taskList.appendChild(li)

    taskInput.value = ""

    // Changing status after deleting button
    const close = document.getElementsByClassName("close")
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            const listItem = this.parentElement
            listItem.style.display = "none"
        }
    }

    li.onclick = function () {
        this.classList.toggle("completed")
    }
}

// Excute button with Enter key
document.addEventListener(
    "keydown",
    (event) => {
        const keyName = event.key

        if (keyName === "Enter") {
            // do not alert when only Control key is pressed.
            addTask()
            console.log("addTask conducted")
            return
        }
    },
    false
)
