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