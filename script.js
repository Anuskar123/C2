// Interactive functionality for the C++ course website

document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;

    // Check for saved theme preference or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
            setTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    }

    function setTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-theme');
            if (themeIcon) themeIcon.textContent = '☀️';
        } else {
            body.classList.remove('light-theme');
            if (themeIcon) themeIcon.textContent = '🌙';
        }
    }

    // Dropdown menu functionality
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        // Toggle dropdown on click
        toggle.addEventListener('click', function(e) {
            e.preventDefault();

            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Close dropdowns on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Add active class for CSS styling
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            if (window.innerWidth > 768) { // Only on desktop
                this.classList.add('active');
            }
        });

        dropdown.addEventListener('mouseleave', function() {
            if (window.innerWidth > 768) { // Only on desktop
                this.classList.remove('active');
            }
        });
    });

    // Navigation hide/show on scroll
    let lastScrollTop = 0;
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const headerContent = document.querySelector('.header-content') || document.querySelector('header h1');
    const progressContainer = document.querySelector('.progress-container');
    const scrollThreshold = 100; // Minimum scroll distance before hiding/showing

    // Initialize navigation and header content as visible
    nav.classList.add('nav-visible');
    header.classList.add('nav-visible');
    header.classList.add('header-bg-visible');
    if (headerContent) {
        if (headerContent.classList.contains('header-content')) {
            headerContent.classList.add('header-visible');
        } else {
            // For pages with direct h1, add a class to the h1
            headerContent.classList.add('header-title-visible');
        }
    }
    if (progressContainer) {
        progressContainer.classList.add('progress-visible');
    }

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Only apply effect after scrolling past threshold
        if (Math.abs(lastScrollTop - scrollTop) <= scrollThreshold) {
            return;
        }

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide navigation and header content
            nav.classList.add('nav-hidden');
            nav.classList.remove('nav-visible');
            header.classList.add('nav-hidden');
            header.classList.remove('nav-visible');
            header.classList.add('header-bg-hidden');
            header.classList.remove('header-bg-visible');
            if (headerContent) {
                if (headerContent.classList.contains('header-content')) {
                    headerContent.classList.add('header-hidden');
                    headerContent.classList.remove('header-visible');
                } else {
                    headerContent.classList.add('header-title-hidden');
                    headerContent.classList.remove('header-title-visible');
                }
            }
            if (progressContainer) {
                progressContainer.classList.add('progress-hidden');
                progressContainer.classList.remove('progress-visible');
            }
        } else {
            // Scrolling up - show navigation and header content
            nav.classList.add('nav-visible');
            nav.classList.remove('nav-hidden');
            header.classList.add('nav-visible');
            header.classList.remove('nav-hidden');
            header.classList.add('header-bg-visible');
            header.classList.remove('header-bg-hidden');
            if (headerContent) {
                if (headerContent.classList.contains('header-content')) {
                    headerContent.classList.add('header-visible');
                    headerContent.classList.remove('header-hidden');
                } else {
                    headerContent.classList.add('header-title-visible');
                    headerContent.classList.remove('header-title-hidden');
                }
            }
            if (progressContainer) {
                progressContainer.classList.add('progress-visible');
                progressContainer.classList.remove('progress-hidden');
            }
        }

        // Always show navigation and header content at the top of the page
        if (scrollTop <= 50) {
            nav.classList.add('nav-visible');
            nav.classList.remove('nav-hidden');
            header.classList.add('nav-visible');
            header.classList.remove('nav-hidden');
            header.classList.add('header-bg-visible');
            header.classList.remove('header-bg-hidden');
            if (headerContent) {
                if (headerContent.classList.contains('header-content')) {
                    headerContent.classList.add('header-visible');
                    headerContent.classList.remove('header-hidden');
                } else {
                    headerContent.classList.add('header-title-visible');
                    headerContent.classList.remove('header-title-hidden');
                }
            }
            if (progressContainer) {
                progressContainer.classList.add('progress-visible');
                progressContainer.classList.remove('progress-hidden');
            }
        }

        lastScrollTop = scrollTop;
    });

    // Show navigation and header content when mouse hovers over header area
    header.addEventListener('mouseenter', function() {
        nav.classList.add('nav-visible');
        nav.classList.remove('nav-hidden');
        header.classList.add('nav-visible');
        header.classList.remove('nav-hidden');
        header.classList.add('header-bg-visible');
        header.classList.remove('header-bg-hidden');
        if (headerContent) {
            if (headerContent.classList.contains('header-content')) {
                headerContent.classList.add('header-visible');
                headerContent.classList.remove('header-hidden');
            } else {
                headerContent.classList.add('header-title-visible');
                headerContent.classList.remove('header-title-hidden');
            }
        }
        if (progressContainer) {
            progressContainer.classList.add('progress-visible');
            progressContainer.classList.remove('progress-hidden');
        }
    });

    // Toggle Q&A answers
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer && answer.classList.contains('answer')) {
                answer.classList.toggle('show');
            }
        });
    });

    // Toggle buttons for showing/hiding content
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const target = document.getElementById(targetId);

            if (target) {
                if (target.style.display === 'none' || target.style.display === '') {
                    target.style.display = 'block';
                    this.textContent = 'Hide ' + this.getAttribute('data-label');
                } else {
                    target.style.display = 'none';
                    this.textContent = 'Show ' + this.getAttribute('data-label');
                }
            }
        });
    });

    // Code block copy functionality
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.className = 'copy-btn';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #667eea;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
            font-size: 12px;
        `;

        block.style.position = 'relative';
        block.appendChild(copyButton);

        copyButton.addEventListener('click', function() {
            const code = block.querySelector('pre').textContent;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.background = '#4caf50';
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '#667eea';
                }, 2000);
            });
        });
    });

    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Highlight current section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('nav a');

    function highlightNav() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // Add active class styles
    const style = document.createElement('style');
    style.textContent = `
        nav a.active {
            background-color: rgba(255,255,255,0.3);
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput ? searchInput.value : '';
            performSearch(searchTerm);
        });
    }

    function performSearch(query) {
        const searchableElements = document.querySelectorAll('h1, h2, h3, p, li');
        const lowerQuery = query.toLowerCase();

        // Remove previous highlights
        document.querySelectorAll('.search-highlight').forEach(el => {
            el.outerHTML = el.innerHTML;
        });

        if (query.length < 2) return;

        searchableElements.forEach(element => {
            if (element.textContent.toLowerCase().includes(lowerQuery)) {
                element.innerHTML = element.innerHTML.replace(
                    new RegExp(`(${query})`, 'gi'),
                    '<mark class="search-highlight">$1</mark>'
                );
            }
        });

        // Scroll to first result
        const firstResult = document.querySelector('.search-highlight');
        if (firstResult) {
            firstResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Initialize any collapsible content
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Add keyboard navigation for Q&A
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.target.classList.contains('question')) {
            e.target.click();
        }
    });

    // Progress tracking (localStorage)
    function updateProgress(weekId) {
        const progress = JSON.parse(localStorage.getItem('cppProgress') || '{}');
        progress[weekId] = true;
        localStorage.setItem('cppProgress', JSON.stringify(progress));
        updateProgressIndicator();
    }

    function updateProgressIndicator() {
        const progress = JSON.parse(localStorage.getItem('cppProgress') || '{}');
        const totalWeeks = 11; // Weeks 10-23
        const completedWeeks = Object.keys(progress).length;

        const progressBar = document.querySelector('#progress-bar');
        if (progressBar) {
            const percentage = (completedWeeks / totalWeeks) * 100;
            progressBar.style.width = percentage + '%';
            progressBar.textContent = Math.round(percentage) + '%';
        }
    }

    // Mark current week as completed when page loads
    const currentWeek = window.location.pathname.split('/').pop().replace('.html', '');
    if (currentWeek.startsWith('week')) {
        updateProgress(currentWeek);
    }

    updateProgressIndicator();
});

// Utility function to create code blocks
function createCodeBlock(code, language = 'cpp') {
    return `
        <div class="code-block">
            <pre><code class="language-${language}">${code}</code></pre>
        </div>
    `;
}

// Function to create Q&A pairs
function createQA(question, answer, type = 'general') {
    return `
        <div class="qa-section">
            <div class="question" tabindex="0">
                <h4>${question}</h4>
                <span class="qa-type">${type}</span>
            </div>
            <div class="answer">
                ${answer}
            </div>
        </div>
    `;
}
