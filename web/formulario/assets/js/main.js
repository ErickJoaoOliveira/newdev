const modal = document.getElementById('myModal')
let userInfo = []

window.onload = () => {
  let userKey = localStorage.getItem('userInfo')
  userInfo = userKey ? JSON.parse(userInfo) : []

  if (localStorage.getItem('userInfo')) {
    document.getElementById('anchor-txt').style.display = "flex"
  }
}

document.getElementById('btn').addEventListener('click', event => {
  event.preventDefault()

  let userkey = localStorage.getItem('userInfo')
  userInfo = userkey ? JSON.parse(userkey) : []

  userInfo.push({
    name: document.getElementById('firstname').value,
    lastname: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    number: document.getElementById('number').value,
    city: document.getElementById('city').value,
    complement: document.getElementById('complement').value
  })

  localStorage.setItem('userInfo', JSON.stringify(userInfo))

  document.querySelector('form').reset()

  const userItenObj = JSON.parse(localStorage.getItem('userInfo'))

  addTables(userItenObj)
  document.getElementById('anchor-txt').style.display = 'flex'
})

document.getElementById('anchor-txt').onclick = () => {
  modal.style.display = 'block'
  const userItenObj = JSON.parse(localStorage.getItem('userInfo'))
  addTables(userItenObj)
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

document.getElementById('iconRemove').onclick = function () {
  modal.style.display = 'none'
}

function addTables(storage) {
  const table = document.createElement('table')
  let tbody = document.querySelector('tbody')
  if (tbody) {
    tbody.remove()
  }
  tbody = document.createElement('tbody')
  table.appendChild(tbody)
  storage.forEach(item => {
    const tr = document.createElement('tr')
    const tdFirstName = document.createElement('td')
    const tdLastname = document.createElement('td')
    const tdCity = document.createElement('td')
    const tdComplement = document.createElement('td')
    const tdNumber = document.createElement('td')
    const tdEmail = document.createElement('td')

    tdEmail.innerHTML = `${item.email}`
    tdCity.innerHTML = `${item.city}`
    tdFirstName.innerHTML = `${item.firstName}`
    tdLastname.innerHTML = `${item.lastName}`
    tdComplement.innerHTML = `${item.complement}`
    tdNumber.innerHTML = `${item.number}`

    tr.appendChild(tdFirstName)
    tr.appendChild(tdLastname)
    tr.appendChild(tdComplement)
    tr.appendChild(tdNumber)
    tr.appendChild(tdEmail)
    tr.appendChild(tdCity)
    tbody.appendChild(tr)
  })
}
