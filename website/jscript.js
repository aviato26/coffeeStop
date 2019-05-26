
// background zoom animation
  let backlayer = document.querySelectorAll('img')[1];

  window.addEventListener('scroll', () => {
    backlayer.style.transform = `scale(${1 + window.scrollY * 0.00100})`
    pics.changeAxis()
  })

// menu animations

let pics = {
  menuPics: document.querySelectorAll('.imgContainer'),
  yAxis: window.scrollY / 20,
  changeAxis: function(){
    this.menuPics.forEach((c, i) => {
      if(window.scrollY > window.innerHeight / 3 && i % 2 === 0){
        c.className = 'imgContainer ascendAnimation'
      } else if(window.scrollY > window.innerHeight / 3 && i % 2 !== 0){
        c.className = 'imgContainer descendAnimation'
      } else {
        if(i % 2 !== 0){
          c.className = 'imgContainer evenImgContainer'
        } else if(c.className === 'imgContainer ascendAnimation'){
          c.className = 'imgContainer backToStart'
        }
      }
    })
  },
  clickEvents: function(){
    let notActive;

    this.menuPics.forEach((c, i) => {
      c.addEventListener('click', (e) => {
        this.menuPics.forEach((c, i) => {
          if(c.className.indexOf('active')){
            notActive = c.className.replace(' active', '')
            c.className = notActive
          }
        })
        c.className += ' active'
      })
    })
  }
}

pics.clickEvents()
