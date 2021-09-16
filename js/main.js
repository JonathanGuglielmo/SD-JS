const btnSwitch = document.querySelector ('#switch');

btnSwitch.addEventListener('click' , () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});

// Animaciones 

window.sr = ScrollReveal();
    sr.reveal ('.navbar', {
        duration: 3000,
        origin: 'bottom',
        distance: '-300px'
    });

window.sr = ScrollReveal();
    sr.reveal ('.dg', {
        duration: 3000,
        origin: 'right',
        distance: '-300px'
    });

window.sr = ScrollReveal();
    sr.reveal ('.dm', {
        duration: 3000,
        origin: 'right',
        distance: '-300px'
    });

window.sr = ScrollReveal();
    sr.reveal ('.dw', {
        duration: 3000,
        origin: 'left',
        distance: '-300px',
    });

window.sr = ScrollReveal();
    sr.reveal ('.cm', {
        duration: 3000,
        origin: 'left',
        distance: '-300px',
    });

window.sr = ScrollReveal();
    sr.reveal ('.disenog', {
        delay: 300,
    });

