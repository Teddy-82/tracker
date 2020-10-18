
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



//function for changing color of the habits

function colorChange(x) {
 
  
  const button = x.target
  
  if (button.classList[0]=== 'check') {
    condition.textContent = "nice work!"
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
        trashHabit.innerHTML = '<p">-</p>'
        trashHabit.classList.add('trash-btn')
        habitDiv.appendChild(trashHabit)

        //create li
        const newHabit = document.createElement('li')
        newHabit.innerText = habitInput.value
        newHabit.classList.add('habit-item')
        habitDiv.appendChild(newHabit)

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



function incr() { 
  var v1=document.getElementById('p1').value;
  document.getElementById("p1").value= v1 + 10;
  }
//weeks :

var a = document.getElementById('btn');
a.addEventListener('click', function() {
  var section = document.createElement('section');
  section.setAttribute('id', 1);
  document.getElementById('wrapper').appendChild(section); 
  var h3 = document.createElement('h3');
  h3.innerText = document.getElementById('sectionText').value;
  section.appendChild(h3);
  var input = document.createElement('INPUT');
  input.setAttribute('type', 'text')
  section.appendChild(input);
  var btn = document.createElement('button');
  btn.innerText = 'New habit'
  section.appendChild(btn);

  btn.addEventListener('click', function() {
    var div = document.createElement('div');
    div.setAttribute('class', 'listItem');
    var checkbox = document.createElement('INPUT');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checker');
    div.appendChild(checkbox);
    var span = document.createElement('span')
    span.innerText = this.previousElementSibling.value;
    div.appendChild(span);
    input.parentNode.insertBefore(div, input);


    const habitDiv = document.createElement('div')
    habitDiv.setAttribute('class', 'listItem');
    
    const trashHabit = document.createElement('button')
    trashHabit.setAttribute('type', 'button');
    trashHabit.setAttribute('id', 'checker');
    habitDiv.appendChild(trashHabit)

  }, false);
})

