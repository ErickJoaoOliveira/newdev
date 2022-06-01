const buttonAddMessage = document.getElementById('add-button')
let countRow = 0

let editId = ''
let editCheck = false

const onClickEdit = lineEdit => {
  // console.log(
  // lineEdit.childNodes.forEach((valor, index) => {
  //   console.log(valor)
  //  console.log(index)
  // })
  // )

  //Desestruturação de arrays
  const [from, to, message] = lineEdit.childNodes
  console.log(from.innerHTML)
  console.log(to.innerHTML)
  console.log(message.innerHTML)

  document.getElementById('from').value = from.innerHTML
  document.getElementById('to').value = to.innerHTML
  document.getElementById('message').innerHTML = message.innerHTML
  const tbody = document.getElementById('table-body')

  editId = lineEdit.id
  editCheck = true

  const onClickresult = lineEdit => {
    lineEdit.remove()
  }
}

function addMessage(event) {
  event.preventDefault()
  const inputFrom = document.getElementById('from')
  const inputTo = document.getElementById('to')
  const texArea = document.getElementById('message')

  if (!inputFrom.value.length) {
    alert('O DE: deve ser informado')
    return
  }

  if (!inputTo.value.length) {
    alert('O PARA: deve ser informado')
    return
  }

  if (!texArea.value.length) {
    alert('O TEXTO: deve ser informado')
    return
  }
  const message = {
    from: inputFrom.value,
    to: inputTo.value,
    message: texArea.value
  }
  console.log('--> ', message)

  const sectionMessages = document.getElementById('section-messages')

  //Criamos uma lista não ordenada

  //Buscamos uma listanão ordenadadentro da seção, para validar
  //Se existe ou não, se não existir, criamos uma.
  let ul = sectionMessages.querySelector('ul')

  if (!ul) {
    ul = document.createElement('ul')

    //adiciona dentro da seção
    sectionMessages.appendChild(ul)
  }

  const li = document.createElement('li')
  li.innerHTML = `De: ${message.from} Para: ${message.to} Mensagem: ${message.message}`

  ul.appendChild(li)

  // Criando um elemento tr para ir para a proxima linha
  const tr = document.createElement('tr')
  // Selecionando o elemento tbody que ficara no corpo da tabela
  const tbody = document.querySelector('tbody')

  //criando variáveis das cedulas
  const tdFrom = document.createElement('td')
  const tdTo = document.createElement('td')
  const tdMessage = document.createElement('td')

  const tdButtons = document.createElement('td')

  const iconEdit = document.createElement('i')
  iconEdit.setAttribute('class', 'fa solid fa-edit icon-table')
  iconEdit.setAttribute('style', 'cursor: pointer')
  iconEdit.setAttribute('title', 'Editar Mensagem')
  tdButtons.appendChild(iconEdit)

  const iconRemove = document.createElement('i')
  iconRemove.setAttribute('class', 'fa-solid fa-trash icon-table')
  iconRemove.setAttribute('style', 'cursor: pointer')
  iconRemove.setAttribute('title', 'Remover mensagem')
  tdButtons.appendChild(iconRemove)

  const iconArrouwDown = document.createElement('i')
  iconArrouwDown.setAttribute('class', 'fa-solid fa-arrow-down')
  iconArrouwDown.setAttribute('title', 'Descer posição')
  iconArrouwDown.setAttribute('style', 'cursor: pointer')
  tdButtons.appendChild(iconArrouwDown)

  const iconArrouwUp = document.createElement('i')
  iconArrouwUp.setAttribute('class', 'fa-solid fa-arrow-up')
  iconArrouwUp.setAttribute('style', 'cursor: pointer')
  iconArrouwUp.setAttribute('title', 'Subir posição')
  tdButtons.appendChild(iconArrouwUp)
  //--------------------------------------------------------------//

  /* if (iconRemove) {
    alert('tem certezaque deseja excluir?')
  */

  //--------------------------------------------------------------//

  //--------------------------------------------------

  if (editCheck) {
    const trEdit = document.getElementById(editId)

    trEdit.children[0].innerHTML = message.from
    trEdit.children[1].innerHTML = message.to
    trEdit.children[2].innerHTML = message.message
  } else {
    //atribuindo um valor para as variáveis
    tdFrom.innerHTML = `${message.from}`
    tdTo.innerHTML = `${message.to}`
    tdMessage.innerHTML = `${message.message}`

    tr.appendChild(tdFrom)
    tr.appendChild(tdTo)
    tr.appendChild(tdMessage)
    tr.appendChild(tdButtons)

    tr.setAttribute('id', `line${countRow}`)
    countRow += 1

    tbody.appendChild(tr)

    iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentNode.id});`)
    iconRemove.setAttribute(
      'onclick',
      `onClickRemove(${tdButtons.parentNode.id});`
    )
  }

  //--------------------------------------------------

  document.getElementById('form-messages').reset()
}
buttonAddMessage.addEventListener('click', addMessage)
