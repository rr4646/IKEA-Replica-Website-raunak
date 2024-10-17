  //navigation section//

 function toggleSection(sectionId) {
        const sections = document.querySelectorAll('.section-content');
        sections.forEach(section => {
            section.style.display = 'none';
        });

        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    // Initialize default section as "Shop Products"
    document.addEventListener('DOMContentLoaded', function () {
        toggleSection('shop-products');
    });



    // Set default visible section

    document.addEventListener('DOMContentLoaded', function() {
        toggleSection('shop-products'); // Ensure "Shop Products" is visible by default
    });
  
  // Search input event
  const searchInput = document.getElementById('search-input');
  const cameraIcon = document.getElementById('camera-icon');

  // Highlight search bar when focused
  searchInput.addEventListener('focus', function() {
      searchInput.classList.add('ring', 'ring-blue-500');
  });

  // Remove highlight when blurred
  searchInput.addEventListener('blur', function() {
      searchInput.classList.remove('ring', 'ring-blue-500');
  });

  // Add a click event listener to the camera icon
  cameraIcon.addEventListener('click', function() {
      // You can open a file input or show a custom action
      alert('Camera icon clicked! Implement your functionality here.');
  });

  // JavaScript to toggle the mobile menu
document.getElementById('menu-button').addEventListener('click', function () {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});


//product section //

// category section //
const scrollContainer = document.getElementById('scroll-container');
const scrollRightButton = document.getElementById('scroll-right');

// Scroll right when clicking the right arrow
scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
});

// offers layout //
const slider = document.getElementById('slider');
        const next = document.getElementById('next');

        let scrollAmount = 0;

        // Click to scroll right
        next.addEventListener('click', () => {
            const containerWidth = slider.offsetWidth;
            scrollAmount += containerWidth / 2;  // Adjust to slide half container width
            slider.style.transform = `translateX(-${scrollAmount}px)`;
        });
  
  //category section //

  const categories = document.querySelectorAll('.bg-red-500');

   // JavaScript function to scroll the cards container
   function ScrollCat() {
    const container = document.getElementById('category-container');
    container.scrollBy({
        left: 300, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scrolling effect
    });
}

//up to 70% OFF//

function Scrollslider() {
    const container = document.getElementById('slider-container');
    // Scroll the container to the right by 200 pixels
    container.scrollBy({
        top: 0,
        left: 200, // You can adjust this value for more or less scroll
        behavior: 'smooth' // Adds smooth scrolling effect
    });
}


function ScrollCard() {
    const container = document.getElementById('card-container');
    container.scrollBy({
        left: 300, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scrolling effect
    });
}

//instagram section//
 
function ScrollIG() {
    const container = document.getElementById('ig-container');
    container.scrollBy({
        left: 300, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scrolling effect
    });
}
//more section//

function scrollMore() {
    const container = document.getElementById('scroll-container');
    // Scroll the container to the right by 200 pixels
    container.scrollBy({
        top: 0,
        left: 200, // You can adjust this value for more or less scroll
        behavior: 'smooth' // Adds smooth scrolling effect
    });
}

//discover our feature//


document.addEventListener('DOMContentLoaded', function() {
    // Get the feature section container and buttons
    const featureSection = document.getElementById('feature_section-container');
    const moveLeftButton = document.getElementById('move-left');
    const moveRightButton = document.getElementById('move-right');

    // Set movement amount
    const moveAmount = 200;

    // Function to move the container left or right
    function moveItems(direction) {
        if (direction === 'left') {
            featureSection.scrollBy({
                left: -moveAmount,
                behavior: 'smooth'
            });
        } else if (direction === 'right') {
            featureSection.scrollBy({
                left: moveAmount,
                behavior: 'smooth'
            });
        }
    }

    // Add event listeners to buttons
    moveLeftButton.addEventListener('click', function() {
        moveItems('left');
    });

    moveRightButton.addEventListener('click', function() {
        moveItems('right');
    });

    // Show/Hide Buttons Logic
    let movementTimeout;

    featureSection.addEventListener('scroll', function() {
        // Clear previous timeout
        clearTimeout(movementTimeout);

        // Show buttons when scrolling
        moveLeftButton.classList.remove('hidden');
        moveRightButton.classList.remove('hidden');

        // Hide buttons after 2 seconds of inactivity
        movementTimeout = setTimeout(function() {
            moveLeftButton.classList.add('hidden');
            moveRightButton.classList.add('hidden');
        }, 2000);
    });
});


  // JavaScript to handle the gallery filtering
  document.addEventListener('DOMContentLoaded', function() {
    // Select filter buttons and galleries
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleries = document.querySelectorAll('.gallery');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;

            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Hide all galleries
            galleries.forEach(gallery => gallery.classList.add('hidden'));

            // Show the selected gallery
            const selectedGallery = document.querySelector(`.gallery[data-filter="${filter}"]`);
            if (selectedGallery) {
                selectedGallery.classList.remove('hidden');
            }
        });
    });

    // Default: Show "All" gallery on page load
    document.querySelector('.gallery[data-filter="all"]').classList.remove('hidden');
});