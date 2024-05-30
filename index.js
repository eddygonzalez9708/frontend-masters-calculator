let total = 0
let result = document.querySelector(".result")
let operator = ""

document.querySelector(".back").addEventListener("click", () => {
    result.innerText = result.innerText.slice(0, -1)
    if (!result.innerText) {
        result.innerText = 0
    }
})

document.querySelector(".clear").addEventListener("click", () => {
    total = 0
    result.innerText = 0
})

document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", (e) => {
        if (result.innerText === "0") {
            result.innerText = e.target.innerText
        } else {
            result.innerText += e.target.innerText
        }
    })
})

document.querySelectorAll(".operator").forEach((button) => {
    button.addEventListener("click", (e) => {
        let number = Number.parseInt(result.innerText)

        function arithmetic() {
            if (operator === "×") {
                total *= number
            } else if (operator === "−") {
                total -= number
            } else if (operator === "+") {
                total += number
            }
        }


        if (e.target.innerText === "=") {
            if (operator) {
                arithmetic()
            }

            operator = ""
            result.innerText = total
        } else {
            if (operator) {
                arithmetic()
            } else {
                total = number
            }
            
            operator = e.target.innerText
            result.innerText = 0
        }
    })
})