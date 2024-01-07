// main > section.content > .search-section > input
// main > section.content > .search-section > .icon-container.action-icons > span.cancel


const inputField = document.querySelector('main > section.content > .search-section > input');
const cancelIcon = document.querySelector('main > section.content > .search-section > .icon-container.action-icons > span.cancel');

const handleFieldValue = (value) => {
    if (value.length > 0) {
        cancelIcon.classList.remove('hide');
        cancelIcon.classList.add('show');
    } else {
        cancelIcon.classList.remove('show');
        cancelIcon.classList.add('hide');
    }
}

inputField.addEventListener('keyup', (event) => {
    const value = event.target.value;
    handleFieldValue(value);
});

cancelIcon.addEventListener('click', (event) => {
    inputField.value = '';
    handleFieldValue('');
});