let 
    url = 'https://aws.random.cat/meow',
    img = document.querySelector('.img'),
    btn = document.querySelector('.btn')
funct()
function funct() {
    fetch(url)
        .then( (response) => {
            return response.json()
        })
        .then( (data) => {
            let file = data.file
            img.src = file
            document.body.style.background = file;
        })
        .catch( (error) => {
            console.log(error)
        })
}

btn.addEventListener('click', () => {
    let complete = img.complete
    if(complete) { funct() }
})