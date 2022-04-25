const addBtn = document.getElementById('add')


addBtn.addEventListener('click', (e) => {

  e.stopPropagation()
  
  addNewNote('Hello Wrodl!')
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
  })
  //switching the view to the main content of the note
  document.body.addEventListener('click', (e) => {
    textArea.classList.add('hidden')
    main.classList.remove('hidden')
  })
  deleteBtn.addEventListener('click', () => note.remove())

  document.body.appendChild(note)
}



