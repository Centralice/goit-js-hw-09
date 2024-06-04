let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);
populateText();

function handleInput(event) {
  const key = event.target.name;
  formData[key] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateText() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!data) {
    return;
  }

  const { email, message } = form.elements;
  email.value = data.email;
  message.value = data.message;
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();  
  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Please, fill in all fields');
  } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));  //   <--- поменяла тут    
    localStorage.clear();
    form.reset();
  }
}
