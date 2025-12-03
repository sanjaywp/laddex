// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mainMenu = document.getElementById('main-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    // Ensure menu is hidden by default on mobile
    if (window.innerWidth < 1024) {
        mainMenu.classList.add('hidden');
    }

    if (mobileMenuButton && mainMenu) {
        mobileMenuButton.addEventListener('click', function() {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            
            // Toggle menu visibility
            mainMenu.classList.toggle('hidden');
            
            // Toggle icons
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
            
            // Update aria-expanded
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking on a link (mobile)
        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 1024) {
                    mainMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Handle window resize to ensure menu state is correct
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024) {
                // On desktop, ensure menu is visible (lg:flex will handle this via CSS)
                // Remove hidden class so lg:flex can work
                mainMenu.classList.remove('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            } else {
                // On mobile, always hide menu when resizing from desktop
                mainMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

