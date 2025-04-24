// Select the container and custom cursor
const container = document.getElementById('container');
const cursor = document.getElementById('cursor');

// Get the container's dimensions
var wid = parseFloat(getComputedStyle(container).width);
var hei = parseFloat(getComputedStyle(container).height);

// Determine the number of stars based on the container size
var size = (wid * hei) / 6500;

// Function to generate a random value between min and max
function randomm(min, max) {
    return min + Math.random() * (max - min);
}

// Generate and animate stars
for (let i = 0; i < size; i++) {
    let star = document.createElement('div');
    
    let o_size = randomm(0.1, 4); // Star size
    let o_co = `rgba(255,255,255,${randomm(0.02, 0.8)})`; // Star color with random opacity
    
    // Set star styles
    star.style.position = 'absolute';
    star.style.top = randomm(0, 100) + "%";
    star.style.left = randomm(0, 100) + "%";
    star.style.width = o_size + 'px';
    star.style.height = o_size + 'px';
    star.style.borderRadius = '50%';
    star.style.backgroundColor = o_co;
    star.classList.add('a_star');
    star.style.boxShadow = `0 0 ${8 + o_size}px ` + o_co;
    
    // Add animation to the star
    star.animate(
        [
            { opacity: 0.3 },
            { opacity: 1 }
        ],
        {
            duration: randomm(900, 3000),
            easing: 'linear',
            iterations: Infinity,
            direction: 'alternate'
        }
    );
    
    // Append the star to the container
    container.appendChild(star);
}

// Custom cursor movement
document.body.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - cursor.offsetWidth / 2) + 'px';
    cursor.style.top = (e.clientY - cursor.offsetHeight / 2) + 'px';
});
