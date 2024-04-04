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

        // if (event.ctrlKey) {
        //     // Even though event.key is not 'Control' (e.g., 'a' is pressed),
        //     // event.ctrlKey may be true if Ctrl key is pressed at the same time.
        //     alert(`Combination of ctrlKey + ${keyName}`)
        // } else {
        //     alert(`Key pressed ${keyName}`)
        // }
    },
    false
)

//ElementById test
function changeColor(newColor) {
    const elem = document.getElementById("para")
    console.log(elem)
    elem.style.color = newColor
}
