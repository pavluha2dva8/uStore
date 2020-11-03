/*
let cart = {
	'product1': {
        'name': 'blabla',
        'url': '#',
        'price': 1000
	},
	'product2': {
		'name': 'blabla',
        'url': '#',
        'price': 1000
	},
	'product3': {
		'name': 'blabla',
        'url': '#',
        'price': 1000
	},
	'product4': {
		'name': 'blabla',
        'url': '#',
        'price': 1000
	},
	'product5': 0,
	'product6': 0,
	'product7': 0,
	'product8': 0,
	'product9': 0,
	'product10': 0,
	'product11': 0,
	'product12': 0,
	'product13': 0,
	'product14': 0,
	'product15': 0
}

document.onclick = event => {
	if (event.target.classList.contains('hover-item-product__cart')){
		plusFunction(event.target.dataset.id)
	}
	else if (event.target.classList.contains('hover-item-product__cart')){
		minusFunction(event.target.dataset.id)
	}
}

const plusFunction = id => {
	cart[id]['count'] ++
	renderCart()
}

const minusFunction = id => {
	if (card[id]['count'] - 1 == 0) {
		deleteFunction(id)
		return true
	}
	cart[id]['count'] --
	renderCart()
}

const deleteFunction = id => {
	delete cart[id]
	renderCart()
}

const renderCart = () => {
	console.log(cart)
}

renderCart()

