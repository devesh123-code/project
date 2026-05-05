const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const successMessage = document.querySelector('.success-message');
const buttonsContainer = document.querySelector('.buttons-container');

// Create background hearts
function createHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['💕', '💖', '💗', '💓', '💞'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.2;
        document.body.appendChild(heart);
    }
}

// Create confetti effect
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.innerHTML = ['�', '😄', '😁', '😃', '💕'][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s ease-in forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
    }
}

// YES button click
yesBtn.addEventListener('click', function() {
    buttonsContainer.style.display = 'none';
    successMessage.classList.add('show');
    createConfetti();
});

// NO button click - make it run away
noBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get random position
    const randomX = (Math.random() - 0.5) * 400;
    const randomY = (Math.random() - 0.5) * 300;
    
    // Apply transform with smooth animation
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.8)`;
});

// Also make NO button run away on hover (bonus feature)
noBtn.addEventListener('mouseenter', function(e) {
    if (!successMessage.classList.contains('show')) {
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 250;
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px) scale(0.9)`;
    }
});

// Initialize
createHearts();
