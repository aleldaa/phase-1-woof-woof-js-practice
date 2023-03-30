fetch('http://localhost:3000/pups')
    .then(res=>res.json())
    .then(data => {
        data.forEach((puppers) => {
            goodDogs(puppers)
        })
    })

const goodDogs = (puppers) => {
    const dogBar = document.querySelector('#dog-bar')
    const pupName = document.createElement('span')
    
    pupName.addEventListener('click', ()=>{
        dogInfo(puppers)
    })
    pupName.textContent = puppers.name
    dogBar.append(pupName)
}

const dogInfo = (puppers) => {
    const info = document.querySelector('#dog-info')
    const image = document.createElement('img')
    const name = document.createElement('h2')
    const button = document.createElement('button')

    image.src = puppers.image
    name.textContent = puppers.name

    if(puppers.isGoodDog === true){
        button.textContent = "Good Dog"
    }else{
        button.textContent = 'Bad Dog'
    }

    while(info.firstChild) {
        info.removeChild(info.lastChild)
    }

    info.append(image, name, button)
}
