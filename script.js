    const checkBoxes = document.querySelectorAll('.checkbox2');
    const addButton = document.querySelector('.checkbox');
    const input = document.querySelector('.input');
    const list = document.querySelector('.list');
    const itemList = document.querySelectorAll('.list1');


    const pClickHandler = (event) => {
        const clickedP = event.target;
        const parentItem = clickedP.parentElement;
        parentItem.remove();
    };


    itemList.forEach((item) => {
        const pElement = item.querySelector('p');
        pElement.addEventListener('click', pClickHandler);
    });

    const newItem = () => {
        if (input.value.length) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('list1');
            newDiv.innerHTML = `
                <input type="checkbox" class="checkbox2" name="duyme"/> <p>${input.value}</p>
            `;

            const newPElement = newDiv.querySelector('p');
            newPElement.addEventListener('click', pClickHandler);
            const newInputElement = newDiv.querySelector('input');
            newInputElement.addEventListener('click',()=>{
                newInputElement.nextElementSibling.classList.toggle('line')
            })
            list.appendChild(newDiv);

            input.value = '';
        }
    };

    addButton.addEventListener('click', () => {
        newItem();
    });
