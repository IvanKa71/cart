let cart = {
    'sdvds23' : {
        "name": "blabla",
        "count": 3,
    },
    'egweb33' : {
        "name": "blabla",
        "count": 3,
    }
};


document.onclick = event => {
    console.log(event.target.classList);
    if(event.target.classList.contains('plus')) {
        plusFunction(event.target.dataset.id);
    }
    if(event.target.classList.contains('minus')) {
        minusFunction(event.target.dataset.id);
    }
}

// Увеличение количества товара
const plusFunction = id => {
    cart[id]['count']++;
    renderCart();
}


// Уменьшение количества товара
const minusFunction = id => {
    if(cart[id]['count']-1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]['count']--;
    renderCart();
}


// Удаление товара
const deleteFunction = id => {
    delete cart[id];
    renderCart();
}


const renderCart = () => {
console.log(cart);
}
renderCart();