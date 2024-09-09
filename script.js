
const obj1 = {
    name: 'Asil',
    surname: 'Abdujalilov',
    age: 16,
    address: 'Tashkent'
}

const product1 = {
 img: 'https://images.uzum.uz/cik6hbrltlh4bk4nasl0/original.jpg',
 title: 'Сумка для девушек',
 rate: 4.9,
 reviews: 150,
 oldPrice: 120000,
 newPrice: 14000, 
 description: 'ацшгкапуцкаицушгапеку8гпаулкап'
}

const product2 = {
    img: 'https://images.uzum.uz/cik6hbrltlh4bk4nasl0/original.jpg',
    title: 'White NIKE',
    rating: 3.2,
    reviews: 12,
    oldPrice: 20000,
    newPrice: 10000, 
    description: 'ацшгкапуцкаицушгапеку8гпаулкап'
   }

   const product3 = {
    img: 'https://images.uzum.uz/cik6hbrltlh4bk4nasl0/original.jpg',
    title: 'IPHONE 15 PRO MAX',
    rating: 5.0,
    reviews: 1000,
    oldPrice: 12000000,
    newPrice: 17000000, 
    description: 'BLACK'
   }
   product3.stock = 52 + ' товаров'

   delete product3.oldPrice

   product3.rate = 4.8
 product3.newPrice = 2000
 product3.oldPrice = 1000
console.log(product1['title'],product1['newPrice']);
console.log(product2['title'],product2['newPrice']);
console.log(product3['title'],product3['newPrice'], product3['rate'], product3['stock']);




const cardImg = document.querySelector('.card img').src = product1.img
const cardName = document.querySelector('.card h3').innerText = product1.title
const cardRating = document.querySelector('#rating').innerText = product1.rate
const cardReviews = document.querySelector('#reviews').innerText = product1.reviews
const cardOldPrice = document.querySelector('.card s').innerText = product1.oldPrice
const cardNewPrice = document.querySelector('.card b').innerText = product1.newPrice

cardImg.src = product1.img
cardImg.style.width = '200px'
cardName.innerText = product1.title
cardRating.innerText = product1.rate
cardReviews.innerText = product1.reviews
cardOldPrice.innerText = product1.oldPrice