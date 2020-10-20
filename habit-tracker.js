// target from html
const addBtn = document.querySelector('.addBtn')
const habitInput = document.querySelector('.habit-input')
const habitList = document.querySelector('.habit-list')
const errorEmpty = document.querySelector('.error')
const newWeek = document.querySelector('.btn')
const clearAll = document.querySelector('.clear-all')
const condition = document.querySelector("#condition")

//class eventName {
//    constructor(event) {
//        this.createDiv(event)
//    }
//}
const changeBtn = document.querySelector('.items')

//event listeners
addBtn.addEventListener('click', addHabit)
habitList.addEventListener('click', deleteAction)
changeBtn.addEventListener('click', colorChange)
clearAll.addEventListener('click', removeAll)

document.addEventListener('keypress', function(enter) {
  if (enter.keyCode === 13 || enter.which === 13) {
    addHabit(event)
  };
});

//function for changing color of the habits

function colorChange(x) {
   
  const button = x.target
  
  if (button.classList[0]=== 'check') {
    //MSG///*condition.textContent = "nice work!"*///TEMPORARY HIDING//
    const color = button
    color.classList.toggle('c')

  } else {
    const color = button
    color.classList.remove('c')
  }
}

/*
habitInput.addEventListener("keyup", addHabit) 
  if (event.keyCode === 13) {
   event.preventDefault();
   alert('ehue')
  }
  
*/

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

        //remove btn
        const trashHabit = document.createElement('button')
        trashHabit.innerHTML = '<p class="removeBtn">-</p>'
        trashHabit.classList.add('trash-btn')
        habitDiv.appendChild(trashHabit)

        //create li
        const newHabit = document.createElement('li')
        newHabit.innerText = habitInput.value
        newHabit.classList.add('habit-item')
        habitDiv.appendChild(newHabit)

        //ADD HABIT TO LOCAL STORAGE
        saveLocalHabits(habitInput.value);
      
        //check 

        //edit
        //const editHabit = document.createElement('button');
    	  //editHabit.classList.add('edit-btn')
        //editHabit.innerHTML = '<p class="editBtn">edit</p>'
        //habitDiv.appendChild(editHabit)

        //checkboxes adding using inner HTML

        const checkHabit = document.createElement('row')
        checkHabit.innerHTML = 
        '<div class= "selected"><button class="check"></button><button class="check"></button><button class="check"></button><button class="check"></button><button class="check"></button><button class="check"></button><button class="check"></button></div>'

        checkHabit.classList.add('table-check')
        
        habitDiv.appendChild(checkHabit)

        //append to list

        habitList.appendChild(habitDiv)     
    }  
    
    //to clear the input after adding
    habitInput.value= ''
    //MSG///*condition.textContent = "there u go!"*///TEMPORARY HIDING//
}

//remove btn
function deleteAction(e) {
  const item = e.target
  if (item.classList[0]=== 'trash-btn'){
      const habit = item.parentElement
 
      habit.remove()
  }
}

//remove all btn
function removeAll() {
  alert ('remove')
}

//set count

//counter
let counter = document.querySelector('.counter');
const addCount = document.querySelector('#addCountBtn');
const lowerCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);

function incrementCounter (){
    count++;
    counter.innerHTML =  count;   
}

function incrementCounter (){
    count++;
    counter.innerHTML =  count;
    if(counter.innerHTML>'1'){
        counter.style.color = 'white'
    }
    
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration: 1000, fill:'forwards'})
}
;

function decrementCounter (){
    count--;
    counter.innerHTML =  count;
    if(counter.innerHTML<'1'){
        count++
    }
  
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration: 1000, fill:'forwards'})
}

function saveLocalHabits(habit) {
    //CHECK IF I ALREADY HAVE THINGS IN THERE
    let habits;
    if (localStorage.getItem('habits') === null) {
        habits = [];
    } else {
        habits = JSON.parse(localStorage.getItem('habits'));
    }

    habits.push(habit);
    localStorage.setItem('habits', JSON.stringify(habits));
}
