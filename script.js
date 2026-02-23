// js/script.js
document.querySelectorAll('.btn--primary').forEach(button => {
  button.addEventListener('click', function() {
    alert('Great choice! You are enrolling in this course.');
  });
});
document.querySelectorAll('.btn--secondary').forEach(button => {
  button.addEventListener('click', function() {
    button.classList.toggle('wishlisted');
  });
});