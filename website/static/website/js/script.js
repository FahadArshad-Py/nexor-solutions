const slider = document.getElementById("servicesSlider");

function slideLeft() {
    slider.scrollBy({
        left: -350,
        behavior: "smooth"
    });
}

function slideRight() {
    slider.scrollBy({
        left: 350,
        behavior: "smooth"
    });
}
tsParticles.load("particles-js", {
    particles: {
        number: {
            value: 200
        },
        color: {
            value: "#ffffff"
        },
        size: {
            value: 3
        },
        links: {
            enable: true,
            distance: 170,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "attract"
            }
        },
        modes: {
            attract: {
                distance: 150,
                duration: 0.6,
                speed: 1
            }
        }
    },

    background: {
        color: "transparent"
    }
});
const isMobile = window.innerWidth <= 768;

tsParticles.load("particles-js", {
    particles: {
        number: {
            value: isMobile ? 40 : 200
        },

        color: {
            value: "#ffffff"
        },

        size: {
            value: isMobile ? 2 : 3
        },

        links: {
            enable: true,
            distance: isMobile ? 120 : 170,
            color: "#ffffff",
            opacity: 0.2,
            width: 1
        },

        move: {
            enable: true,
            speed: isMobile ? 0.2 : 0.5
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: !isMobile,
                mode: "attract"
            }
        }
    }
});
