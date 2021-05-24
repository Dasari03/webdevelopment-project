const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updadteBigCup()

smallCups.forEach((cup, idx)=> {
    cup.addEventListener('click', ()=> highlighCups(idx)) 


})



function highlighCups(idx) {

    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    } 
    

    smallCups.forEach((item, idxx) => {
        if(idxx <= idx) {
            item.classList.add('full')
        } else {
            item.classList.remove('full')
        }
    })

    updadteBigCup()
    
}

function updadteBigCup(){
    const fullCups = document.querySelectorAll('.cup.cup-small.full').length

    const totalCups = smallCups.length

    if(fullCups===0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%` 
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2-(250 * fullCups / 1000)}L`
    }
    
}

