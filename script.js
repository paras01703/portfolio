
  const menuIcon = document.querySelector('.menu');
  const navMenu = document.querySelector('.content');

  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

