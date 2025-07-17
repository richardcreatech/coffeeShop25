const usersProfilePic = document.getElementById('usersProfilePic')
const usersName = document.getElementById('usersName');

let myDets = JSON.parse(localStorage.getItem('myDets'));

usersProfilePic.src = myDets["img"] 
usersName.innerText = myDets["name"] 

const main_space = document.getElementById('main-space');
const my_beans = [
    {
        id: 0,
        name: "Prod 1",
        img: "./Newbackdrops/We Bare Bears 🐻 🐻_❄ 🐼 _.jpeg"
    },
    {
        id: 1,
        name: "Prod 2",
        img: "./Newbackdrops/We Bare Bears 🐻 🐻_❄ 🐼 _.jpeg"
    },
    {
        id: 2,
        name: "Prod 3",
        img: "./Newbackdrops/We Bare Bears 🐻 🐻_❄ 🐼 _.jpeg"
    },
    {
        id: 3,
        name: "Prod 4",
        img: "./Newbackdrops/We Bare Bears 🐻 🐻_❄ 🐼 _.jpeg"
    },
    {
        id: 4,
        name: "Prod 5",
        img: "./Newbackdrops/We Bare Bears 🐻 🐻_❄ 🐼 _.jpeg"
    },
    {
        id: 5,
        name: "Prod 6",
        img: "./Newbackdrops/We Bare Bears 🐻 🐻_❄ 🐼 _.jpeg"
    },
]


main_space.innerHTML = ``

my_beans.forEach((item) => {
    main_space.innerHTML += `
     <div class="item">

                <div class="item-img">
                <img src="${item.img}" alt="">
                </div>
                <div class="item-desc">
                    <h1 class="item-name">${item.name}</h1>
                    <br>
                    <button class="addMe" id="${item.id}">Add to Cart</button>
                </div>
            </div>
    `;
})

// Adds items to the carts
function manipul(){
const addProds = []; 
const inventory = []; 
const innerFooter = document.getElementById('inner-footer');
// innerFooter.innerHTML = ``;

main_space.addEventListener('click', () => {
    const addMe = document.querySelectorAll('.addMe');

    addMe.forEach((addBtn , int) => {
        addBtn.onclick = () => {
            
            alert(Number(addBtn.id));
            
            if(!inventory.includes(my_beans[int].name)){
                // This adds the product to the cart
                addProds.push({
                id: my_beans[int].id,    
                name: my_beans[int].name,
                img: my_beans[int].img,
                })
            
                // This keeps track of what has already been added

                inventory.push(my_beans[int].name)
                console.log(addProds);
                console.log(inventory);
                
                // This shows the item on the DOM
                innerFooter.innerHTML += `
                 <div class="inv-item">
                <img src="coffee_pics☕/😾☕.jpeg" alt="">
                <span>
                    <h1>Name: ${my_beans[int].name} </h1>
                    <p>Price: $${my_beans[int].id}</p>
                    <button id="${my_beans[int].id}" class="removeMe">Remove me</button>
                </span>
            </div>
                `;



            }


        }
    })
})

let modified_cart = addProds;

innerFooter.addEventListener('click', () => {

    const removeMe = document.querySelectorAll('.removeMe');

    removeMe.forEach(rmvBtn => {
        rmvBtn.onclick = (e) => {
            alert(rmvBtn.id)
            modified_cart = modified_cart.filter(item => item.id != Number(rmvBtn.id))
            console.log(modified_cart);
            innerFooter.innerHTML = ``
            modified_cart.forEach((ind) => {
                innerFooter.innerHTML += `
                     <div class="inv-item">
                    <img src="coffee_pics☕/😾☕.jpeg" alt="">
                    <span>
                        <h1>Name: ${ind.name} </h1>
                        <p>Price: $${ind.id}</p>
                        <button id="${ind.id}" class="removeMe">Remove me</button>
                    </span>
                </div>
                    `;
            })
            manipul();
        }
    })

})
}
manipul();


const showCart = document.getElementById('showCart');
const duckBtn = document.getElementById('duckBtn');
const footer = document.getElementsByTagName('footer')[0];


showCart.onclick = () => {
    footer.classList.toggle('showFooter')
}
duckBtn.onclick = () => {
    footer.classList.toggle('showFooter')
}















