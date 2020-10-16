
// target from html
const addBtn = document.querySelector('.addBtn')
const habitInput = document.querySelector('.habit-input')
const habitList = document.querySelector('.habit-list')
const errorEmpty = document.querySelector('.error')
const newWeek = document.querySelector('.btn')

//class eventName {
//    constructor(event) {
//        this.createDiv(event)
//    }
//}

//event listeners
addBtn.addEventListener('click', addHabit)
habitList.addEventListener('click', deleteAction)
newWeek.addEventListener('click', addWeek)




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

        //create li
        const newHabit = document.createElement('li')
        newHabit.innerText = habitInput.value
        newHabit.classList.add('habit-item')
        habitDiv.appendChild(newHabit)

        //check 
 
        const trashHabit = document.createElement('button')
        trashHabit.innerHTML = '<p class="removeBtn">remove</p>'
        trashHabit.classList.add('trash-btn')
        habitDiv.appendChild(trashHabit)
    

        //edit
        const editHabit = document.createElement('btn-edit');
    	  editHabit.classList.add('edit-btn')
        editHabit.innerHTML = '<button class="removeBtn">edit</button>'
        habitDiv.appendChild(editHabit)
       


        //checkboxes adding using inner HTML

        const checkHabit = document.createElement('table')
        checkHabit.innerHTML = '<table><tr><th>item</th><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td><td><input type="checkbox"></td></tr></table>'
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


//function

//list

//element.insertAdjacentHTML(beforeend,text)



function addWeek(x) {
  const section = document.createElement('section');
  section.setAttribute('id', 1);
  document.getElementById('wrapper').appendChild(section); 
  var h3 = document.createElement('h3');
  h3.innerText = document.getElementById('sectionText').value;
  section.appendChild(h3);
  var input = document.createElement('INPUT');
  input.setAttribute('type', 'text')
  section.appendChild(input);
  var btn = document.createElement('button');
  btn.innerText = 'New List Item'
  section.appendChild(btn);
}

/*
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
  btn.innerText = 'New List Item'
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
  }, false);
})

*/