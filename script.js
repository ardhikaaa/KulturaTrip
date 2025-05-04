AOS.init();

// Hero Slider
const initSlider = () => {
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentSlide = 0;
    let slideInterval;

    // Show initial slide
    sliderItems[0].classList.add('opacity-100');

    // Function to show slide
    const showSlide = (index) => {
        // Hide all slides
        sliderItems.forEach(item => {
            item.classList.remove('opacity-100');
            item.classList.add('opacity-0');
        });

        // Show selected slide
        sliderItems[index].classList.remove('opacity-0');
        sliderItems[index].classList.add('opacity-100');

    };

    // Function to show next slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % sliderItems.length;
        showSlide(currentSlide);
    };

    // Start automatic slideshow
    const startSlideshow = () => {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };

    // Stop slideshow on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', startSlideshow);

    // Start the slideshow
    startSlideshow();
};

const destinationData = [
    {
        img: 'assets/bg2.jpg',
        title: 'Bali',
        desc: 'Pulau Dewata yang terkenal dengan pantai-pantai eksotis, budaya Hindu yang kental, serta pura ikonik seperti Pura Ulun Danu Beratan. Cocok untuk wisatawan yang mencari ketenangan, petualangan alam, atau pengalaman spiritual yang autentik.'
    },
    {
        img: 'assets/yogya.jpg',
        title: 'Yogyakarta',
        desc: 'Kota budaya yang memikat dengan suasana khas Jawa, keraton megah, dan jalan legendaris seperti Malioboro. Tempat terbaik untuk menyelami sejarah, seni tradisional, dan kuliner khas seperti gudeg.'
    },
    {
        img: 'assets/raja-ampat.jpg',
        title: 'Raja Ampat',
        desc: 'Surga tersembunyi di Papua Barat dengan gugusan pulau karst, laut sebening kristal, dan keanekaragaman hayati laut tertinggi di dunia. Pilihan utama untuk pecinta diving dan pencari ketenangan di alam liar yang belum banyak tersentuh.'
    }
  ];
  function openModal(idx) {
    document.getElementById('modalImg').src = destinationData[idx].img;
    document.getElementById('modalTitle').innerText = destinationData[idx].title;
    document.getElementById('modalDesc').innerText = destinationData[idx].desc;
    document.getElementById('destinationModal').classList.remove('hidden');
  }
  function closeModal() {
    document.getElementById('destinationModal').classList.add('hidden');
  }


// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-90');
        navbar.classList.add('backdrop-blur-sm');
    } else {
        navbar.classList.remove('bg-opacity-90');
        navbar.classList.remove('backdrop-blur-sm');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
});

// Testimonial Swiper
const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
}); 