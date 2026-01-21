// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Theme toggle functionality (if needed)
const themeToggle = document.createElement('button');
themeToggle.className = 'fixed bottom-4 right-4 p-3 rounded-full bg-gray-800 shadow-lg';
themeToggle.innerHTML = '<i data-feather="moon"></i>';
themeToggle.title = 'Toggle theme';

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const icon = themeToggle.querySelector('i');
    if (document.documentElement.classList.contains('dark')) {
        icon.setAttribute('data-feather', 'moon');
    } else {
        icon.setAttribute('data-feather', 'sun');
    }
    feather.replace();
});

document.body.appendChild(themeToggle);
// Animated noise background with shifting colors
function createDynamicNoise() {
    const canvas = document.getElementById('noiseCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    let frameCount = 0;
    const baseColors = [
        {r: 123, g: 31, b: 162},  // Deep Purple
        {r: 101, g: 31, b: 255},  // Vivid Violet
        {r: 41, g: 98, b: 255},   // Royal Blue
        {r: 0, g: 188, b: 212},   // Cyan
        {r: 156, g: 39, b: 176},  // Purple
        {r: 0, g: 229, b: 255}    // Bright Cyan
    ];
let currentColorIndex = 0;
    let targetColor = baseColors[0];
    
    function animateNoise() {
        frameCount++;
    // Change color more frequently (every 180 frames = 3 seconds at 60fps)
        if (frameCount % 180 === 0) {
currentColorIndex = (currentColorIndex + 1) % baseColors.length;
            targetColor = baseColors[currentColorIndex];
        }
        
        // Smooth color transition
        const lerpFactor = 0.01;
        const currentColor = ctx.fillStyle ? {
            r: parseInt(ctx.fillStyle.match(/\d+/g)[0]),
            g: parseInt(ctx.fillStyle.match(/\d+/g)[1]),
            b: parseInt(ctx.fillStyle.match(/\d+/g)[2])
        } : targetColor;
        
        const newColor = {
            r: currentColor.r + (targetColor.r - currentColor.r) * lerpFactor,
            g: currentColor.g + (targetColor.g - currentColor.g) * lerpFactor,
            b: currentColor.b + (targetColor.b - currentColor.b) * lerpFactor
        };
        
        // Create noise with current color
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            const noiseValue = Math.random();
            data[i] = newColor.r + (noiseValue * 30 - 15);   // R
            data[i+1] = newColor.g + (noiseValue * 40 - 20); // G
            data[i+2] = newColor.b + (noiseValue * 30 - 15); // B
            data[i+3] = 2 + Math.random() * 6;               // More subtle noise
}
        
        ctx.putImageData(imageData, 0, 0);
        // Add moving particles - faster and smaller
        ctx.globalCompositeOperation = 'overlay';
        for (let i = 0; i < 30; i++) {  // More particles
            const x = Math.random() * width;
            const y = (Math.random() * height + frameCount * 0.5) % height;  // Faster movement
            const size = 0.5 + Math.random() * 1.5;  // Smaller size
            const opacity = 0.05 + Math.random() * 0.15;  // More subtle
            
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fillRect(x, y, size, size);
        }
ctx.globalCompositeOperation = 'source-over';
        
        requestAnimationFrame(animateNoise);
    }
    
    animateNoise();
}
// Initialize feather icons and noise
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
    createDynamicNoise();
    // Initialize navbar icons
    const navbars = document.querySelectorAll('custom-navbar');
    navbars.forEach(nav => {
        if (nav.shadowRoot) {
            feather.replace({ root: nav.shadowRoot });
        }
    });
});
// Handle window resize
window.addEventListener('resize', () => {
    const canvas = document.getElementById('noiseCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
