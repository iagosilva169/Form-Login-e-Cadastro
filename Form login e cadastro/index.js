const loginContainer = document.querySelector('.login-container');

loginContainer.addEventListener('mouseover', () => {
  loginContainer.style.filter = 'blur(5px)';
});

loginContainer.addEventListener('mouseout', () => {
  loginContainer.style.filter = 'blur(0)';
});