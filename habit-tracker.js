
const addBtn = document.querySelector('.addBtn')
const habitInput = document.querySelector('.habit-input')
const  habitList = document.querySelector('.habit-list')
const errorEmpty = document.querySelector('.error')

//class eventName {
//    constructor(event) {
//        this.createDiv(event)
//    }
//}

//event listeners
addBtn.addEventListener('click', addHabit)

function addHabit(event){
    //prevent form from submitting
    event.preventDefault()

    //if the field is empty
    if (habitInput.value === '' ) {
        errorEmpty.classList.remove('hidden')
    }else {
        errorEmpty.classList.add('hidden')
        //create a habit div
       
        const habitDiv = document.createElement('div')
        habitDiv.classList.add('habits')

        //create li
        const newHabit = document.createElement('li')
        newHabit.innerText = 'coooool'
        newHabit.classList.add('habit-item')
        habitDiv.appendChild(newHabit)

        //check

        const trashHabit = document.createElement('button')
        trashHabit.innerHTML = '<li><button class="removeBtn">remove</button></li>'
        trashHabit.classList.add('trash-btn')
        habitDiv.appendChild(trashHabit)

        //checkboxes

        const checkHabit = document.createElement('table')
        checkHabit.innerHTML = '<table><tr><th>item</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr></table>'
        checkHabit.classList.add('trash-btn')
        habitDiv.appendChild(checkHabit)
        //append to list
        habitList.appendChild(habitDiv)
        
    }

    
}

//function

//list

//element.insertAdjacentHTML(beforeend,text)