let inner = document.querySelector('.inner');

window.addEventListener('scroll', function(){
  console.log(inner);
  let target = inner.getBoundingClientRect;
  console.log(target);
  let relativeTop = target.top;
  console.log(relativeTop)
  const ScrollTop = window.pageYOffset;
  console.log(ScrollTop);

  if(ScrollTop > 0){
    inner.classList.add('isBack');
  
  }else if(ScrollTop === 0) {
    inner.classList.remove('isBack');
  }
  })