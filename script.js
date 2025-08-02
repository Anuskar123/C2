// Global variables
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Quiz questions with detailed explanations
const quizQuestions = [
    {
        question: "What is the correct way to declare a private member variable in a C++ class?",
        code: `class Rectangle {
    // Which line correctly declares a private member?
    
};`,
        options: [
            "public: double width;",
            "private: double width;",
            "protected: double width;",
            "double width; // No access specifier"
        ],
        correct: 1,
        explanation: "Option B is correct. Private members are declared with 'private:' access specifier. Option D would also work since class members are private by default, but explicit declaration is better practice."
    },
    {
        question: "What will be the output of this code?",
        code: `#include <iostream>
using namespace std;

class Counter {
private:
    static int count;
public:
    Counter() { count++; }
    static int getCount() { return count; }
};

int Counter::count = 0;

int main() {
    Counter c1, c2, c3;
    cout << Counter::getCount();
    return 0;
}`,
        options: ["0", "1", "2", "3"],
        correct: 3,
        explanation: "The output is 3. The static variable 'count' is shared among all instances. Each time a Counter object is created, the constructor increments count. Three objects are created, so count becomes 3."
    },
    {
        question: "Which operator overloading syntax is correct for the + operator?",
        code: `class Time {
private:
    int hours, minutes;
public:
    // Which declaration is correct?
};`,
        options: [
            "Time operator+(Time& other);",
            "Time operator+(const Time& other) const;",
            "operator+(const Time& other);",
            "Time +(const Time& other) const;"
        ],
        correct: 1,
        explanation: "Option B is correct. The operator+ should return a Time object, take a const reference parameter, and be declared const since it doesn't modify the current object."
    },
    {
        question: "What is wrong with this inheritance example?",
        code: `class Base {
private:
    int value;
public:
    Base(int v) : value(v) {}
};

class Derived : public Base {
public:
    Derived(int v) {
        value = v; // Error here
    }
};`,
        options: [
            "Nothing is wrong",
            "Cannot access private member 'value' from derived class",
            "Missing virtual destructor",
            "Incorrect inheritance syntax"
        ],
        correct: 1,
        explanation: "Option B is correct. Private members of the base class cannot be accessed directly in the derived class. The derived class constructor should call the base class constructor: Derived(int v) : Base(v) {}"
    },
    {
        question: "What will this template function do?",
        code: `template <typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << getMax(5, 3) << " ";
    cout << getMax(2.7, 4.1) << " ";
    cout << getMax('a', 'z');
    return 0;
}`,
        options: [
            "5 4.1 z",
            "5 4.1 a",
            "3 2.7 a",
            "Compilation error"
        ],
        correct: 0,
        explanation: "Option A is correct. The template function returns the maximum of two values. getMax(5,3) returns 5, getMax(2.7,4.1) returns 4.1, and getMax('a','z') returns 'z' (ASCII value comparison)."
    },
    {
        question: "Complete the code: How do you properly implement a copy constructor?",
        code: `class Student {
private:
    string* name;
    int age;
public:
    Student(string n, int a) {
        name = new string(n);
        age = a;
    }
    
    // Copy constructor - which implementation is correct?
    
    ~Student() { delete name; }
};`,
        options: [
            "Student(Student& other) { name = other.name; age = other.age; }",
            "Student(const Student& other) { name = new string(*other.name); age = other.age; }",
            "Student(Student other) { name = other.name; age = other.age; }",
            "Student(const Student* other) { name = other->name; age = other->age; }"
        ],
        correct: 1,
        explanation: "Option B is correct. The copy constructor should take a const reference, perform deep copy for pointer members (allocate new memory), and copy the values."
    },
    {
        question: "What is the error in this polymorphism example?",
        code: `class Shape {
public:
    virtual double getArea() = 0;
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double getArea() { return 3.14159 * radius * radius; }
};

int main() {
    Shape s; // Error line
    return 0;
}`,
        options: [
            "Missing virtual destructor",
            "Cannot instantiate abstract class",
            "Incorrect virtual function syntax",
            "Missing const keyword"
        ],
        correct: 1,
        explanation: "Option B is correct. You cannot create an instance of an abstract class (a class with pure virtual functions). Shape has a pure virtual function getArea(), making it abstract."
    },
    {
        question: "What will be the output of this exception handling code?",
        code: `#include <iostream>
using namespace std;

class TestScores {
private:
    int* scores;
    int size;
public:
    TestScores(int s) : size(s) {
        scores = new int[size];
    }
    
    void setScore(int index, int score) {
        if (score < 0 || score > 100) {
            throw invalid_argument("Invalid score");
        }
        scores[index] = score;
    }
};

int main() {
    try {
        TestScores test(3);
        test.setScore(0, 95);
        test.setScore(1, 105);
        cout << "All scores set successfully";
    }
    catch (invalid_argument& e) {
        cout << "Error: " << e.what();
    }
    return 0;
}`,
        options: [
            "All scores set successfully",
            "Error: Invalid score",
            "Compilation error",
            "Runtime error"
        ],
        correct: 1,
        explanation: "Option B is correct. When setScore(1, 105) is called, it throws an invalid_argument exception because 105 > 100. The catch block handles this exception and prints the error message."
    },
    {
        question: "Which linked list operation is implemented correctly?",
        code: `class Node {
public:
    int data;
    Node* next;
    Node(int value) : data(value), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
public:
    LinkedList() : head(nullptr) {}
    
    // Which insert function is correct?
};`,
        options: [
            "void insert(int value) { Node* newNode = new Node(value); newNode->next = head; }",
            "void insert(int value) { Node* newNode = new Node(value); newNode->next = head; head = newNode; }",
            "void insert(int value) { head = new Node(value); }",
            "void insert(int value) { Node* newNode = new Node(value); head->next = newNode; }"
        ],
        correct: 1,
        explanation: "Option B is correct. To insert at the beginning: create new node, point its next to current head, then update head to point to the new node."
    },
    {
        question: "What is the time complexity of this stack operation?",
        code: `template <typename T>
class Stack {
private:
    T* arr;
    int top;
    int capacity;
public:
    void push(T value) {
        if (top < capacity - 1) {
            arr[++top] = value;
        }
    }
    
    T pop() {
        if (top >= 0) {
            return arr[top--];
        }
        throw runtime_error("Empty stack");
    }
};`,
        options: [
            "O(n) for both push and pop",
            "O(1) for both push and pop",
            "O(log n) for both push and pop",
            "O(n) for push, O(1) for pop"
        ],
        correct: 1,
        explanation: "Option B is correct. Both push and pop operations in an array-based stack are O(1) - constant time, as they only access the top element."
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Show first week by default
    showWeek('week10');
    
    // Initialize syntax highlighting
    Prism.highlightAll();
});

// Function to show different weeks
function showWeek(weekId) {
    // Hide all week contents
    const weekContents = document.querySelectorAll('.week-content');
    weekContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected week
    const selectedWeek = document.getElementById(weekId);
    if (selectedWeek) {
        selectedWeek.classList.add('active');
    }
    
    // Re-highlight syntax
    setTimeout(() => {
        Prism.highlightAll();
    }, 100);
}

// Function to show quiz
function showQuiz() {
    showWeek('quiz');
    startQuiz();
}

// Function to toggle answer visibility
function toggleAnswer(questionElement) {
    const answer = questionElement.querySelector('.answer');
    if (answer) {
        answer.classList.toggle('show');
    }
}

// Quiz Functions
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    updateQuizStats();
    loadQuestion();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    // Update question text
    document.getElementById('question-text').textContent = question.question;
    
    // Show/hide code block
    const codeBlock = document.getElementById('code-block');
    const codeContent = document.getElementById('code-content');
    
    if (question.code) {
        codeBlock.style.display = 'block';
        codeContent.textContent = question.code;
        codeContent.className = 'language-cpp';
    } else {
        codeBlock.style.display = 'none';
    }
    
    // Create options
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index, button);
        optionsContainer.appendChild(button);
    });
    
    // Reset UI
    document.getElementById('submit-answer').style.display = 'inline-block';
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('feedback').className = 'feedback';
    selectedAnswer = null;
    
    // Re-highlight code
    setTimeout(() => {
        Prism.highlightAll();
    }, 100);
}

function selectOption(index, buttonElement) {
    // Remove previous selection
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Select current option
    buttonElement.classList.add('selected');
    selectedAnswer = index;
}

function checkAnswer() {
    if (selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }
    
    const question = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    const feedback = document.getElementById('feedback');
    const options = document.querySelectorAll('.option');
    
    // Update score
    if (isCorrect) {
        score++;
        updateQuizStats();
    }
    
    // Show correct/incorrect answers
    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
        option.onclick = null; // Disable clicking
    });
    
    // Show feedback
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'} show`;
    feedback.innerHTML = `
        <strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong><br>
        ${question.explanation}
    `;
    
    // Hide submit button, show next button
    document.getElementById('submit-answer').style.display = 'none';
    document.getElementById('next-question').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        updateQuizStats();
        loadQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message = '';
    
    if (percentage >= 90) {
        message = 'Excellent! You have mastered C++ concepts!';
    } else if (percentage >= 75) {
        message = 'Good job! You have a solid understanding of C++.';
    } else if (percentage >= 60) {
        message = 'Not bad! Review the concepts and try again.';
    } else {
        message = 'Keep studying! Practice makes perfect.';
    }
    
    document.getElementById('quiz-question').innerHTML = `
        <div class="quiz-results">
            <h3>Quiz Complete!</h3>
            <div class="score-display">
                <h2>${score}/${quizQuestions.length}</h2>
                <p>${percentage}%</p>
            </div>
            <p>${message}</p>
            <button onclick="startQuiz()">Retake Quiz</button>
            <button onclick="showWeek('week10')">Back to Notes</button>
        </div>
    `;
}

function updateQuizStats() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = quizQuestions.length;
    document.getElementById('score').textContent = score;
}

// Add smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        if (targetId === 'quiz') {
            showQuiz();
        } else {
            showWeek(targetId);
        }
    });
});

// Add code copy functionality
function addCopyButtons() {
    const codeBlocks = document.querySelectorAll('.code-container pre');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.onclick = () => copyCode(block, copyButton);
        
        const container = block.parentElement;
        container.style.position = 'relative';
        container.appendChild(copyButton);
    });
}

function copyCode(codeBlock, button) {
    const code = codeBlock.textContent;
    navigator.clipboard.writeText(code).then(() => {
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i> Copy';
            button.style.background = '';
        }, 2000);
    });
}

// Initialize copy buttons when page loads
setTimeout(addCopyButtons, 1000);

// Add search functionality
function addSearchFeature() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="search-input" placeholder="Search notes..." onkeyup="searchNotes()">
        <i class="fas fa-search"></i>
    `;
    
    const nav = document.querySelector('nav .container');
    nav.appendChild(searchContainer);
}

function searchNotes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const allContent = document.querySelectorAll('.week-content');
    
    if (searchTerm === '') {
        // Show all content
        allContent.forEach(content => {
            const elements = content.querySelectorAll('*');
            elements.forEach(el => {
                el.style.display = '';
            });
        });
        return;
    }
    
    allContent.forEach(content => {
        const text = content.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            // Highlight matching content
            highlightSearchTerm(content, searchTerm);
        }
    });
}

function highlightSearchTerm(element, term) {
    // Simple highlighting implementation
    const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
        if (textNode.textContent.toLowerCase().includes(term)) {
            const parent = textNode.parentNode;
            const regex = new RegExp(`(${term})`, 'gi');
            const highlightedText = textNode.textContent.replace(regex, '<mark>$1</mark>');
            
            const span = document.createElement('span');
            span.innerHTML = highlightedText;
            parent.replaceChild(span, textNode);
        }
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl + number keys to switch between weeks
    if (e.ctrlKey && e.key >= '1' && e.key <= '7') {
        e.preventDefault();
        const weekMap = {
            '1': 'week10',
            '2': 'week15',
            '3': 'week16',
            '4': 'week17',
            '5': 'week18',
            '6': 'week19',
            '7': 'week20'
        };
        showWeek(weekMap[e.key]);
    }
    
    // Ctrl + Q for quiz
    if (e.ctrlKey && e.key === 'q') {
        e.preventDefault();
        showQuiz();
    }
});

// Add progress tracking
function saveProgress() {
    const progress = {
        currentWeek: document.querySelector('.week-content.active').id,
        quizScore: score,
        visitedWeeks: []
    };
    
    localStorage.setItem('cppNotesProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('cppNotesProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        showWeek(progress.currentWeek || 'week10');
    }
}

// Initialize progress tracking
setTimeout(loadProgress, 500);
