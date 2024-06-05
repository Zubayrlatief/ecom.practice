let main = document.querySelector('main')


function CreateItem(id,name,category,image,description,quantity,price) {
  this.id=id
  this.name = name
  this.category = category
  this.image = image
  this.description = description
  this.quantity = quantity
  this.price = price
}

let item1 = new CreateItem(1,'G82 M4 matte black','cars','https://i.pinimg.com/564x/27/c5/26/27c526127b95731d57d48a82fa243608.jpg','Excluvive german enginering','1',1750000)

let item2 = new CreateItem(2,'C63 AMG black','cars','https://i.pinimg.com/564x/ca/d9/8b/cad98bd77dd9dd7c890b3967ae2f0912.jpg','Braud german guzeller','1',1300000)

let item3 = new CreateItem(3,'Audi rs6 avant','cars','https://i.pinimg.com/736x/1c/fb/10/1cfb106ec2c828a4452f93ba499d1029.jpg','odins choice','1',1600000)

let item4 = new CreateItem(4,'Porsche 911 gt3rs','supercars','https://i.pinimg.com/564x/ba/d8/fc/bad8fc2074f2925a5cb0208f49dd7673.jpg','the touge','1',5250000)

let item5 = new CreateItem(5,'ferrari 812 superfast','supercars','https://i.pinimg.com/564x/51/ab/5d/51ab5d83735ade957e2ca3a1c786f0e3.jpg','Horse anticts','1',7000000)

let items =[item1,item2,item3,item4,item5]

localStorage.setItem('items',JSON.stringify(items))
let purchased = []
items.forEach(item =>{
    main.innerHTML +=`
                       <div>
                       <img src="${item.image}">
                       <p>R${item.price}</p>
                       <button class="purchase" value='${item.id}>Purchase</button>
                     </div>`
})

let purchasedButtons = document.querySelectorAll('.purchse')

function addToCart(id) {
  let item = items.filter(Object => object.id === +id)
  purchasedItems.push(item)
  localStorage.setItem
}
purchasedButtons.forEach(button=>{
    button.addEventListener('click',(event)=>{
        addToCart(evenr.target.value)
    })
})






