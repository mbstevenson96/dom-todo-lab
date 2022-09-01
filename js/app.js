
//* -----------CONSTANTS----------//
const btn = document.getElementById('submit-button')
// console.dir(btn)

const inputElement = document.getElementById('inputArea')
// console.log(inputElement)

const ulElement = document.getElementById('todo-list')
// console.log(ulElement)

const resetBtn = document.getElementById('reset-button')
// console.log(resetBtn);



//* -----------EVENT LISTENERS----------//
btn.addEventListener('click', (event) => {
  const li = document.createElement('li')
  li.textContent = inputElement.value
  // console.log(li)
  if(inputElement.value === '') {}
  else {
    document.querySelector('ul').appendChild(li)
  }
  inputElement.value = ''
})

resetBtn.addEventListener('click', (event) => {
  ulElement.innerHTML = ''
});


// USE BOOTSTRAP IN CSS!!!!!!!!!
// USE UNSPLASH PHOTO IN CSS!!!!!!!!!