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
