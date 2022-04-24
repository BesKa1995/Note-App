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
  note.addEventListener('click', (e) => e.stopPropagation())

  const deleteBtn = note.querySelector('.delete')
  const editBtn = note.querySelector('.edit')
  const textArea = note.querySelector('textarea')
  const main = note.querySelector('.main')

  textArea.value = text
  main.textContent = text

  editBtn.addEventListener('click', () => {
    textArea.classList.toggle('hidden')
    main.classList.toggle('hidden')
  })


  textArea.addEventListener('input', (e) => {
    const { value } = e.target
    main.innerHTML = value
  })

  document.body.addEventListener('click', (e) => {
    textArea.classList.toggle('hidden')
    main.classList.toggle('hidden')
  })


  deleteBtn.addEventListener('click', () => note.remove())

  document.body.appendChild(note)
}



