const menuButton = document.getElementById('nav-menu-btn');
const menuCloseButton = document.getElementById('nav-menu-close-btn');

// Add event listener to open the mobile menu
menuButton.addEventListener('click', (e) => {
  const menu = document.getElementById('mobile-menu');
  const menuDrawer = document.getElementById('mobile-menu-drawer');

  document.body.style.overflow = 'hidden';
  menu.ariaHidden = false;

  // Delay adding this class so the animation will work
  setTimeout(() => {
    menuDrawer.classList.toggle('mobile-drawer-open');
  }, 50);
});

// Add event listener to close the mobile menu
menuCloseButton.addEventListener('click', (e) => {
  const menu = document.getElementById('mobile-menu');
  const menuDrawer = document.getElementById('mobile-menu-drawer');
  menuDrawer.classList.toggle('mobile-drawer-open');

  setTimeout(() => {
    menu.ariaHidden = true;
    document.body.style.overflow = 'visible';
  }, 300);
});
