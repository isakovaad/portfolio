// Add smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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

// Add skill item animations and interactions
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        // Add staggered entrance animation
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        
        // Observe for entrance animation
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, (index % 6) * 100); // Stagger within each category
                }
            });
        }, observerOptions);
        
        skillObserver.observe(item);
        
        // Add click animation
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);
        });
        
        // Add pulse animation on hover
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.animation = 'skillPulse 0.6s ease-in-out';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            icon.style.animation = '';
        });
    });
    
    // Add skill proficiency indicator animation
    const categories = document.querySelectorAll('.skill-category');
    categories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            const skillItems = category.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.transform = 'translateY(-3px)';
                }, index * 50);
            });
        });
        
        category.addEventListener('mouseleave', () => {
            const skillItems = category.querySelectorAll('.skill-item');
            skillItems.forEach(item => {
                item.style.transform = 'translateY(0)';
            });
        });
    });
});

// Add education section interactions
document.addEventListener('DOMContentLoaded', () => {
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach(item => {
        // Add course tag interactions
        const courseTags = item.querySelectorAll('.course-tag');
        courseTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Add timeline pulse effect on hover
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.education-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.education-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
                icon.style.boxShadow = 'none';
            }
        });
    });
    
    // Add floating animation to university logos
    const universityLogos = document.querySelectorAll('.university-logo');
    universityLogos.forEach((logo, index) => {
        logo.style.animation = `float 3s ease-in-out infinite`;
        logo.style.animationDelay = `${index * 0.5}s`;
    });
});

// Add dynamic particle generation
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        particle.remove();
    }, 8000);
}

// Generate particles periodically
setInterval(createParticle, 3000);

// Add parallax effect to profile image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.profile-image');
    const speed = scrolled * 0.2;
    parallax.style.transform = `translateY(${speed}px)`;
});

// Add typing effect to name
const nameElement = document.querySelector('.name');
const originalText = nameElement.textContent;
nameElement.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        nameElement.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.stat-card, .description');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Add staggered animation for project cards
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150); // Stagger the animations
        }
    });
}, observerOptions);

// Observe project cards separately for staggered animation
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.8s ease';
        projectObserver.observe(card);
    });
    
    // Animate skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(30px)';
        category.style.transition = 'all 0.6s ease';
        projectObserver.observe(category);
    });
    
    // Animate education items
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.8s ease';
        
        const educationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, index * 200); // Stagger the animations
                }
            });
        }, observerOptions);
        
        educationObserver.observe(item);
    });
});

// Add mouse movement effect to background
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const bgAnimation = document.querySelector('.bg-animation');
    bgAnimation.style.backgroundPosition = `${50 + mouseX * 10}% ${50 + mouseY * 10}%`;
});

// Add click effect to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.marginLeft = '-10px';
        ripple.style.marginTop = '-10px';
        
        this.style.position = 'relative';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add project card hover effects
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add subtle tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const tiltX = (y - centerY) / centerY * -10;
            const tiltY = (x - centerX) / centerX * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px)`;
        });
        
        // Reset tilt on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.position = 'fixed';
scrollProgress.style.top = '0';
scrollProgress.style.left = '0';
scrollProgress.style.width = '0%';
scrollProgress.style.height = '3px';
scrollProgress.style.background = 'linear-gradient(90deg, #f093fb, #f5576c)';
scrollProgress.style.zIndex = '9999';
scrollProgress.style.transition = 'width 0.3s ease';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = scrolled + '%';
});