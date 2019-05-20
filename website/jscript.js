
// background zoom animation
  let backlayer = document.querySelectorAll('img')[1];

  window.addEventListener('scroll', () => {
    backlayer.style.transform = `scale(${1 + window.scrollY * 0.00100})`
    pics.changeAxis()
    console.log(pics.menuPics[1].style.transform)
  })

// menu animations

let pics = {
  menuPics: document.querySelectorAll('.imgContainer'),
  yAxis: window.scrollY / 20,
  changeAxis: function(){
    this.menuPics.forEach((c, i) => {
      if(window.scrollY > window.innerHeight / 3 && i % 2 === 0){
        if(window.scrollY / 9 <= 50.0){
          c.style.animation = 'yAxis'
        }
      } else if(window.scrollY > window.innerHeight / 3 && i % 2 !== 0){
        if(Math.abs(window.scrollY / 10 - 100) > 50){
          c.style.transform = `translateY(${Math.abs(window.scrollY / 10 - 100)}%)`
        }
      }
    })
  }
}
