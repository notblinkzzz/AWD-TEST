document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = 'green';
            item.style.transition = 'background-color 0.3s ease';
        });

        item.addEventListener('mouseout', function() {
            item.style.backgroundColor = '';
        });

        item.addEventListener('click', function() {
            alert(`You clicked on ${item.textContent}`);
        });
    });
});