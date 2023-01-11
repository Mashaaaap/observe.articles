const options = {
    threshold: 0.5
}

let arrNav = document.querySelectorAll('a')

const observer = new IntersectionObserver((entires, observer) => {
    entires.forEach(entry => {
       if(entry.isIntersecting){
        console.log(entry.target.id)
        if(entry.target.id == 0 ){
            arrNav.forEach (navItem => {
                if (navItem.id != 0){
                    navItem.style.backgroundColor = 'rgb(255, 111, 111)'
                }
            })
            arrNav[0].style.backgroundColor = 'blue'
         }
        //else {
        //     arrNav[0].style.backgroundColor = 'rgb(255, 111, 111)'
        // }
        if(entry.target.id == 1 ){
            arrNav.forEach (navItem => {
                if (navItem.id != 1){
                    navItem.style.backgroundColor = 'rgb(255, 111, 111)'
                }
            })
            arrNav[1].style.backgroundColor = 'blue'
        }
        if(entry.target.id == 2 ){
            arrNav.forEach (navItem => {
                if (navItem.id != 2){
                    navItem.style.backgroundColor = 'rgb(255, 111, 111)'
                }
            })
            arrNav[2].style.backgroundColor = 'blue'
        }
       } else {
       }
    })
}, options)

let arrArticle = document.querySelectorAll('article')
arrArticle.forEach(block => {
    observer.observe(block)
})