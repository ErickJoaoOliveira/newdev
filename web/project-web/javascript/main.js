const buttonSendMessage = document.getElementsByName('buttonSendMessage')

const message = []

function addMessage(event) {
  event.preventDefault() // desabilita o comportamento padrão do elemento
  const inputNameValue = document.getElementsByName('name').values
  const inputEmailValue = document.getElementsByName('email').values
  const inputMessagesValue = document.getElementsByName('messages').values
  
  const message = {
    name: inputNameValue,
    email: inputEmailValue,
    messages: inputMessagesValue
  }
  
  console.log(message);
  message.push('imprimir Array ',message);

  document.getElementById('form-container').reset();
}

buttonSendMessage.addEventListener('click ', addMessage);

if (message.length < 3  ){
  message.push(message);
} else{
  alert('usando o site')
}
