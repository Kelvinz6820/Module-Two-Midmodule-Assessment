//smart goal: after completing my lab, I want to rewrite the html with proper dividors and find ways to refactor my code include event listener.
//stretch goal: after completing my lab, I want to test of code without npm test and create multiple user instances for it.

document.addEventListener('DOMContentLoaded', () => {
    let diceOptions = ['&#9856', '&#9857', '&#9858', '&#9859', '&#9860', '&#9861']
    let historyCounter = 0
    let recordedHistory = []
    let button1 = document.querySelector('button')
    button1.addEventListener('click', () => {
        let invalid = document.querySelector("#invalid")
        let diceInput = Number(document.querySelector("#dice-input").value)
        let diceDisplay = document.querySelector("#dice-para")
        let displaySum = document.querySelector("#sum-para")
        let diceHistory = document.querySelector("#dice-history")
        if (diceInput > 0) {
            diceDisplay.innerHTML = ""
            let theSum = 0
            invalid.textContent = ""
            for (let i = 1; i <= diceInput; i++) {
                let rollResult = (Math.ceil(6 * Math.random()))
                theSum += rollResult
                diceDisplay.innerHTML += diceOptions[rollResult - 1]
            }
            displaySum.textContent = `Sum = ${theSum}`
            historyCounter = historyCounter + 1
            recordedHistory.push(`${diceDisplay.innerHTML} = ${theSum}`)
            if (recordedHistory.length > 1) {
                let pastHistory = document.createElement("li")
                pastHistory.innerHTML = recordedHistory[historyCounter - 2]
                diceHistory.appendChild(pastHistory)
            }
        }
        else {
            invalid.textContent = "Please enter a valid input"
    
        }
    })
    
        
    
    })
