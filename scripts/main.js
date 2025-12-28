/**
 * Main JavaScript for Debora Grataroli Website
 * Handles birthday modal popup with localStorage and accessibility features
 */

(function() {
    'use strict';

    // ========================================
    // CONSTANTS & CONFIG
    // ========================================

    const STORAGE_KEY = 'deborasite_hide_birthday_modal';
    const MODAL_ID = 'birthdayModal';
    const CLOSE_BTN_ID = 'closeModal';

    // ========================================
    // DOM ELEMENTS
    // ========================================

    let modal = null;
    let closeBtn = null;
    let focusableElements = [];
    let firstFocusableElement = null;
    let lastFocusableElement = null;

    // Store the last focused element before modal opens
    let lastFocusedElement = null;

    // ========================================
    // MODAL FUNCTIONS
    // ========================================

    /**
     * Initialize modal elements and event listeners
     */
    function initModal() {
        modal = document.getElementById(MODAL_ID);
        closeBtn = document.getElementById(CLOSE_BTN_ID);

        if (!modal || !closeBtn) {
            console.error('Modal elements not found');
            return;
        }

        // Setup event listeners
        closeBtn.addEventListener('click', handleCloseModal);
        modal.addEventListener('click', handleBackdropClick);
        document.addEventListener('keydown', handleEscapeKey);

        // Get all focusable elements within modal for focus trap
        updateFocusableElements();

        // Check if modal should be shown
        checkAndShowModal();
    }

    /**
     * Check localStorage and show modal if needed
     */
    function checkAndShowModal() {
        const hideModal = localStorage.getItem(STORAGE_KEY);

        if (!hideModal || hideModal !== 'true') {
            showModal();
        }
    }

    /**
     * Show the modal
     */
    function showModal() {
        // Store current focused element
        lastFocusedElement = document.activeElement;

        // Show modal
        modal.classList.add('show');

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Update focusable elements
        updateFocusableElements();

        // Set initial focus to close button
        setTimeout(() => {
            closeBtn.focus();
        }, 100);

        // Setup focus trap
        setupFocusTrap();
    }

    /**
     * Hide the modal
     */
    function hideModal() {
        modal.classList.remove('show');

        // Re-enable body scroll
        document.body.style.overflow = '';

        // Return focus to last focused element
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    /**
     * Handle close button click
     */
    function handleCloseModal(e) {
        e.preventDefault();
        hideModal();
    }

    /**
     * Handle backdrop click (click outside modal content)
     */
    function handleBackdropClick(e) {
        if (e.target === modal) {
            hideModal();
        }
    }

    /**
     * Handle Escape key press
     */
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    }

    // ========================================
    // FOCUS TRAP (Accessibility)
    // ========================================

    /**
     * Update list of focusable elements
     */
    function updateFocusableElements() {
        const focusableSelectors = [
            'button:not([disabled])',
            'input:not([disabled])',
            'textarea:not([disabled])',
            'select:not([disabled])',
            'a[href]',
            '[tabindex]:not([tabindex="-1"])'
        ];

        focusableElements = modal.querySelectorAll(focusableSelectors.join(','));
        firstFocusableElement = focusableElements[0];
        lastFocusableElement = focusableElements[focusableElements.length - 1];
    }

    /**
     * Setup focus trap within modal
     */
    function setupFocusTrap() {
        modal.addEventListener('keydown', trapFocus);
    }

    /**
     * Trap focus within modal using Tab key
     */
    function trapFocus(e) {
        if (e.key !== 'Tab') return;

        // Shift + Tab (going backwards)
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        }
        // Tab (going forwards)
        else {
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }

    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================

    /**
     * Setup smooth scroll for internal anchor links
     */
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                // Skip if href is just "#"
                if (href === '#') {
                    e.preventDefault();
                    return;
                }

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Set focus to target element for accessibility
                    targetElement.focus({ preventScroll: true });
                }
            });
        });
    }

    // ========================================
    // LAZY LOADING ENHANCEMENT
    // ========================================

    /**
     * Add intersection observer for lazy loaded iframes
     * (Enhances native lazy loading with fade-in effect)
     */
    function initLazyLoadObserver() {
        const iframes = document.querySelectorAll('iframe[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '0';
                        entry.target.style.transition = 'opacity 0.5s ease';

                        // Fade in when loaded
                        entry.target.addEventListener('load', function() {
                            this.style.opacity = '1';
                        });

                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            iframes.forEach(iframe => observer.observe(iframe));
        }
    }

    // ========================================
    // ANIMATION ON SCROLL
    // ========================================

    /**
     * Add fade-in animation when sections come into view
     */
    function initScrollAnimations() {
        const sections = document.querySelectorAll('.videos, .social, .footer');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '0';
                        entry.target.style.transform = 'translateY(20px)';
                        entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, 100);

                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            sections.forEach(section => observer.observe(section));
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    /**
     * Initialize all features when DOM is ready
     */
    function init() {
        initModal();
        initSmoothScroll();
        initLazyLoadObserver();
        initScrollAnimations();

        console.log('🎤 Debora Grataroli website loaded successfully!');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
