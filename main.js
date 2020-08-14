let inner = document.querySelector('.inner');
let bottombody = document.querySelector('.section');

window.addEventListener('scroll', function(){
  console.log(inner);
  console.log(bottombody);
  const ScrollTop = window.pageYOffset;
  console.log(ScrollTop);
 
  if(ScrollTop > 0){
    inner.classList.add('isBack');
    bottombody.classList.add('setBottom');
  
  }else if(ScrollTop === 0) {
    inner.classList.remove('isBack');
    bottombody.classList.remove('setBottom');
  }
  }) 


  // let off = function getDocHeight() {
  //   let D = document;
  //   return Math.max(
  //     D.body.scrollHeight, D.documentElement.scrollHeight,
  //     D.body.offsetHeight, D.documentElement.offsetHeight,
  //     D.body.clientHeight, D.documentElement.clientHeight
  //   )
  // }
  // getDocHeight();