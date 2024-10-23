// document.addEventListener('DOMContentLoaded',function(){
//     const card=document.querySelector('.card-hover');
//     const buttons=document.querySelector('.button2');

//     card.addEventListener('mouseover',function(){
//         buttons.style.display='block';
//     })

//     card.addEventListener('mouseout',function(){
//         button.style.display='none';
//     })
// })
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-hover');

    cards.forEach(card => {
        const button = card.querySelector('.button2');

        card.addEventListener('mouseover', function() {
            button.style.display = 'block'; // Show the button on hover
        });

        card.addEventListener('mouseout', function() {
            button.style.display = 'none'; // Hide the button when not hovered
        });
    });
});

const scrollContainer = document.querySelector('.scroll-container');
const scrollContent = document.querySelector('.scroll-content');
let scrollItems = document.querySelectorAll('.scroll-item');

// Clone the scroll items to create an infinite loop effect
scrollItems.forEach(item => {
    const clone = item.cloneNode(true);
    scrollContent.appendChild(clone);
});

// Add the dragging functionality
let isDragging = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 to scroll faster
    scrollContainer.scrollLeft = scrollLeft - walk;

    // Check if the user has scrolled past the original content
    if (scrollContainer.scrollLeft >= scrollContent.scrollWidth / 2) {
        scrollContainer.scrollLeft -= scrollContent.scrollWidth / 2; // Reset scroll to the start
    } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft += scrollContent.scrollWidth / 2; // Loop back to the end
    }
});
