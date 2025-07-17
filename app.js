const register = document.getElementById('register');
const footer = document.querySelector('.footer');


// Shows the sign up popup
register.onclick = () => {
    footer.classList.toggle('show-footer')
}


// Changes the Picture
const arr_of_pics = [
    {
        id: 0,
        img: "./Newbackdrops/d1.jpeg",
    },
    {
        id: 1,
        img: "./Newbackdrops/d2.jpeg",
    },
    {
        id: 2,
        img: "./Newbackdrops/WALLPAPER.jpg",
    },
]

const formBar2Space = document.getElementById('formBar2Space');

formBar2Space.innerHTML = ``;

arr_of_pics.forEach((pic) => {
    formBar2Space.innerHTML += `
    <img id="${pic.id}" class="newPics" src="${pic.img}" alt="">
    `
})


const primaryImg = document.getElementById('primaryImg');
primaryImg.src = "coffee_pics☕/Bean_bag.jpeg";

formBar2Space.addEventListener('click', () => {
    const newPics = document.querySelectorAll('.newPics');
    newPics.forEach(pic => {
        pic.onclick = () => {
            primaryImg.src = pic.src
        }
    })
})



// Handles the submitBtn
const nameField = document.getElementById('nameField');
const submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = (e) => {
    if (nameField.value == '') {
        e.preventDefault()
    }

    else {
        localStorage.setItem('myDets', JSON.stringify({name: nameField.value,img: primaryImg.src}))
        alert(`Hi! ${JSON.parse(localStorage.getItem('myDets'))["name"]}`);
    }
    nameField.value = ''
}