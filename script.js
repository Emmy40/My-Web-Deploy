// Counter functionality
let counter = 0;
const counterDisplay = document.getElementById('counterDisplay');

function updateCounterDisplay() {
    counterDisplay.textContent = counter;
    counterDisplay.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
}

function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}

// Welcome message functionality
function showMessage() {
    alert('Welcome to SimpleWeb! 🎉\n\nThis is a demonstration of interactive JavaScript functionality.');
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.querySelector('.logo').style.color = '#333';
        header.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = '#333';
        });
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.backdropFilter = 'blur(10px)';
        header.querySelector('.logo').style.color = 'white';
        header.querySelectorAll('.nav-links a').forEach(link => {
            link.style.color = 'white';
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive hover effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.background = 'rgba(255, 255, 255, 0.1)';
    });
});

// Welcome message on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('SimpleWeb loaded successfully! 🚀');
        console.log('Try the interactive counter and navigation features!');
    }, 1000);
});