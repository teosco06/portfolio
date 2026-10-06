/* Configuration globale du fond étoilé (Space Particles)
   Ce script initialise particles.js sur l'élément avec l'ID 'particles-js'
*/

function initSpaceBackground() {
    if (window.particlesJS) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 300,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": {
                    "value": 0.8,
                    "random": true,
                    "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false }
                },
                "size": {
                    "value": 2.5,
                    "random": true,
                    "anim": { "enable": true, "speed": 2, "size_min": 0.5, "sync": false }
                },
                "line_linked": { "enable": false },
                "move": {
                    "enable": true,
                    "speed": 0.3,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": false },
                    "onclick": { "enable": false },
                    "resize": true
                }
            },
            "retina_detect": true
        });
    } else {
        // Si la bibliothèque n'est pas encore chargée, on réessaie
        setTimeout(initSpaceBackground, 100);
    }
}

// Lancement automatique
initSpaceBackground();
