const addBtn = document.getElementById('add')
//retriving the notes text 
const notes = JSON.parse(localStorage.getItem('notes'))


// if the variable notes is not empty then created a note element in the DOM for each note text 
if (notes) {
  notes.forEach(note => addNewNote(note))
}
addBtn.addEventListener('click', (e) => {

  e.stopPropagation()

  addNewNote()
})

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')
  note.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fa fa-edit"></i></button>
    <button class="delete"><i class="fa fa-trash-alt"></i></button>
  </div>
  <div class="main"></div>
  <textarea class="hidden"></textarea>
  `

  //helps not to reach the body element
  note.addEventListener('click', (e) => e.stopPropagation())

  const deleteBtn = note.querySelector('.delete')
  const editBtn = note.querySelector('.edit')
  const textArea = note.querySelector('textarea')
  const main = note.querySelector('.main')


  //initialing teaxtArea and main frame of the note
  textArea.value = text
  main.textContent = text
  editBtn.addEventListener('click', () => {
    textArea.style.boxShadow = 'inset 2px 4px 5px rgba(0,0,0,.2)'
    textArea.classList.toggle('hidden')
    main.classList.toggle('hidden')
  })

  //changing main content of the note by the value of the textarea
  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = value
    updateLS()
  })
  //switching the view to the main content of the note
  document.body.addEventListener('click', (e) => {
    textArea.classList.add('hidden')
    main.classList.remove('hidden')

  })
  deleteBtn.addEventListener('click', () => {
    note.remove()
    updateLS()
  })

  document.body.appendChild(note)


}


//each note text is added to local Storage To fetch them when you reload the browser 
function updateLS() {
  const notesText = document.querySelectorAll('textarea')
  const notes = []
  notesText.forEach(note => notes.push(note.value))
  localStorage.setItem('notes', JSON.stringify(notes))
}
