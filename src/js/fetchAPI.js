const addActive = () => {
    const btn = document.querySelector('.api-btn')
    const fetch_box = document.querySelector('.fetch-box')
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        getUsers()
        if (btn.classList.contains('active')) {
            //array.style = 'display: flex; justify-content: center; flex-wrap: wrap'
        }
    })
};

const getUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => {
            json.forEach((el) => {
                const fetch_box = document.querySelector('.fetch-box')
                const array = document.createElement('div')
                const box = document.createElement('div')
                const name = document.createElement('h3')
                const email = document.createElement('div')
                const city = document.createElement('div')
                const company = document.createElement('div')
                const photo = document.createElement('img')
                const imgBox = document.createElement('div')
                array.setAttribute('class', 'main-box')
                box.setAttribute('class', 'box')
                name.setAttribute('class', `name`)
                photo.setAttribute('class', 'img')
                photo.setAttribute('src', 'https://www.altermattlab.ch/wp-content/uploads/2020/02/Screen-Shot-2020-02-06-at-19.37.30-500x500.png')
                name.textContent = el.name
                email.textContent = `email: ${el.email}`
                city.textContent = `city: ${el.address.city}`
                company.textContent = `company: ${el.company.name}`
                imgBox.appendChild(photo)
                box.appendChild(imgBox)
                box.appendChild(name)
                box.appendChild(email)
                box.appendChild(city)
                box.appendChild(company)
                array.appendChild(box)
                fetch_box.appendChild(array)
                console.log(json)
            })
        })
    
}