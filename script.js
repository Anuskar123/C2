// Removed duplicate 'notes' declaration to fix redeclaration error.

// Remove redeclaration of 'questions' to fix the error.
// The 'questions' array is already declared and expanded below, so you can safely delete this block.

const mcqs = [
  {
    question: "What is encapsulation in OOP?",
    options: ["Inheriting properties from another class", "Bundling data and methods together", "Overloading functions", "None of the above"],
    answer: 1,
    explanation: "Encapsulation means combining data (variables) and methods (functions) that work on that data into a single unit called a class. This helps keep code organized and protects data from being changed accidentally."
  },
  {
    question: "Which access specifier makes class members accessible only within the class?",
    options: ["public", "protected", "private", "global"],
    answer: 2,
    explanation: "The 'private' access specifier means only code inside the class can use those members. This keeps important data safe from outside changes."
  },
  {
    question: "Which of the following is NOT a feature of OOP?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
    answer: 3,
    explanation: "Compilation is the process of turning code into a program, not a feature of Object-Oriented Programming. OOP features include encapsulation, inheritance, and polymorphism."
  },
  {
    question: "What is the default access specifier for class members in C++?",
    options: ["public", "private", "protected", "None"],
    answer: 1,
    explanation: "In C++, if you don't specify 'public', 'private', or 'protected', class members are 'private' by default. This means only the class itself can access them."
  },
  {
    question: "What is the name of the function called when an object is created?",
    options: ["Destructor", "Constructor", "Mutator", "Accessor"],
    answer: 1,
    explanation: "A constructor is a special function that runs automatically when you create an object. It usually sets up the object's initial values."
  },
  {
    question: "Which keyword is used to inherit a class in C++?",
    options: ["extends", "inherits", "public", "base"],
    answer: 2,
    explanation: "In C++, you use the 'public' keyword to show that a class inherits from another. For example: class Child : public Parent {}."
  },
  {
    question: "Which of the following is a correct way to declare a constant in C++?",
    options: ["const int x = 5;", "int const x = 5;", "constexpr int x = 5;", "All of the above"],
    answer: 3,
    explanation: "All these ways declare a constant value in C++. 'const' and 'constexpr' both make sure the value can't change."
  },
  {
    question: "Which operator is overloaded to compare two objects for equality?",
    options: ["+", "==", "!=", "<="],
    answer: 1,
    explanation: "The '==' operator is used to check if two objects are equal. You can write your own version for your class so it knows how to compare its data."
  },
  {
    question: "Which of the following is a pure virtual function?",
    options: ["virtual void show();", "virtual void show() = 0;", "void show();", "virtual show();"],
    answer: 1,
    explanation: "A pure virtual function is written with '= 0' at the end. It means the function has no code in the base class and must be written in a child class."
  },
  {
    question: "Which header file is needed for using std::vector?",
    options: ["<array>", "<vector>", "<list>", "<map>"],
    answer: 1,
    explanation: "To use the vector type in C++, you need to include the <vector> header file at the top of your program."
  },
  {
    question: "What does the 'friend' keyword do in C++?",
    options: ["Allows a function to access private members", "Makes a class final", "Declares a template", "None of the above"],
    answer: 0,
    explanation: "A 'friend' function can access private and protected members of a class, even though it is not a member of that class. This is useful for functions that need special access."
  },
  {
    question: "Which of the following is used for exception handling in C++?",
    options: ["try-catch-throw", "if-else", "switch-case", "None of the above"],
    answer: 0,
    explanation: "Exception handling in C++ uses 'try', 'catch', and 'throw' to manage errors. This lets you write safer code that can handle unexpected problems."
  },
  {
    question: "Which of the following is NOT a valid C++ data type?",
    options: ["int", "float", "real", "double"],
    answer: 2,
    explanation: "'real' is not a valid C++ data type. The correct types are 'int', 'float', and 'double'."
  },
  {
    question: "Which function is called when an object is destroyed?",
    options: ["Constructor", "Destructor", "Mutator", "Accessor"],
    answer: 1,
    explanation: "A destructor is a special function that runs automatically when an object is deleted or goes out of scope. It is used to clean up resources."
  },
  {
    question: "Which keyword is used to prevent inheritance in C++?",
    options: ["final", "sealed", "private", "protected"],
    answer: 0,
    explanation: "The 'final' keyword prevents other classes from inheriting from this class. This is useful when you want to stop further extension."
  },
  {
    question: "Which of the following is used to allocate memory dynamically?",
    options: ["malloc", "new", "alloc", "create"],
    answer: 1,
    explanation: "In C++, 'new' is used to allocate memory for objects or variables at runtime. 'malloc' is used in C, not C++."
  },
  {
    question: "Which of the following is NOT a valid access specifier in C++?",
    options: ["public", "private", "protected", "internal"],
    answer: 3,
    explanation: "'internal' is not a valid access specifier in C++. The valid ones are 'public', 'private', and 'protected'."
  },
  {
    question: "Which of the following is used to free dynamically allocated memory?",
    options: ["free", "delete", "remove", "clear"],
    answer: 1,
    explanation: "'delete' is used in C++ to free memory that was allocated with 'new'. 'free' is used in C."
  },
  {
    question: "Which of the following is a correct way to declare a class in C++?",
    options: ["class MyClass {};", "MyClass class {};", "class: MyClass {};", "class = MyClass {};"],
    answer: 0,
    explanation: "The correct way to declare a class is 'class MyClass {};'. This creates a new class named MyClass."
  },
  {
    question: "Which of the following is used to define a template function?",
    options: ["template <typename T>", "template <class T>", "Both A and B", "None of the above"],
    answer: 2,
    explanation: "Both 'template <typename T>' and 'template <class T>' are correct ways to define a template function in C++."
  },
  {
    question: "Which of the following is NOT a member function?",
    options: ["Constructor", "Destructor", "Friend function", "Accessor"],
    answer: 2,
    explanation: "A friend function is not a member of the class, but it can access its private and protected members."
  },
  {
    question: "Which of the following is used to access members of a pointer to an object?",
    options: [".", "->", "::", "[]"],
    answer: 1,
    explanation: "The '->' operator is used to access members of an object through a pointer."
  },
  {
    question: "Which of the following is used to overload operators in C++?",
    options: ["operator", "overload", "op", "None of the above"],
    answer: 0,
    explanation: "The 'operator' keyword is used to define how operators like +, -, == work for your class."
  },
  {
    question: "Which of the following is NOT a feature of C++?",
    options: ["Object-oriented", "Platform dependent", "Generic programming", "Encapsulation"],
    answer: 1,
    explanation: "C++ is platform independent, meaning it can run on different operating systems."
  },
  {
    question: "Which of the following is used to declare a static member?",
    options: ["static", "const", "final", "private"],
    answer: 0,
    explanation: "The 'static' keyword is used to declare members that belong to the class, not to any object."
  },
  {
    question: "Which of the following is used to declare a constant member function?",
    options: ["const after parameter list", "const before function name", "static", "final"],
    answer: 0,
    explanation: "To declare a constant member function, add 'const' after the parameter list. This means the function won't change any data in the object."
  },
  {
    question: "Which of the following is used to implement multiple inheritance?",
    options: ["class A : public B, public C", "class A extends B, C", "class A inherits B, C", "class A : B, C"],
    answer: 0,
    explanation: "In C++, you can inherit from more than one class using a comma: class A : public B, public C {}."
  },
  {
    question: "Which of the following is used to declare a friend function?",
    options: ["friend void func();", "void friend func();", "func friend();", "friend: func();"],
    answer: 0,
    explanation: "Declare a friend function with 'friend void func();' inside your class."
  },
  {
    question: "Which of the following is used to throw an exception?",
    options: ["throw", "catch", "try", "raise"],
    answer: 0,
    explanation: "Use 'throw' to signal an error or exception in your code."
  },
  {
    question: "Which of the following is used to catch an exception?",
    options: ["catch", "throw", "try", "handle"],
    answer: 0,
    explanation: "Use 'catch' to handle exceptions that are thrown in a 'try' block."
  },
  {
    question: "Which of the following is used to start a try block?",
    options: ["try", "catch", "throw", "begin"],
    answer: 0,
    explanation: "Use 'try' to start a block of code that might throw an exception."
  },
  {
    question: "Which of the following is used to declare a destructor?",
    options: ["~ClassName()", "ClassName()", "delete ClassName()", "destroy ClassName()"],
    answer: 0,
    explanation: "A destructor is declared as '~ClassName()' and is used to clean up when an object is destroyed."
  },
  {
    question: "Which of the following is used to declare a copy constructor?",
    options: ["ClassName(const ClassName &obj)", "ClassName(ClassName obj)", "ClassName(ClassName &obj)", "ClassName(const obj)",],
    answer: 0,
    explanation: "A copy constructor lets you create a new object as a copy of another. The correct way is 'ClassName(const ClassName &obj)'."
  },
  {
    question: "Which of the following is used to declare a virtual function?",
    options: ["virtual void func();", "void virtual func();", "func virtual();", "virtual: func();"],
    answer: 0,
    explanation: "A virtual function is declared with 'virtual' before the function name. This allows child classes to override it."
  },
  {
    question: "Which of the following is used to declare an abstract class?",
    options: ["At least one pure virtual function", "All functions virtual", "No member functions", "All members private"],
    answer: 0,
    explanation: "A class with at least one pure virtual function is called abstract. You can't create objects of abstract classes."
  },
  {
    question: "Which of the following is used to access static members?",
    options: ["ClassName::member", "object.member", "object->member", "ClassName.member"],
    answer: 0,
    explanation: "Access static members using 'ClassName::member'. This means the member belongs to the class, not any object."
  },
  {
    question: "Which of the following is used to declare a template class?",
    options: ["template <typename T>", "template <class T>", "Both A and B", "None of the above"],
    answer: 2,
    explanation: "Both 'template <typename T>' and 'template <class T>' are correct ways to declare a template class."
  },
  {
    question: "Which of the following is used to declare a pointer to an object?",
    options: ["ClassName *obj;", "ClassName obj*;", "*ClassName obj;", "ClassName &obj;"],
    answer: 0,
    explanation: "Declare a pointer to an object with 'ClassName *obj;'. This lets you store the address of an object."
  },
  {
    question: "Which of the following is used to access members of an object?",
    options: [".", "->", "::", "[]"],
    answer: 0,
    explanation: "Use the '.' operator to access members of an object directly."
  },
  {
    question: "Which of the following is used to declare a constant object?",
    options: ["const ClassName obj;", "ClassName const obj;", "Both A and B", "None of the above"],
    answer: 2,
    explanation: "Both 'const ClassName obj;' and 'ClassName const obj;' declare a constant object that can't be changed."
  },
  {
    question: "Which of the following is used to declare a reference?",
    options: ["int &ref = var;", "int ref = &var;", "int *ref = var;", "int ref = var;"],
    answer: 0,
    explanation: "Declare a reference with 'int &ref = var;'. This lets you use another name for the same variable."
  },
  {
    question: "Which of the following is used to declare a static function?",
    options: ["static void func();", "void static func();", "func static();", "static: func();"],
    answer: 0,
    explanation: "Declare a static function with 'static void func();'. Static functions belong to the class, not to any object."
  },
  {
    question: "Which of the following is used to declare a default argument?",
    options: ["void func(int x = 0);", "void func(int = 0 x);", "void func(x = 0 int);", "void func(int x == 0);"],
    answer: 0,
    explanation: "Declare a default argument with 'void func(int x = 0);'. This lets you call the function without providing a value for x."
  },
  {
    question: "Which of the following is used to declare a member initializer list?",
    options: [": member(value)", "= value", "member = value", "member(value)"],
    answer: 0,
    explanation: "A member initializer list is written as ': member(value)' in the constructor. This sets up member variables before the constructor body runs."
  },
  {
    question: "Which of the following is used to declare a private member?",
    options: ["private:", "protected:", "public:", "internal:"],
    answer: 0,
    explanation: "Declare private members with 'private:'. Only the class itself can access these members."
  },
  {
    question: "Which of the following is used to declare a protected member?",
    options: ["protected:", "private:", "public:", "internal:"],
    answer: 0,
    explanation: "Declare protected members with 'protected:'. These can be accessed by the class and its derived classes."
  },
  {
    question: "Which of the following is used to declare a public member?",
    options: ["public:", "private:", "protected:", "internal:"],
    answer: 0,
    explanation: "Declare public members with 'public:'. These can be accessed from anywhere in the program."
  },
  {
    question: "Which of the following is used to declare a virtual destructor?",
    options: ["virtual ~ClassName()", "~virtual ClassName()", "~ClassName() virtual", "virtual: ~ClassName()"],
    answer: 0,
    explanation: "Declare a virtual destructor with 'virtual ~ClassName()'. This ensures the correct destructor is called for derived classes."
  },
  {
    question: "Which of the following is used to declare a static data member?",
    options: ["static int x;", "int static x;", "x static int;", "static: int x;"],
    answer: 0,
    explanation: "Declare a static data member with 'static int x;'. Static data members are shared by all objects of the class."
  },
  {
    question: "Which of the following is used to declare a static member function?",
    options: ["static void func();", "void static func();", "func static();", "static: func();"],
    answer: 0,
    explanation: "Declare a static member function with 'static void func();'. Static functions can be called without creating an object."
  },
  {
    question: "Which of the following is used to declare a constant member variable?",
    options: ["const int x;", "int const x;", "Both A and B", "None of the above"],
    answer: 2,
    explanation: "Both 'const int x;' and 'int const x;' declare a constant member variable that can't be changed."
  },
  {
    question: "Which of the following is used to declare a constant member function?",
    options: ["void func() const;", "const void func();", "void const func();", "func() const void;"],
    answer: 0,
    explanation: "Declare a constant member function with 'void func() const;'. This means the function won't change any data in the object."
  },
];

function showSection(section) {
  document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

function renderMCQs() {
  const mcqsSection = document.getElementById('mcqs');
  mcqsSection.innerHTML = '<h2>MCQs</h2>' + mcqs.map((mcq, idx) => {
    return `<div class="mcq">
      <strong>${mcq.question}</strong>
      <ul>
        ${mcq.options.map((opt, i) => `<li>${opt}</li>`).join('')}
      </ul>
      <button onclick="document.getElementById('mcq-answer-${idx}').style.display='block'">Show Answer</button>
      <div id="mcq-answer-${idx}" style="display:none;margin-top:0.5em;"><em>Answer:</em> ${mcq.options[mcq.answer]}</div>
    </div>`;
  }).join('');
}
function renderNotes() {
  const notesSection = document.getElementById('notes');
  notesSection.innerHTML = '<h2>Notes</h2>' + notes.map(note => {
    return `<div class="note">
      <h3>${note.title}</h3>
      <p>${note.content}</p>
    </div>`;
  }).join('');
}
function renderQuestions() {
  const questionsSection = document.getElementById('questions');
  questionsSection.innerHTML = '<h2>Questions</h2>' + questions.map((q, idx) => {
    return `<div class="question">
      <h3>Question ${idx + 1}</h3>
      <p>${q.question}</p>
      <button onclick="document.getElementById('mcq-answer-${idx}').style.display='block'">Show Answer</button>
      <div id="mcq-answer-${idx}" style="display:none;margin-top:0.5em;"><em>Answer:</em> ${q.answer}</div>
    </div>`;
  }).join('');
}
const notes = [
  { title: "OOP Terminology", content: "Object-Oriented Programming (OOP) is a paradigm that organizes software design around data, or objects, rather than functions and logic. Key concepts include: Class (a blueprint for objects), Object (an instance of a class), Encapsulation (bundling data and methods together), Data Hiding (restricting access to internal data), Inheritance (creating new classes from existing), and Polymorphism (using objects of different types through a common interface). OOP helps in code reusability, scalability, and maintainability." },
  { title: "Class and Object Example", content: "A class in C++ defines the structure and behavior of objects. For example, a Circle class may have a private member radius, a constant PI, and methods to set/get radius, calculate area, diameter, and circumference. Objects are created from classes and can use these methods to perform operations. Example usage: Circle c1; c1.setRadius(5); double area = c1.getArea();" },
  { title: "Access Specifiers", content: "C++ provides three access specifiers: public (members accessible from outside the class), private (members accessible only within the class), and protected (members accessible in derived classes). Proper use of access specifiers helps in data protection and abstraction." },
  { title: "Constructors and Destructors", content: "A constructor is a special function called when an object is created. It has the same name as the class and no return type. Constructors can be overloaded to allow different ways of initializing objects. A destructor is called when an object is destroyed and is used to free resources. It is declared as ~ClassName(). Only one destructor per class is allowed." },
  { title: "Inheritance in C++", content: "Inheritance allows a class (derived class) to acquire properties and behaviors (methods) from another class (base class). For example, an Employee class may have name and number, and a Manager class can inherit from Employee and add title and dues. Inheritance promotes code reuse and logical hierarchy." },
  { title: "Templates in C++", content: "Templates allow writing generic functions and classes that work with any data type. For example, template <typename T> T maximum(T a, T b) returns the larger of two values. Templates are widely used in the Standard Template Library (STL) for containers like vector, list, and map." },
  { title: "Inline Member Functions", content: "Short member functions can be defined inline within the class declaration for faster execution. Inline functions reduce function call overhead and are useful for simple operations." },
  { title: "Separating Specification from Implementation", content: "In C++, class declarations are usually placed in header files (.h), while member function definitions are in source files (.cpp). Use #ifndef, #define, and #endif preprocessor directives for include guards to prevent multiple inclusions of the same header file." },
  { title: "Pointers to Objects", content: "Pointers can be used to refer to objects. For example, Rectangle *rPtr; allows rPtr to point to a Rectangle object. Public members can be accessed via pointer using the -> operator: rPtr->setLength(12.5);. Pointers are essential for dynamic memory allocation and polymorphism." },
  { title: "Dynamic Memory Allocation", content: "Use the new keyword to allocate memory for objects or variables at runtime: Rectangle *r = new Rectangle(10, 20);. Use delete to free memory when it is no longer needed. Dynamic allocation is useful for creating objects whose size or number is not known at compile time." },
  { title: "Operator Overloading", content: "C++ allows operators like +, -, ==, !=, <=, >= to be overloaded in classes for custom behavior. Operator overloading makes user-defined types behave like built-in types and improves code readability." },
  { title: "Copy Constructor", content: "A copy constructor creates a new object as a copy of an existing object. It is used for deep copy, especially when a class manages resources like dynamic memory. Syntax: ClassName(const ClassName &obj)." },
  { title: "Abstract Classes & Virtual Functions", content: "An abstract class has at least one pure virtual function (declared with = 0). Abstract classes cannot be instantiated and are used for polymorphism. Example: virtual void calcArea() = 0;. Derived classes must implement pure virtual functions." },
  { title: "Exception Handling in C++", content: "C++ uses try, catch, and throw keywords to handle errors and exceptions. Example: try { /* code */ } catch (exception &e) { /* handle error */ }. Throw is used to signal an error: throw std::invalid_argument('Invalid score');. Exception handling makes programs robust and easier to debug." },
  { title: "Standard Template Library (STL) Vector", content: "Vector is a dynamic array provided by STL. It can grow or shrink in size and provides methods like push_back to add elements. Example: std::vector<int> v; v.push_back(5);. Vectors are safer and more flexible than built-in arrays." },
  { title: "Static Members in C++", content: "Static members belong to the class, not to any object. They are shared by all instances of the class. Static members are useful for shared data, such as auto-incrementing account numbers or counting the number of objects created." },
  { title: "Input Validation", content: "Always validate user input to prevent errors and security issues. For example, do not accept hours > 60 for payroll calculations. Input validation ensures program correctness and reliability." },
  { title: "Multiple Inheritance", content: "A class can inherit from more than one base class in C++. Syntax: class Manager : public Employee, public Student;. Multiple inheritance allows combining features from multiple classes but can lead to complexity and ambiguity (diamond problem)." },
  { title: "Composition in C++", content: "Composition means a class contains objects of other classes as members. For example, a LandTract class may contain two FeetInches objects for length and width. Composition is used to model 'has-a' relationships." },
  { title: "Friend Functions in C++", content: "Friend functions are declared with the friend keyword inside a class. They can access private and protected members of the class. Friend functions are useful for operator overloading and functions that need special access." },
  { title: "Const Member Functions", content: "Const member functions are declared with const after the parameter list. They promise not to modify any data members of the object. Example: double getArea() const;. Const functions are important for working with const objects." },
  { title: "Default Arguments in Functions and Constructors", content: "Functions and constructors can have default arguments, allowing them to be called with fewer parameters. Example: Rectangle(double w = 0, double l = 0);. Default arguments improve flexibility and usability." },
  { title: "Destructors in C++", content: "A destructor is a special function called when an object is destroyed. It is used to free resources such as memory or file handles. Only one destructor per class is allowed, and it cannot be overloaded or have parameters." },
  { title: "Polymorphism in C++", content: "Polymorphism allows using objects of different types through a common interface. It is achieved using virtual functions and base class pointers. Polymorphism enables writing flexible and reusable code." },
  { title: "Namespaces in C++", content: "Namespaces are used to organize code and prevent name conflicts. The standard namespace is std, which contains common classes and functions like cout, vector, and string. Syntax: namespace MyNamespace { /* code */ }" },
  { title: "File I/O in C++", content: "C++ provides classes like ifstream, ofstream, and fstream for file input and output. Files can be opened, read, written, and closed using these classes. Example: ifstream fin('data.txt'); while(fin >> x) { /* process x */ } fin.close();" },
  { title: "Memory Management in C++", content: "C++ allows manual memory management using new and delete. Smart pointers (unique_ptr, shared_ptr) in C++11 and later help manage memory automatically and prevent leaks." },
  { title: "Type Casting in C++", content: "Type casting converts one data type to another. C++ provides static_cast, dynamic_cast, const_cast, and reinterpret_cast for different casting needs. Example: double d = static_cast<double>(x);" },
  { title: "Enumerations in C++", content: "Enums are user-defined types that consist of a set of named values. Syntax: enum Color { Red, Green, Blue };. Enums improve code readability and type safety." },
  { title: "Lambda Expressions in C++", content: "Lambdas are anonymous functions that can be defined inline. Syntax: auto add = [](int a, int b) { return a + b; };. Lambdas are useful for short, local operations, especially with STL algorithms." },
  { title: "Smart Pointers in Modern C++", content: "Smart pointers (unique_ptr, shared_ptr, weak_ptr) automatically manage memory and help prevent leaks. They are part of the <memory> header and should be preferred over raw pointers for resource management." },
  { title: "Move Semantics in C++11", content: "Move semantics allow resources to be transferred from one object to another without copying. The move constructor and move assignment operator optimize performance for temporary objects. Syntax: ClassName(ClassName&& obj);" },
  { title: "C++ Standard Library Algorithms", content: "The STL provides many algorithms like sort, find, copy, and accumulate. These work with containers like vector and list and make code concise and efficient. Example: std::sort(v.begin(), v.end());" },
  { title: "Exception Safety in C++", content: "Exception safety means writing code that behaves correctly even when exceptions occur. Use RAII (Resource Acquisition Is Initialization) and smart pointers to ensure resources are released properly." },
  { title: "C++ Best Practices", content: "Use meaningful variable names, keep functions short, prefer STL containers over raw arrays, use smart pointers, validate input, and write comments to explain complex logic. Follow coding standards for readability and maintainability." }
];

// 50+ detailed questions with explanations and answers
const questions = [
  // ...existing questions...
  // Now only plain questions and answers, no code or code explanations
  {
    question: "What does encapsulation mean in object-oriented programming?",
    answer: "Bundling data and methods together."
  },
  {
    question: "Which access specifier restricts class members to only be accessible within the class itself in C++?",
    answer: "private"
  },
  {
    question: "Which of these is not considered a feature of object-oriented programming?",
    answer: "Compilation"
  },
  {
    question: "In C++, what is the default access specifier for class members if none is specified?",
    answer: "private"
  },
  {
    question: "What is the special function called when an object is created in C++?",
    answer: "Constructor"
  },
  {
    question: "Which keyword is used to inherit from a base class in C++?",
    answer: "public"
  },
  {
    question: "How can you declare a constant in C++?",
    answer: "All of the above"
  },
  {
    question: "Which operator is commonly overloaded to compare two objects for equality in C++?",
    answer: "=="
  },
  {
    question: "How do you declare a pure virtual function in C++?",
    answer: "virtual void show() = 0;"
  },
  {
    question: "Which header file must be included to use std::vector in C++?",
    answer: "<vector>"
  },
  {
    question: "What is the purpose of the 'friend' keyword in C++?",
    answer: "Allows a function to access private members."
  },
  {
    question: "What keywords are used for exception handling in C++?",
    answer: "try-catch-throw"
  },
  {
    question: "Which of these is not a valid C++ data type?",
    answer: "real"
  },
  {
    question: "What is the name of the function called when an object is destroyed in C++?",
    answer: "Destructor"
  },
  {
    question: "Which keyword prevents a class from being inherited in C++?",
    answer: "final"
  },
  {
    question: "Which keyword is used to allocate memory dynamically in C++?",
    answer: "new"
  },
  {
    question: "Which of these is not a valid access specifier in C++?",
    answer: "internal"
  },
  {
    question: "Which keyword is used to free dynamically allocated memory in C++?",
    answer: "delete"
  },
  {
    question: "How do you declare a class in C++?",
    answer: "class MyClass {};"
  },
  {
    question: "How do you define a template function in C++?",
    answer: "Both A and B"
  },
  {
    question: "Which type of function is not a member of a class in C++?",
    answer: "Friend function"
  },
  {
    question: "Which operator is used to access members of a pointer to an object in C++?",
    answer: "->"
  },
  {
    question: "Which keyword is used to overload operators in C++?",
    answer: "operator"
  },
  {
    question: "Which of these is not a feature of C++?",
    answer: "Platform dependent"
  },
  {
    question: "Which keyword is used to declare a static member in C++?",
    answer: "static"
  },
  {
    question: "How do you declare a constant member function in C++?",
    answer: "Add 'const' after the parameter list."
  },
  {
    question: "How do you implement multiple inheritance in C++?",
    answer: "class A : public B, public C"
  },
  {
    question: "How do you declare a friend function in C++?",
    answer: "friend void func();"
  },
  {
    question: "Which keyword is used to throw an exception in C++?",
    answer: "throw"
  },
  {
    question: "Which keyword is used to catch an exception in C++?",
    answer: "catch"
  },
  {
    question: "Which keyword is used to start a try block in C++?",
    answer: "try"
  },
  {
    question: "How do you declare a destructor in C++?",
    answer: "~ClassName()"
  },
  {
    question: "How do you declare a copy constructor in C++?",
    answer: "ClassName(const ClassName &obj)"
  },
  {
    question: "How do you declare a virtual function in C++?",
    answer: "virtual void func();"
  },
  {
    question: "What makes a class abstract in C++?",
    answer: "At least one pure virtual function"
  },
  {
    question: "How do you access static members of a class in C++?",
    answer: "ClassName::member"
  },
  {
    question: "How do you declare a template class in C++?",
    answer: "Both A and B"
  },
  {
    question: "How do you declare a pointer to an object in C++?",
    answer: "ClassName *obj;"
  },
  {
    question: "Which operator is used to access members of an object in C++?",
    answer: "."
  },
  {
    question: "How do you declare a constant object in C++?",
    answer: "Both A and B"
  },
  {
    question: "How do you declare a reference in C++?",
    answer: "int &ref = var;"
  },
  {
    question: "How do you declare a static function in C++?",
    answer: "static void func();"
  },
  {
    question: "How do you declare a default argument in a function in C++?",
    answer: "void func(int x = 0);"
  },
  {
    question: "How do you declare a member initializer list in a constructor in C++?",
    answer: ": member(value)"
  },
  {
    question: "How do you declare a private member in a C++ class?",
    answer: "private:"
  },
  {
    question: "How do you declare a protected member in a C++ class?",
    answer: "protected:"
  },
  {
    question: "How do you declare a public member in a C++ class?",
    answer: "public:"
  },
  {
    question: "How do you declare a virtual destructor in C++?",
    answer: "virtual ~ClassName()"
  },
  {
    question: "How do you declare a static data member in C++?",
    answer: "static int x;"
  },
  {
    question: "How do you declare a static member function in C++?",
    answer: "static void func();"
  },
  {
    question: "How do you declare a constant member variable in C++?",
    answer: "Both A and B"
  },
  {
    question: "How do you declare a constant member function in C++?",
    answer: "void func() const;"
  },
  {
    question: "What is the output of the following code?\nint a = 3, b = 4;\ncout << a + b << endl;",
    options: ["3", "4", "7", "12"],
    answer: "7",
    explanation: "The code adds two integers, a and b. Since a = 3 and b = 4, their sum is 7. The statement 'cout << a + b << endl;' prints 7 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint* p = NULL;\n*p = 10; // Error here",
    options: ["p is not initialized", "Dereferencing a NULL pointer", "p is a reference", "No error"],
    answer: "Dereferencing a NULL pointer",
    explanation: "The pointer p is set to NULL, which means it does not point to a valid memory location. Dereferencing it with '*p = 10;' will cause a crash or undefined behavior. You must assign p to a valid address before using *p."
  },
  {
    question: "What is the output of the following code?\nint x = 2;\ncout << x * x << endl;",
    options: ["2", "4", "8", "Error"],
    answer: "4",
    explanation: "The code calculates the square of x. Since x = 2, x * x = 4. The statement 'cout << x * x << endl;' prints 4 to the output."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nint arr[5] = {1,2,3,4,5};\ncout << arr[5]; // Error here",
    options: ["arr[5] is out of bounds", "arr[0] is not initialized", "No error", "arr is not declared"],
    answer: "arr[5] is out of bounds",
    explanation: "Array indices in C++ start at 0 and go up to n-1 for an array of size n. Here, arr[5] is invalid because the valid indices are 0 to 4. Accessing arr[5] will result in undefined behavior."
  },
  {
    question: "Fill in the blank to declare a constant integer. What is the correct code?\n____ int MAX = 100;",
    options: ["static", "const", "int", "final"],
    answer: "const",
    explanation: "Use 'const' to declare a constant value that cannot be changed. 'const int MAX = 100;' creates a constant integer named MAX with value 100."
  },
  {
    question: "Complete the code to overload the == operator for the class. What is the correct code?\nclass Point {\npublic:\n    int x, y;\n    // Overload == operator here\n};",
    options: ["bool operator==(const Point& p) { return x == p.x && y == p.y; }", "bool operator=(const Point& p) { return x = p.x && y = p.y; }", "void operator==(Point p);", "int operator==(Point p);"],
    answer: "bool operator==(const Point& p) { return x == p.x && y == p.y; }",
    explanation: "Operator overloading allows you to define how operators work for your class. The correct way to overload the equality operator is to return true if both x and y are equal for two Point objects."
  },
  {
    question: "Find the error in the following code. What is wrong and how do you fix it?\nclass Test {\npublic:\n    void show() const { x = 5; } // Error here\nprivate:\n    int x;\n};",
    options: ["Cannot modify member in const function", "x is not declared", "show() must return int", "No error"],
    answer: "Cannot modify member in const function",
    explanation: "A const member function promises not to modify any member variables of the class. Attempting to assign a value to x inside a const function is a violation and will cause a compile error."
  },
  {
    question: "What is the output of the following code?\nint a = 5;\nif(a > 3) cout << \"Yes\"; else cout << \"No\";",
    options: ["Yes", "No", "Error", "5"],
    answer: "Yes",
    explanation: "The condition 'a > 3' is true since a = 5. Therefore, the program prints 'Yes'. If the condition were false, it would print 'No'."
  },
  {
    question: "Fill in the blank to declare a static member function. What is the correct code?\nclass Counter {\npublic:\n    ____ void reset();\n};",
    options: ["static", "const", "virtual", "public"],
    answer: "static",
    explanation: "Use 'static' to declare a function that belongs to the class, not to any object. Static member functions can be called without creating an object of the class."
  },
  {
    question: "Complete the code to define a constructor for the class:",
    code: `class Student {\npublic:\n    string name;\n    int age;\n    // Constructor here\n};`,
    answer: "Student(string n, int a) : name(n), age(a) {}",
    explanation: "A constructor initializes the member variables when an object is created. The colon syntax is a member initializer list."
  },
  {
    question: "Fill in the blank to declare a reference to an int. What is the correct code to make 'ref' refer to 'x'?\n____ ref = x; // ref refers to x",
    options: ["int ref = x;", "int& ref = x;", "int* ref = x;", "ref int = x;"],
    answer: "int& ref = x;",
    explanation: "In C++, 'int& ref = x;' declares a reference variable named ref that refers to x. References must be initialized when declared and cannot be changed to refer to another variable later."
  }
];