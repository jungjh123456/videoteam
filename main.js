window.addEventListener('scroll', function(){
  let inner = document.querySelector('.inner');
  console.log(inner);
  inner.classList.toggle('.isBack');
  if(window.screenTop === 0){
  inner.classList.remove('.isBack');
  }
  })