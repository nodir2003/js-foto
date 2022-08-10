let wrapper = document.querySelector('.wrapper')
let images = document.querySelectorAll('.img')
let img1 = document.querySelector('.img1')
for (const iterator of images) {
    iterator.addEventListener('click', function(){
        let imgAttribute = this.getAttribute('src')
        document.img1.src = imgAttribute
    })
}