let wrapper = document.querySelector('.wrapper')
let imgs = document.querySelectorAll('.img')
let img1 = document.querySelector('.img1')
for (const iterator of imgs) {
    iterator.addEventListener('click', function(){
        let imgAttribute = this.getAttribute('src')
        img1.setAttribute('src', imgAttribute)
    })
}