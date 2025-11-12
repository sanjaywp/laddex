// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mainMenu = document.getElementById('main-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuButton && mainMenu && menuIcon && closeIcon) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle menu visibility
            mainMenu.classList.toggle('hidden');
            
            // Toggle menu layout (mobile vs desktop)
            if (mainMenu.classList.contains('hidden')) {
                // Menu is hidden - show hamburger icon
                mainMenu.classList.remove('flex-col', 'space-y-4', 'mt-4', 'pb-4', 'w-full');
                mainMenu.classList.add('lg:flex', 'items-center', 'space-x-6');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            } else {
                // Menu is visible - show close icon and mobile layout
                mainMenu.classList.remove('lg:flex', 'items-center', 'space-x-6');
                mainMenu.classList.add('flex-col', 'space-y-4', 'mt-4', 'pb-4', 'w-full');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'true');
            }
        });

        // Close menu when clicking on a link (mobile only)
        const menuLinks = mainMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Only close menu on mobile screens
                if (window.innerWidth < 1024) {
                    mainMenu.classList.add('hidden');
                    mainMenu.classList.remove('flex-col', 'space-y-4', 'mt-4', 'pb-4', 'w-full');
                    mainMenu.classList.add('lg:flex', 'items-center', 'space-x-6');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Handle window resize - reset menu state on desktop
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024) {
                // Desktop view - ensure menu is visible with desktop layout
                mainMenu.classList.remove('hidden', 'flex-col', 'space-y-4', 'mt-4', 'pb-4', 'w-full');
                mainMenu.classList.add('lg:flex', 'items-center', 'space-x-6');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            } else {
                // Mobile view - hide menu by default
                if (!mainMenu.classList.contains('hidden')) {
                    mainMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});

