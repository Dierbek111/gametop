const coin = document.querySelector('#coin')
const scoreEl = document.querySelector('#score')
const buyUpgrade = document.querySelector('#buyUpgrade')
const buyBoost = document.querySelector('#buyBoost')

let score = 1
let clickValue = 103287454
let upgradeCost = 100
// let buyBoost = 50
let boostDuration = 5000

coin.addEventListener('click', () => {
    score += clickValue
    scoreEl.innerText = score
})

buyUpgrade.addEventListener('click', () => {
    if(score >= upgradeCost){
        score -= upgradeCost
        scoreEl.innerText = score
        clickValue++
        upgradeCost = Math.floor(upgradeCost * 1.5)
        buyUpgrade.innerHTML = `buy Improve (${upgradeCost} coins)`
    }
})

buyBoost.addEventListener('click',() =>{
    if(score >= boostDuration) {
        score -= boostCost
        clickValue *= 2
        messasge.innerText = "you buy boost "
    }
    
})