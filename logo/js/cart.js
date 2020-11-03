let carts = document.querySelectorAll('.hover-item-product__cart')

let products = [
  {
    name: 'BH Fitness F1 G6414V',
    tag: 'Беговая дорожка F1',
    price: 64990,
    inCart: 0,
    img: 'img/products/tren1.jpg'
  },
  {
    name: 'BH Fitness F2 G6515W',
    tag: 'Беговая дорожка F2',
    price: 49990,
    inCart: 0,
    img: 'img/products/tren2.jpg'
  },
  {
    name: 'BH Sport S3 S3214F',
    tag: 'Беговая дорожка S3',
    price: 74990,
    inCart: 0,
    img: 'img/products/tren3.jpg'
  },
  {
    name: 'BH Kids K4 Q0024S',
    tag: 'Беговая дорожка K4',
    price: 32790,
    inCart: 0,
    img: 'img/products/tren4.jpg'
  },
  {
    name: 'BH Sport S5 N1478O',
    tag: 'Беговая дорожка S5',
    price: 88888,
    inCart: 0,
    img: 'img/products/tren5.jpg'
  },
  {
    name: 'Домашний Donic Indoor Roller 800 Green',
    tag: 'Теннисный стол #1',
    price: 64990,
    inCart: 0,
    img: 'img/products/01.webp'
  },
  {
    name: 'BH Fitness F6 K2265R',
    tag: 'Беговая дорожка F6',
    price: 44333,
    inCart: 0,
    img: 'img/products/02.jpg'
  },
  {
    name: 'BH Fitness F7 G6414V',
    tag: 'Беговая дорожка F7',
    price: 51990,
    inCart: 0,
    img: 'img/products/tren1.jpg'
  },
  {
    name: 'BH Sport S8 W3165F',
    tag: 'Беговая дорожка S8',
    price: 64990,
    inCart: 0,
    img: 'img/products/tren3.jpg'
  },
  {
    name: 'BH Kids K9 R9377T',
    tag: 'Беговая дорожка K9',
    price: 43990,
    inCart: 0,
    img: 'img/products/02.jpg'
  },
  {
    name: 'Домашний Donic Indoor Roller 600 Green',
    tag: 'Теннисный стол #2',
    price: 30990,
    inCart: 0,
    img: 'img/products/01.webp'
  },
  {
    name: 'BH Fitness F10 Q3421V',
    tag: 'Беговая дорожка F10',
    price: 54990,
    inCart: 0,
    img: 'img/products/tren4.jpg'
  },
  {
    name: 'BH Fitness F11 T8899G',
    tag: 'Беговая дорожка F11',
    price: 44990,
    inCart: 0,
    img: 'img/products/tren5.jpg'
  },
  {
    name: 'BH Fitness F12 L9214J',
    tag: 'Беговая дорожка F12',
    price: 54990,
    inCart: 0,
    img: 'img/products/tren2.png'
  },
  {
    name: 'BH Fitness F13 U8821X',
    tag: 'Беговая дорожка F13',
    price: 74990,
    inCart: 0,
    img: 'img/products/tren1.jpg'
  }
]

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    cartNumbers(products[i])
    totalCost(products[i])
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers')

  if(productNumbers) {
    document.querySelector('.info-header__cart span').textContent = productNumbers
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers')
  
  productNumbers = parseInt(productNumbers)

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.info-header__cart span').textContent = productNumbers + 1
  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.info-header__cart span').textContent = 1
  }

  setItems(product)
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
  
  if(cartItems != null) {

    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1
  } else {
    product.inCart = 1
    cartItems = {
      [product.tag]: product
    }
  } 
  localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost')
  
  console.log('my cartCost is', cartCost)

  if(cartCost != null) {
    cartCost = parseInt(cartCost)
    localStorage.setItem('totalCost', cartCost + product.price)
  } else {
    localStorage.setItem('totalCost', product.price)
  }
}

function displayCart() {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
  let productContainer = document.querySelector('.order-checkout__items')
  let cartCost = localStorage.getItem('totalCost')

  if(cartItems && productContainer) {
    productContainer.innerHTML = ''
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="order-checkout__item item-order">
      <div class="item-order__content">
        <a href="" class="item-order__image">
          <picture><source srcset="${item.img}" type="image/webp"><img src="${item.img}" alt=""></picture>
        </a>
        <div class="item-order__body">
          <a href="" class="item-order__title"><span>${item.name}</span> ${item.tag} </a>
          <div class="item-order__price rub">${item.price}</div>
        </div>
      </div>
      <div class="item-order__quantity">
        <div class="quantity">
          <div class="quantity__button quantity__button_minus"></div>
          <div class="quantity__input">
            <input autocomplete="off" type="text" name="form[]" value="${item.inCart}">
          </div>
          <div class="quantity__button quantity__button_plus"></div>
        </div>
      </div>
      <div class="item-order__total">
        <div class="item-order__label">Всего:</div>
        <div class="item-order__price rub">${item.inCart * item.price}</div>
      </div>
      <a href="" class="item-order__delete"></a>
    </div>
      `
    })

    productContainer.innerHTML += `
      <div class="order-checkout__footer">
        <div class="order-checkout__total">Итого: <span class="rub">${cartCost}</span></div>
        <button type="submit" class="order-checkout__btn">Оформить заказ</button>
      </div>
    `
  }

}

onLoadCartNumbers()
displayCart()
