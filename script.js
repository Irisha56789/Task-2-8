// 1. Поиск элементов и изменение содержимого
document.querySelector('#header').innerText = 'Измененный заголовок';

const listItems = document.querySelectorAll('#list li');
listItems.forEach((item, index) => {
    item.innerText += ` (Элемент ${index + 1})`;
});

// 2. Редактирование атрибутов
const image = document.querySelector('#image');
image.setAttribute('src', 'https://via.placeholder.com/300'); // Новый URL

const link = document.querySelector('#link');
link.setAttribute('href', 'https://new-url.com');
link.innerHTML = 'Новая ссылка';

// 3. Манипуляции с элементами
const list = document.querySelector('#list');

document.getElementById('addItemBtn').onclick = function() {
    const newItem = document.createElement('li');
    newItem.innerText = 'Новый элемент списка';
    list.appendChild(newItem);
};

document.getElementById('removeItemBtn').onclick = function() {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
};

// 4. Манипуляции со стилями CSS
const paragraph = document.querySelector('#text');

document.getElementById('changeColorBtn').onclick = function() {
    paragraph.style.color = paragraph.style.color === 'blue' ? 'black' : 'blue';
};

document.getElementById('toggleParagraphBtn').onclick = function() {
    paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
};
