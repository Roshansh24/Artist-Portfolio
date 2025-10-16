
const alertNode = document.querySelector('.alert');
if (alertNode) {
    const closeBtn = alertNode.querySelector('.btn-close');
    closeBtn.addEventListener('click', () => alertNode.style.display = 'none');
}
