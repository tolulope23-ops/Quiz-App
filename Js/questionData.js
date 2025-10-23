//Quiz Data
export const data = [
    {
        question: "Which of the following best describes how a web server works?",
        options: 
        [
            "It stores static files only",
            "It acts as a database engine", 
            "It listens for client requests and sends responses over HTTP/HTTPS",
            "It compiles code into binaries"
        ],
        answer: "It listens for client requests and sends responses over HTTP/HTTPS"
    },

    {
        question: "When a web server responds to multiple requests, what concept is mainly involved?",
        options: 
        [
            "Synchronization",
            "Concurrency",
            "Compilation",
            "Encryption",
        ],
        answer: "Concurrency"
    },

    {
        question: "Which web server is known for high concurrency and low resource usage?",
        options: 
        [
            "Apache",
            "IIS",
            "Tomcat",
            "Nginx"
        ],
        answer: "Nginx"
    },

    {
        question: "In replication, keeping data consistent across servers is called:",
        options: 
        [
            "Serialization",
            "Buffering",
            "Authentication",
            "Synchronization"
        ],
        answer: "Synchronization"
    },

    {
        question: "Node.js applications typically run on which type of server model?",
        options: 
        [
            "Blocking I/O",
            "Multi-process",
            "Non-blocking, event-driven",
            "Thread-per-request",
        ],
        answer: "Non-blocking, event-driven"
    }
];