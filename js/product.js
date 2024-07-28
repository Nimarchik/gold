let listCart = [
	{
		img: '../img/photo/product1.jpg',
		name: 'Dolce & Gabanna',
		subs: 'Підвіска',
		price: '87 500 ₴',
		id: '1',
	},
	{
		img: '../img/photo/product1.jpg',
		name: 'Dolce & Gabanna',
		subs: 'Підвіска',
		price: '87 500 ₴',
		id: '2',
	},
	{
		img: '../img/photo/product1.jpg',
		name: 'Dolce & Gabanna',
		subs: 'Підвіска',
		price: '87 500 ₴',
		id: '3',
	},
]
let filterLists = document.querySelectorAll('.filters__list')
let cards = document.querySelector('.product__cards')

filterLists.forEach((btn, list) => {
	btn.addEventListener('click', () => {
		btn.classList.toggle('filters__list--show')
	})
})

listCart.map(function (item) {
	cards.innerHTML += `
    <div class="product__cart" id="${item.id}">
								<img
									src="${item.img}"
									alt=""
									class="product__cart-img"
								/>
								<p class="product__cart-text">${item.subs}</p>
								<h2 class="product__cart-title">${item.name}</h2>
								<button class="product__cart-btn">${item.price}</button>
							</div>
						</div>
  `
})
