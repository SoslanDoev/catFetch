let 
    url = 'https://aws.random.cat/meow',
    img = document.querySelector('.img'),
    boxPreloader = document.querySelector('.box__preloader'),
    preloaderStyle = "box__preloader--active"
funct()
function funct() {
    let preloader = (boxPreloader.classList.contains(preloaderStyle)) ? 
        boxPreloader.classList.remove(preloaderStyle) :
        boxPreloader.classList.add(preloaderStyle)
    fetch(url)
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
            let file = data.file
            img.src = file
            img.onload = () => { boxPreloader.classList.remove(preloaderStyle) }
            img.onerror = () => { boxPreloader.classList.add(preloaderStyle) }
        })
        .catch( (error) => {
            console.log(error)
        })
}

function buttonClick() {
    let complete = img.complete
    if(complete) { funct() }
}

var mas = [
    '😸', '😺', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '🐱'
]

document.addEventListener('keydown', (event) => {
    if (event.code == 'Keyz' || event.code == 'KeyZ') {
        let
            screenWidth = window.screen.width 
            screenHeight = window.screen.height
            randomX = Math.floor(Math.random() * screenWidth);
            randomY = Math.floor(Math.random() * screenHeight);
            randomSmile = Math.floor(Math.random() * mas.length);
            newDiv = document.createElement('div')
        newDiv.innerHTML = mas[randomSmile] 
        newDiv.classList.add('newDivAnimation')
        newDiv.style.position = `absolute`
        newDiv.style.left = `${randomX}px`
        newDiv.style.top = `${randomY}px`
        newDiv.style.zIndex = 5
        document.body.appendChild(newDiv)
    }
});