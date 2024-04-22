const displayNavbar = () => {
  let show =  document.querySelectorAll('.navbar');
  show.forEach(element => {
    element.classList.toggle('show')
  });
}
