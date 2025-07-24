// Exam System JavaScript
class ExamSystem {
    constructor() {
        this.currentSection = 'section-a';
        this.timeRemaining = 3 * 60 * 60; // 3 hours in seconds
        this.totalQuestions = 37;
        this.answers = {};
        this.timerInterval = null;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startTimer();
        this.loadProgress();
        this.updateProgress();
        this.setupAutoSave();
        this.highlightCodeBlocks();
    }

    setupEventListeners() {
        // Navigation buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const sectionId = e.target.dataset.section;
                this.navigateToSection(sectionId);
            });
        });

        // Control panel buttons
        document.getElementById('saveProgress').addEventListener('click', () => this.saveProgress());
        document.getElementById('loadProgress').addEventListener('click', () => this.loadProgress());
        document.getElementById('exportAnswers').addEventListener('click', () => this.exportAnswers());
        document.getElementById('clearAnswers').addEventListener('click', () => this.clearAnswers());

        // Form inputs change detection
        document.addEventListener('input', (e) => {
            if (e.target.matches('input, textarea, select')) {
                this.handleAnswerChange(e.target);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey) {
                switch(e.key) {
                    case 's':
                        e.preventDefault();
                        this.saveProgress();
                        this.showNotification('Progress saved!', 'success');
                        break;
                    case 'e':
                        e.preventDefault();
                        this.exportAnswers();
                        break;
                }
            }
        });

        // Prevent accidental page refresh
        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            this.saveProgress();
            e.returnValue = '';
        });
    }

    navigateToSection(sectionId) {
        // Hide current section
        document.querySelectorAll('.exam-section').forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.classList.add('fade-in');
            
            // Update navigation
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
            
            this.currentSection = sectionId;
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Update progress
            this.updateProgress();
        }
    }

    startTimer() {
        this.updateTimerDisplay();
        
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            // Warning states
            const timerDisplay = document.getElementById('timerDisplay');
            if (this.timeRemaining <= 900) { // 15 minutes
                timerDisplay.classList.add('timer-danger');
            } else if (this.timeRemaining <= 1800) { // 30 minutes
                timerDisplay.classList.add('timer-warning');
            }
            
            // Auto-submit when time is up
            if (this.timeRemaining <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const hours = Math.floor(this.timeRemaining / 3600);
        const minutes = Math.floor((this.timeRemaining % 3600) / 60);
        const seconds = this.timeRemaining % 60;
        
        const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timerDisplay').textContent = display;
    }

    timeUp() {
        clearInterval(this.timerInterval);
        this.saveProgress();
        this.showNotification('Time is up! Your answers have been automatically saved.', 'warning', 10000);
        
        // Disable all inputs
        document.querySelectorAll('input, textarea, select').forEach(input => {
            input.disabled = true;
        });
    }

    handleAnswerChange(input) {
        const questionId = this.getQuestionId(input);
        if (questionId) {
            if (input.type === 'radio') {
                if (input.checked) {
                    this.answers[questionId] = input.value;
                }
            } else {
                this.answers[questionId] = input.value;
            }
            
            this.updateProgress();
            this.markQuestionAsAnswered(questionId);
        }
    }

    getQuestionId(input) {
        // Extract question ID from input name or id
        const name = input.name || input.id;
        const match = name.match(/q(\d+)/);
        return match ? `q${match[1]}` : null;
    }

    markQuestionAsAnswered(questionId) {
        // Visual feedback for answered questions
        const questionElement = document.querySelector(`[name="${questionId}"], [id="${questionId}"]`)?.closest('.question');
        if (questionElement && this.answers[questionId]) {
            questionElement.classList.add('answered');
            questionElement.style.borderLeft = '4px solid #00b894';
        }
    }

    updateProgress() {
        const answeredCount = Object.keys(this.answers).filter(key => this.answers[key]).length;
        const percentage = Math.round((answeredCount / this.totalQuestions) * 100);
        
        document.getElementById('progressFill').style.width = `${percentage}%`;
        document.getElementById('progressText').textContent = `${percentage}% Complete`;
        document.getElementById('answeredCount').textContent = `${answeredCount}/${this.totalQuestions}`;
        document.getElementById('completionPercent').textContent = `${percentage}%`;
    }

    saveProgress() {
        const examData = {
            answers: this.answers,
            currentSection: this.currentSection,
            timeRemaining: this.timeRemaining,
            timestamp: new Date().toISOString(),
            studentInfo: {
                name: document.getElementById('studentName')?.value || '',
                rollNumber: document.getElementById('rollNumber')?.value || ''
            }
        };
        
        localStorage.setItem('examProgress', JSON.stringify(examData));
        this.showNotification('Progress saved successfully!', 'success');
    }

    loadProgress() {
        const savedData = localStorage.getItem('examProgress');
        if (savedData) {
            try {
                const examData = JSON.parse(savedData);
                
                // Restore answers
                this.answers = examData.answers || {};
                
                // Restore form values
                Object.keys(this.answers).forEach(questionId => {
                    const value = this.answers[questionId];
                    const inputs = document.querySelectorAll(`[name="${questionId}"], [id="${questionId}"]`);
                    
                    inputs.forEach(input => {
                        if (input.type === 'radio') {
                            input.checked = input.value === value;
                        } else {
                            input.value = value;
                        }
                        this.markQuestionAsAnswered(questionId);
                    });
                });
                
                // Restore student info
                if (examData.studentInfo) {
                    if (examData.studentInfo.name) {
                        document.getElementById('studentName').value = examData.studentInfo.name;
                    }
                    if (examData.studentInfo.rollNumber) {
                        document.getElementById('rollNumber').value = examData.studentInfo.rollNumber;
                    }
                }
                
                // Restore timer if reasonable
                if (examData.timeRemaining && examData.timeRemaining > 0 && examData.timeRemaining <= 3 * 60 * 60) {
                    this.timeRemaining = examData.timeRemaining;
                }
                
                // Navigate to saved section
                if (examData.currentSection) {
                    this.navigateToSection(examData.currentSection);
                }
                
                this.updateProgress();
                this.showNotification('Progress loaded successfully!', 'success');
                
            } catch (error) {
                console.error('Error loading progress:', error);
                this.showNotification('Error loading progress', 'error');
            }
        } else {
            this.showNotification('No saved progress found', 'info');
        }
    }

    exportAnswers() {
        const studentName = document.getElementById('studentName')?.value || 'Unknown Student';
        const rollNumber = document.getElementById('rollNumber')?.value || 'Unknown Roll';
        const timestamp = new Date().toLocaleString();
        
        let exportContent = `CSY2006 C++ Polymorphism Examination - Answer Sheet\n`;
        exportContent += `${'='.repeat(60)}\n\n`;
        exportContent += `Student Name: ${studentName}\n`;
        exportContent += `Roll Number: ${rollNumber}\n`;
        exportContent += `Export Date: ${timestamp}\n`;
        exportContent += `Completion: ${Object.keys(this.answers).filter(key => this.answers[key]).length}/${this.totalQuestions} questions\n\n`;
        
        // Organize answers by section
        const sections = {
            'Section A (Multiple Choice)': [],
            'Section B (Output Prediction)': [],
            'Section C (Error Detection)': [],
            'Section D (Code Completion)': [],
            'Section E (Fill in the Blanks)': [],
            'Section F (Programming)': [],
            'Section G (Analysis)': [],
            'Section H (Advanced Programming)': [],
            'Section I (Design)': [],
            'Section J (Debugging)': []
        };
        
        // Categorize answers
        Object.keys(this.answers).forEach(questionId => {
            const questionNum = parseInt(questionId.replace('q', ''));
            const answer = this.answers[questionId];
            
            if (!answer) return;
            
            let section;
            if (questionNum <= 5) section = 'Section A (Multiple Choice)';
            else if (questionNum <= 10) section = 'Section B (Output Prediction)';
            else if (questionNum <= 13) section = 'Section C (Error Detection)';
            else if (questionNum <= 15) section = 'Section D (Code Completion)';
            else if (questionNum <= 20) section = 'Section E (Fill in the Blanks)';
            else if (questionNum <= 22) section = 'Section F (Programming)';
            else if (questionNum <= 25) section = 'Section G (Analysis)';
            else if (questionNum <= 31) section = 'Section H (Advanced Programming)';
            else if (questionNum <= 34) section = 'Section I (Design)';
            else section = 'Section J (Debugging)';
            
            sections[section].push(`Question ${questionNum}: ${answer}`);
        });
        
        // Add sections to export
        Object.keys(sections).forEach(sectionName => {
            if (sections[sectionName].length > 0) {
                exportContent += `\n${sectionName}\n${'-'.repeat(40)}\n`;
                sections[sectionName].forEach(answer => {
                    exportContent += `${answer}\n`;
                });
            }
        });
        
        // Download as text file
        const blob = new Blob([exportContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `CSY2006_Exam_Answers_${rollNumber}_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Answers exported successfully!', 'success');
    }

    clearAnswers() {
        if (confirm('Are you sure you want to clear all answers? This action cannot be undone.')) {
            this.answers = {};
            
            // Clear all form inputs
            document.querySelectorAll('input, textarea, select').forEach(input => {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                } else {
                    input.value = '';
                }
            });
            
            // Remove answered styling
            document.querySelectorAll('.question').forEach(question => {
                question.classList.remove('answered');
                question.style.borderLeft = '';
            });
            
            // Clear localStorage
            localStorage.removeItem('examProgress');
            
            this.updateProgress();
            this.showNotification('All answers cleared!', 'info');
        }
    }

    setupAutoSave() {
        // Auto-save every 30 seconds
        setInterval(() => {
            if (Object.keys(this.answers).length > 0) {
                this.saveProgress();
            }
        }, 30000);
    }

    highlightCodeBlocks() {
        // Initialize Prism.js for syntax highlighting
        if (typeof Prism !== 'undefined') {
            Prism.highlightAll();
        }
    }

    showNotification(message, type = 'info', duration = 3000) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 600;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        // Set background color based on type
        const colors = {
            success: '#00b894',
            error: '#e74c3c',
            warning: '#f39c12',
            info: '#3498db'
        };
        notification.style.backgroundColor = colors[type] || colors.info;
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Auto-remove after duration
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);
    }

    // Utility method to get exam statistics
    getExamStats() {
        const stats = {
            totalQuestions: this.totalQuestions,
            answeredQuestions: Object.keys(this.answers).filter(key => this.answers[key]).length,
            timeElapsed: (3 * 60 * 60) - this.timeRemaining,
            completionPercentage: Math.round((Object.keys(this.answers).filter(key => this.answers[key]).length / this.totalQuestions) * 100)
        };
        
        return stats;
    }

    // Method to validate answers before submission
    validateAnswers() {
        const errors = [];
        const requiredFields = ['studentName', 'rollNumber'];
        
        // Check student information
        requiredFields.forEach(field => {
            const element = document.getElementById(field);
            if (!element || !element.value.trim()) {
                errors.push(`${field.replace(/([A-Z])/g, ' $1').toLowerCase()} is required`);
            }
        });
        
        // Check if minimum questions are answered
        const answeredCount = Object.keys(this.answers).filter(key => this.answers[key]).length;
        if (answeredCount < this.totalQuestions * 0.5) {
            errors.push('Please answer at least 50% of the questions before submitting');
        }
        
        return errors;
    }

    // Method to submit exam (placeholder for future implementation)
    submitExam() {
        const errors = this.validateAnswers();
        
        if (errors.length > 0) {
            alert('Please fix the following issues:\n' + errors.join('\n'));
            return false;
        }
        
        if (confirm('Are you sure you want to submit your exam? This action cannot be undone.')) {
            // Clear timer
            clearInterval(this.timerInterval);
            
            // Save final answers
            this.saveProgress();
            
            // Export answers
            this.exportAnswers();
            
            // Disable all inputs
            document.querySelectorAll('input, textarea, select').forEach(input => {
                input.disabled = true;
            });
            
            this.showNotification('Exam submitted successfully!', 'success', 5000);
            
            return true;
        }
        
        return false;
    }
}

// CSS for animations (injected via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .question.answered {
        background: #f8fff8 !important;
    }
    
    .notification {
        font-family: 'Inter', sans-serif;
    }
`;
document.head.appendChild(style);

// Initialize the exam system when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.examSystem = new ExamSystem();
    
    // Add some additional enhancements
    setupAdditionalFeatures();
});

function setupAdditionalFeatures() {
    // Add section completion indicators
    updateSectionCompletionIndicators();
    
    // Setup form validation
    setupFormValidation();
    
    // Add keyboard navigation
    setupKeyboardNavigation();
    
    // Setup print functionality
    setupPrintMode();
}

function updateSectionCompletionIndicators() {
    // This would update visual indicators showing which sections are complete
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const sectionId = btn.dataset.section;
        // Add logic to check if section is complete and update button styling
    });
}

function setupFormValidation() {
    // Add real-time validation for form inputs
    document.querySelectorAll('input[type="text"], textarea').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#e74c3c';
                this.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
            } else {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            }
        });
    });
}

function setupKeyboardNavigation() {
    // Add keyboard shortcuts for navigation
    document.addEventListener('keydown', (e) => {
        if (e.altKey) {
            const currentIndex = Array.from(document.querySelectorAll('.nav-btn')).findIndex(btn => btn.classList.contains('active'));
            let newIndex;
            
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    newIndex = Math.max(0, currentIndex - 1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    newIndex = Math.min(document.querySelectorAll('.nav-btn').length - 1, currentIndex + 1);
                    break;
            }
            
            if (newIndex !== undefined) {
                const targetBtn = document.querySelectorAll('.nav-btn')[newIndex];
                if (targetBtn) {
                    targetBtn.click();
                }
            }
        }
    });
}

function setupPrintMode() {
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.className = 'btn btn-secondary';
    printButton.innerHTML = '🖨️ Print';
    printButton.onclick = () => window.print();
    
    document.querySelector('.control-buttons').appendChild(printButton);
}

// Global utility functions
window.examUtils = {
    formatTime: (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    },
    
    exportToPDF: () => {
        // Placeholder for PDF export functionality
        alert('PDF export feature coming soon!');
    },
    
    getAnswerSummary: () => {
        return window.examSystem ? window.examSystem.getExamStats() : null;
    }
};
