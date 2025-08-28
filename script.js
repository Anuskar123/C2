// Interactive functionality for the C++ course website

document.addEventListener('DOMContentLoaded', function() {
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

    // Search functionality (if search input exists)
    const searchInput = document.querySelector('#search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const searchableItems = document.querySelectorAll('.searchable');

            searchableItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
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
