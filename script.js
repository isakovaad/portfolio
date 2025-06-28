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


// Dynamic navigation color based on section background
function updateNavigationColor() {
    const nav = document.querySelector('nav');
    const sections = [
        { element: document.getElementById('about'), isLight: false },
        { element: document.getElementById('education'), isLight: true },
        { element: document.getElementById('experience'), isLight: false },
        { element: document.getElementById('projects'), isLight: true },
        { element: document.getElementById('skills'), isLight: false },
        { element: document.getElementById('publications'), isLight: true },
    ];

    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    for (let section of sections) {
        if (section.element) {
            const rect = section.element.getBoundingClientRect();
            const sectionTop = rect.top + scrollPosition;
            const sectionBottom = sectionTop + rect.height;

            // Check if section is currently in viewport
            if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
                if (section.isLight) {
                    nav.classList.add('dark-nav');
                } else {
                    nav.classList.remove('dark-nav');
                }
                break;
            }
        }
    }
}

// Add scroll listener for navigation color
window.addEventListener('scroll', updateNavigationColor);
document.addEventListener('DOMContentLoaded', updateNavigationColor);

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

// Add experience section interactions
document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        // Add tech tag interactions
        const techTags = item.querySelectorAll('.tech-tag');
        techTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Add company logo pulse effect on hover
        item.addEventListener('mouseenter', function() {
            const logo = this.querySelector('.company-logo');
            if (logo) {
                logo.style.transform = 'scale(1.1) rotate(5deg)';
                logo.style.boxShadow = '0 15px 35px rgba(102, 126, 234, 0.3)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const logo = this.querySelector('.company-logo');
            if (logo) {
                logo.style.transform = 'scale(1) rotate(0deg)';
                logo.style.boxShadow = 'none';
            }
        });
        
        // Add typewriter effect for responsibilities
        const responsibilityItems = item.querySelectorAll('.responsibilities li');
        let isVisible = false;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isVisible) {
                    isVisible = true;
                    responsibilityItems.forEach((li, index) => {
                        li.style.opacity = '0';
                        li.style.transform = 'translateX(-20px)';
                        setTimeout(() => {
                            li.style.transition = 'all 0.5s ease';
                            li.style.opacity = '1';
                            li.style.transform = 'translateX(0)';
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(item);
    });
    
    // Add click-to-copy functionality for tech tags
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagText = this.textContent;
            navigator.clipboard.writeText(tagText).then(() => {
                // Visual feedback
                const originalBg = this.style.background;
                this.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
                this.textContent = '✓ Copied!';
                
                setTimeout(() => {
                    this.style.background = originalBg;
                    this.textContent = tagText;
                }, 1000);
            });
        });
    });
});

// Add brain image interactions
document.addEventListener('DOMContentLoaded', () => {
    const brainImage = document.querySelector('.brain-image');
    
    if (brainImage) {
        // Add enhanced hover effect
        brainImage.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.1) rotate(-3deg)';
            this.style.filter = 'drop-shadow(0 25px 50px rgba(240, 147, 251, 0.6)) brightness(1.1)';
            this.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
        
        brainImage.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
            this.style.filter = 'drop-shadow(0 15px 30px rgba(240, 147, 251, 0.4))';
            this.style.transition = 'all 0.4s ease';
        });
        
        // Add click effect
        brainImage.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'brainFloat 4s ease-in-out infinite, pulse 2s ease-in-out';
            }, 100);
        });
    }
});

// Add motto interactions
document.addEventListener('DOMContentLoaded', () => {
    const motto = document.querySelector('.motto');
    
    if (motto) {
        // Add typing effect on scroll into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const text = entry.target.textContent;
                    entry.target.textContent = '';
                    
                    let i = 0;
                    const typeWriter = () => {
                        if (i < text.length) {
                            entry.target.textContent += text.charAt(i);
                            i++;
                            setTimeout(typeWriter, 50);
                        }
                    };
                    
                    setTimeout(typeWriter, 500);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(motto);
        
        // Add click effect for inspiration
        motto.addEventListener('click', function() {
            this.style.animation = 'sparkle 1s ease-in-out';
            this.style.transform = 'scale(1.05)';
            
            // Create floating text effect
            const floatingText = document.createElement('div');
            floatingText.textContent = '✨ Inspiring! ✨';
            floatingText.style.position = 'absolute';
            floatingText.style.top = '-30px';
            floatingText.style.left = '50%';
            floatingText.style.transform = 'translateX(-50%)';
            floatingText.style.color = '#f093fb';
            floatingText.style.fontWeight = 'bold';
            floatingText.style.fontSize = '0.9rem';
            floatingText.style.opacity = '0';
            floatingText.style.animation = 'floatUp 2s ease-out forwards';
            
            this.style.position = 'relative';
            this.appendChild(floatingText);
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.animation = '';
                floatingText.remove();
            }, 2000);
        });
    }
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

// Add parallax effect to profile image and brain
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.profile-image');
    const brain = document.querySelector('.brain-image');
    const speed = scrolled * 0.2;
    
    if (parallax) parallax.style.transform = `translateY(${speed}px)`;
    if (brain) brain.style.transform = `translateY(${speed * 0.5}px)`;
});

// Add typing effect to name
const nameElement = document.querySelector('.name');
if (nameElement) {
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
}

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
    
    // Animate experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.8s ease';
        
        const experienceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200); // Stagger the animations
                }
            });
        }, observerOptions);
        
        experienceObserver.observe(item);
    });
});

// Add mouse movement effect to background
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const bgAnimation = document.querySelector('.bg-animation');
    if (bgAnimation) {
        bgAnimation.style.backgroundPosition = `${50 + mouseX * 10}% ${50 + mouseY * 10}%`;
    }
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

// Add CSS for additional animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        0% {
            opacity: 0;
            transform: translateX(-50%) translateY(0);
        }
        50% {
            opacity: 1;
            transform: translateX(-50%) translateY(-20px);
        }
        100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-40px);
        }
    }
    
    @keyframes brainPulse {
        0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 15px 30px rgba(240, 147, 251, 0.4));
        }
        50% {
            transform: scale(1.05);
            filter: drop-shadow(0 20px 40px rgba(240, 147, 251, 0.6));
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

// Add Easter egg - Brain knowledge tooltip
document.addEventListener('DOMContentLoaded', () => {
    const brainImage = document.querySelector('.brain-image');
    
    if (brainImage) {
        let tooltipTimeout;
        
        brainImage.addEventListener('mouseenter', function() {
            clearTimeout(tooltipTimeout);
            
            const tooltip = document.createElement('div');
            tooltip.className = 'brain-tooltip';
            tooltip.innerHTML = `
                <div style="
                    position: absolute;
                    top: -60px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    white-space: nowrap;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    z-index: 1000;
                    opacity: 0;
                    animation: fadeInTooltip 0.3s ease forwards;
                ">
                    🧠 Neural networks + Data science = Magic! ✨
                </div>
            `;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
        });
        
        brainImage.addEventListener('mouseleave', function() {
            tooltipTimeout = setTimeout(() => {
                const tooltip = this.querySelector('.brain-tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
            }, 300);
        });
    }
});

// Add fade in animation for tooltip
const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    @keyframes fadeInTooltip {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(tooltipStyle);


// Enhanced social link interactions
document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // Add enhanced click feedback
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
            
            // Add success feedback for email and phone
            if (this.href.includes('mailto:') || this.href.includes('tel:')) {
                const originalTooltip = this.getAttribute('data-tooltip');
                if (this.href.includes('mailto:')) {
                    this.setAttribute('data-tooltip', 'Email copied!');
                    
                    // Copy email to clipboard
                    navigator.clipboard.writeText('dilbar.isakova@student-cs.fr').then(() => {
                        setTimeout(() => {
                            this.setAttribute('data-tooltip', originalTooltip);
                        }, 2000);
                    });
                } else if (this.href.includes('tel:')) {
                    this.setAttribute('data-tooltip', 'Number copied!');
                    
                    // Copy phone to clipboard
                    navigator.clipboard.writeText('+33 7 68 26 12 66').then(() => {
                        setTimeout(() => {
                            this.setAttribute('data-tooltip', originalTooltip);
                        }, 2000);
                    });
                }
                
                e.preventDefault(); // Prevent default action for better UX
            }
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add mouse enter/leave animations
        link.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.25)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
        });
    });
});

// Contact Form Functionality
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const subject = `Message from ${name} via Portfolio`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoLink = `mailto:dilbar.isakova@student-cs.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success feedback
            const sendBtn = this.querySelector('.send-btn');
            const originalText = sendBtn.innerHTML;
            sendBtn.innerHTML = '<span class="btn-icon">✅</span>Message Sent!';
            sendBtn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';
            
            // Reset form and button after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                sendBtn.innerHTML = originalText;
                sendBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            }, 3000);
        });
        
        // Add floating label effect
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
});