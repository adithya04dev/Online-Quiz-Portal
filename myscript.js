// Variables to store the user details, questions, current question index, timer, etc.
document.addEventListener("DOMContentLoaded", function () {
var userDetails = {};


// var questions = {
//     "DBMS": [
//         {
//             "text": "What are the ACID properties of a transaction in a database?",
//             "options": [
//                 "Atomicity",
//                 "Consistency",
//                 "Isolation",
//                 "Durability",
                
//             ],
//             "correct": [0, 1, 2, 3]
//         },
//         {
//             "text": "Which SQL statement is used to update data in a database?",
//             "options": [
//                 "SELECT",
//                 "UPDATE",
//                 "INSERT",
//                 "DELETE"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "What is normalization in the context of database design?",
//             "options": [
//                 "Storing data redundantly",
//                 "Optimizing query performance",
//                 "Organizing data to minimize redundancy",
//                 "Creating clustered indexes"
//             ],
//             "correct": [2]
//         },
//         {
//             "text": "What is a foreign key in a relational database?",
//             "options": [
//                 "A key used for encryption",
//                 "A key used for sorting",
//                 "A field that links to another table's primary key",
//                 "A unique identifier for each row"
//             ],
//             "correct": [2]
//         },
//         {
//             "text": "Which database model is based on a tree-like structure?",
//             "options": [
//                 "Relational",
//                 "Hierarchical",
//                 "Network",
//                 "NoSQL"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "Which of the following are types of database models?",
//             "options": ["Relational", "Hierarchical", "Network", "NoSQL"],
//             "correct": [0, 1, 2, 3]
//         },
//         {
//             "text": "What is a primary key used for in a relational database?",
//             "options": ["Enforcing referential integrity", "Ensuring data redundancy", "Uniquely identifying records", "Speeding up queries"],
//             "correct": [2]
//         },
//         // Add more DBMS questions...
//     ],
//     "OS": [
//         {
//             "text": "What is virtual memory in an operating system?",
//             "options": [
//                 "Memory reserved for virtual machines",
//                 "A portion of disk storage used as an extension of RAM",
//                 "The process of creating virtual machines",
//                 "A type of network protocol"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "What is process scheduling in an operating system?",
//             "options": [
//                 "The process of installing new software",
//                 "Determining the order in which processes execute",
//                 "A method of defragmenting the hard drive",
//                 "Allocating memory to processes"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "Which component of an operating system manages memory?",
//             "options": [
//                 "CPU Scheduler",
//                 "File System",
//                 "Memory Manager",
//                 "Device Driver"
//             ],
//             "correct": [2]
//         },
//         {
//             "text": "What is a shell in the context of an operating system?",
//             "options": [
//                 "A protective barrier for hardware",
//                 "A user interface for interacting with the OS",
//                 "A type of computer virus",
//                 "A part of the CPU"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "What is the purpose of an interrupt in an operating system?",
//             "options": [
//                 "To terminate a program",
//                 "To pause the execution of a program",
//                 "To execute a program",
//                 "To install new hardware"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "Which of the following are types of operating systems?",
//             "options": ["Windows", "Linux", "Android", "Microsoft Office"],
//             "correct": [0, 1, 2]
//         },
//         {
//             "text": "What are the functions of an operating system?",
//             "options": ["Managing hardware resources", "Running applications", "Providing internet access", "Printing documents"],
//             "correct": [0, 1]
//         },
//         // Add more OS questions...
//     ],
//     "DSA": [
//         {
//             "text": "Which data structure is used for implementing recursion?",
//             "options": [
//                 "Stack",
//                 "Queue",
//                 "Array",
//                 "Linked List"
//             ],
//             "correct": [0]
//         },
//         {
//             "text": "What is the time complexity of the binary search algorithm?",
//             "options": [
//                 "O(1)",
//                 "O(log n)",
//                 "O(n)",
//                 "O(n^2)"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "What is the main advantage of a hash table data structure?",
//             "options": [
//                 "Constant time access",
//                 "Low memory usage",
//                 "Sorted data",
//                 "Predictable iteration order"
//             ],
//             "correct": [0]
//         },
//         {
//             "text": "Which sorting algorithm has the best average-case time complexity?",
//             "options": [
//                 "Bubble Sort",
//                 "Insertion Sort",
//                 "Merge Sort",
//                 "Quick Sort"
//             ],
//             "correct": [3]
//         },
//         {
//             "text": "What is the primary purpose of a queue data structure?",
//             "options": [
//                 "To maintain a sorted list",
//                 "To implement a last-in-first-out (LIFO) behavior",
//                 "To store data temporarily in a specific order",
//                 "To perform arithmetic operations"
//             ],
//             "correct": [2]
//         },
//         {
//             "text": "Which of the following are searching algorithms?",
//             "options": ["Binary Search", "Linear Search", "Quick Sort", "Bubble Sort"],
//             "correct": [0, 1]
//         },
//         {
//             "text": "What are the advantages of using data structures in programming?",
//             "options": ["Efficient data storage", "Improved algorithm efficiency", "Reduced code complexity", "Enhanced code readability"],
//             "correct": [0, 1]
//         },
//         // Add more DSA questions...
//     ],
//     "JAVA": [
//         {
//             "text": "What is the difference between '==' and 'equals()' in Java?",
//             "options": [
//                 "'==' compares object references, 'equals()' compares object content",
//                 "'==' compares object content, 'equals()' compares object references",
//                 "'==' and 'equals()' are the same",
//                 "'==' and 'equals()' are used for arithmetic operations"
//             ],
//             "correct": [0]
//         },
//         {
//             "text": "What is the purpose of the 'finally' block in exception handling?",
//             "options": [
//                 "To catch exceptions",
//                 "To handle exceptions",
//                 "To execute code regardless of exceptions",
//                 "To prevent exceptions"
//             ],
//             "correct": [2]
//         },
//         {
//             "text": "Which data type is used to represent a single character in Java?",
//             "options": [
//                 "char",
//                 "string",
//                 "int",
//                 "float"
//             ],
//             "correct": [0]
//         },
//         {
//             "text": "What is the use of 'super' keyword in Java?",
//             "options": [
//                 "To access the superclass members",
//                 "To create objects",
//                 "To call static methods",
//                 "To define constructors"
//             ],
//             "correct": [0]
//         },
//         {
//             "text": "Which Java keyword is used to define a constant?",
//             "options": [
//                 "static",
//                 "final",
//                 "private",
//                 "public"
//             ],
//             "correct": [1]
//         },
//         {
//             "text": "Which of the following are object-oriented programming languages?",
//             "options": ["Java", "Python", "C++", "Assembly"],
//             "correct": [0, 1, 2]
//         },
//         {
//             "text": "What are the features of Java?",
//             "options": ["Platform independence", "Multiple inheritance", "Automatic memory management", "No exception handling"],
//             "correct": [0, 2]
//         },
//         // Add more JAVA questions...
//     ],
//     "FSWD": [{
//         "text": "What is the purpose of CSS in web development?",
//         "options": [
//             "Handling server-side logic",
//             "Styling web pages",
//             "Creating databases",
//             "Executing JavaScript code"
//         ],
//         "correct": [1]
//     },
//     {
//         "text": "Which programming language is primarily used for client-side web development?",
//         "options": [
//             "Java",
//             "Python",
//             "JavaScript",
//             "PHP"
//         ],
//         "correct": [2]
//     },
//     {
//         "text": "What is the role of a web server in web development?",
//         "options": [
//             "Handling database operations",
//             "Rendering web pages",
//             "Managing client-side scripts",
//             "Creating graphics"
//         ],
//         "correct": [1]
//     },
//     {
//         "text": "What does HTML stand for?",
//         "options": [
//             "Hyper Transfer Markup Language",
//             "Hyper Text Markup Language",
//             "Highly Technical Markup Language",
//             "Home Tool Markup Language"
//         ],
//         "correct": [1]
//     },
//     {
//         "text": "What is the purpose of a CSS selector?",
//         "options": [
//             "To select elements for styling",
//             "To define JavaScript functions",
//             "To create HTML elements",
//             "To validate web forms"
//         ],
//         "correct": [0]
//     },
//         {
//             "text": "Which of the following are front-end web development technologies?",
//             "options": ["HTML", "CSS", "JavaScript", "Python"],
//             "correct": [0, 1, 2]
//         },
//         {
//             "text": "What is the role of a web server in web development?",
//             "options": ["Handling database operations", "Rendering web pages", "Managing client-side scripts", "Creating graphics"],
//             "correct": [1]
//         },
//         // Add more FSWD questions...
//     ]
// };
 var questions1 = {
    "DBMS": [
        {
            "text": "What are the ACID properties of a transaction in a database?",
            "options": [
                "Atomicity",
                "Consistency",
                "Isolation",
                "Durability",
                
            ],
            "correct": [0, 1, 2, 3]
        },
        {
            "text": "Which SQL statement is used to update data in a database?",
            "options": [
                "SELECT",
                "UPDATE",
                "INSERT",
                "DELETE"
            ],
            "correct": [1]
        },
        {
            "text": "What is normalization in the context of database design?",
            "options": [
                "Storing data redundantly",
                "Optimizing query performance",
                "Organizing data to minimize redundancy",
                "Creating clustered indexes"
            ],
            "correct": [2]
        },

        {
            "text": "What is a primary key used for in a relational database?",
            "options": ["Enforcing referential integrity", "Ensuring data redundancy", "Uniquely identifying records", "Speeding up queries"],
            "correct": [2]
        },
        // Add more DBMS questions...
    ],
    "OS": [
        {
            "text": "What is virtual memory in an operating system?",
            "options": [
                "Memory reserved for virtual machines",
                "A portion of disk storage used as an extension of RAM",
                "The process of creating virtual machines",
                "A type of network protocol"
            ],
            "correct": [1]
        },
        {
            "text": "What is process scheduling in an operating system?",
            "options": [
                "The process of installing new software",
                "Determining the order in which processes execute",
                "A method of defragmenting the hard drive",
                "Allocating memory to processes"
            ],
            "correct": [1]
        },
        {
            "text": "Which component of an operating system manages memory?",
            "options": [
                "CPU Scheduler",
                "File System",
                "Memory Manager",
                "Device Driver"
            ],
            "correct": [2]
        },
        {
            "text": "What is a shell in the context of an operating system?",
            "options": [
                "A protective barrier for hardware",
                "A user interface for interacting with the OS",
                "A type of computer virus",
                "A part of the CPU"
            ],
            "correct": [1]
        },
        {
            "text": "What is the purpose of an interrupt in an operating system?",
            "options": [
                "To terminate a program",
                "To pause the execution of a program",
                "To execute a program",
                "To install new hardware"
            ],
            "correct": [1]
        },
        
    ],
    "DSA": [
        {
            "text": "Which data structure is used for implementing recursion?",
            "options": [
                "Stack",
                "Queue",
                "Array",
                "Linked List"
            ],
            "correct": [0]
        },
        
        
        {
            "text": "Which of the following are searching algorithms?",
            "options": ["Binary Search", "Linear Search", "Quick Sort", "Bubble Sort"],
            "correct": [0, 1]
        },
        {
            "text": "What are the advantages of using data structures in programming?",
            "options": ["Efficient data storage", "Improved algorithm efficiency", "Reduced code complexity", "Enhanced code readability"],
            "correct": [0, 1]
        },
        // Add more DSA questions...
    ],
    "JAVA": [
        {
            "text": "What is the difference between '==' and 'equals()' in Java?",
            "options": [
                "'==' compares object references, 'equals()' compares object content",
                "'==' compares object content, 'equals()' compares object references",
                "'==' and 'equals()' are the same",
                "'==' and 'equals()' are used for arithmetic operations"
            ],
            "correct": [0]
        },
        {
            "text": "What is the purpose of the 'finally' block in exception handling?",
            "options": [
                "To catch exceptions",
                "To handle exceptions",
                "To execute code regardless of exceptions",
                "To prevent exceptions"
            ],
            "correct": [2]
        },
        {
            "text": "Which data type is used to represent a single character in Java?",
            "options": [
                "char",
                "string",
                "int",
                "float"
            ],
            "correct": [0]
        },
        
        {
            "text": "Which of the following are object-oriented programming languages?",
            "options": ["Java", "Python", "C++", "Assembly"],
            "correct": [0, 1, 2]
        },
        {
            "text": "What are the features of Java?",
            "options": ["Platform independence", "Multiple inheritance", "Automatic memory management", "No exception handling"],
            "correct": [0, 2]
        },
        // Add more JAVA questions...
    ],
    "FSWD": [{
        "text": "What is the purpose of CSS in web development?",
        "options": [
            "Handling server-side logic",
            "Styling web pages",
            "Creating databases",
            "Executing JavaScript code"
        ],
        "correct": [1]
    },
    {
        "text": "Which programming language is primarily used for client-side web development?",
        "options": [
            "Java",
            "Python",
            "JavaScript",
            "PHP"
        ],
        "correct": [2]
    },
    {
        "text": "What is the role of a web server in web development?",
        "options": [
            "Handling database operations",
            "Rendering web pages",
            "Managing client-side scripts",
            "Creating graphics"
        ],
        "correct": [1]
    },
    {
        "text": "What does HTML stand for?",
        "options": [
            "Hyper Transfer Markup Language",
            "Hyper Text Markup Language",
            "Highly Technical Markup Language",
            "Home Tool Markup Language"
        ],
        "correct": [1]
    },
    {
        "text": "What is the purpose of a CSS selector?",
        "options": [
            "To select elements for styling",
            "To define JavaScript functions",
            "To create HTML elements",
            "To validate web forms"
        ],
        "correct": [0]
    },
        {
            "text": "Which of the following are front-end web development technologies?",
            "options": ["HTML", "CSS", "JavaScript", "Python"],
            "correct": [0, 1, 2]
        },
        {
            "text": "What is the role of a web server in web development?",
            "options": ["Handling database operations", "Rendering web pages", "Managing client-side scripts", "Creating graphics"],
            "correct": [1]
        },
        // Add more FSWD questions...
    ]
};
const jsonData = JSON.stringify(questions1);
localStorage.setItem('questionsData',jsonData);
var questions = JSON.parse(localStorage.getItem('questionsData')) 


var currentQuestionIndex = 0;
var timer = null;

// Function to start the exam
function startExam() {
    // Initialize an array to store user details

    // Get the user details from the form
    document.getElementById('user-form').classList.add('d-none');

    userDetails.name = document.getElementById('name').value;
    userDetails.course = document.getElementById('course').value;
    document.getElementById('exam-div').classList.remove('d-none');
    userDetails.selectedSubject = document.getElementById('subject').value;

    // Start the timer
    var timeLeft = 60; // Set the exam duration in seconds
    timer = setInterval(function () {
        document.getElementById('timer').textContent = timeLeft + 's';
        timeLeft--;
        if (timeLeft < 0) {
            endExam();
        }
    }, 1000);

    // Display the first question
    displayQuestion();
}

// Function to display a question
function displayQuestion() {
    // Get the current question
    var question = questions[userDetails.selectedSubject ][currentQuestionIndex];
    var checkboxes = document.querySelectorAll('input[name="option"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    // Update the question text in the UI
    var questionNumberText = 'Question ' + (currentQuestionIndex + 1) + ' / ' + questions[userDetails.selectedSubject ].length;

    document.getElementById('question-text').textContent = question.text;
    document.getElementById('question-no').textContent = questionNumberText

    // Update the options in the UI
    for (var i = 0; i < question.options.length; i++) {
        document.getElementById('option' + (i + 1) + '-label').textContent = question.options[i];
    }
    if (currentQuestionIndex === questions[userDetails.selectedSubject ].length - 1) {
        document.getElementById('next-btn').classList.add('d-none');
        document.getElementById('submit-btn').classList.remove('d-none');

    } else {
        document.getElementById('next-btn').classList.remove('d-none');
    }
    if (currentQuestionIndex === 0) {
        document.getElementById('prev-btn').classList.add('d-none');
        document.getElementById('submit-btn').classList.add('d-none');
    } else {
        document.getElementById('prev-btn').classList.remove('d-none');
    }
    
}

// Function to check the answers for all questions and calculate the total score
function checkAnswer() {
    var totalScore = 0; // Initialize the total score

    for (var i = 0; i < questions[userDetails.selectedSubject].length; i++) {
        var selectedOptions = document.querySelectorAll('input[name="option"]:checked');
        var correctOptions = questions[userDetails.selectedSubject][i].correct;

        var isCorrect = true; // Assume all options are correct

        for (var j = 0; j < selectedOptions.length; j++) {
            var selectedIndex = parseInt(selectedOptions[j].id.slice(-1));
            if (!correctOptions.includes(selectedIndex - 1)) {
                isCorrect = false; // At least one incorrect option selected
                break;
            }
        }

        if (isCorrect) {
            totalScore++;
        }
    }

    return totalScore;
}


// Function to end the exam and display the result
function endExam() {
    // Stop the timer
    clearInterval(timer);
    document.getElementById('result-div').classList.remove('d-none');
    document.getElementById('onl').classList.add('d-none');
    document.getElementById('exam-div').classList.add('d-none');
    document.getElementById('result-div').innerHTML=`<h1 class='text-center'>Your Exam has been Submitted..</h1>

    `
    

    // Calculate and display the result
    var score = checkAnswer();
    userDetails.score=score;
    var userResults = JSON.parse(localStorage.getItem('userResults')) || [];
    userResults.push(userDetails);
    localStorage.setItem('userResults', JSON.stringify(userResults));
    // document.getElementById('result-name').textContent = userDetails.name;
    // document.getElementById('result-course').textContent = userDetails.course;
    // document.getElementById('result-score').textContent = score + ' / ' + questions[userDetails.selectedSubject ].length;


    // Show the result-div and hide the exam-div
    // document.getElementById('exam-div').classList.add('d-none');
    // document.getElementById('result-div').classList.remove('d-none');
}

// Event handlers for the form submit, button clicks, etc.
document.getElementById('start-btn').addEventListener('click', function (e) {
    e.preventDefault();
    startExam();
});

document.getElementById('next-btn').addEventListener('click', function () {
    currentQuestionIndex++;
    displayQuestion();
});

document.getElementById('prev-btn').addEventListener('click', function () {
    currentQuestionIndex--;
    displayQuestion();
});

document.getElementById('submit-btn').addEventListener('click', endExam);

// Event handler for the "Start Again" button
document.getElementById('restart-btn').addEventListener('click', function () {
    // Reset the exam and show the user form
    document.getElementById('exam-div').classList.remove('d-none');
    document.getElementById('result-div').classList.add('d-none');
    currentQuestionIndex = 0;
    document.getElementById('user-form').reset();
});
});