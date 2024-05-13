// Create a script element
let script = document.createElement('script');

// Set the source URL of the script file
script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';

// Add an onload event handler to ensure the script is loaded before using it
script.onload = ()=> {
    // Now that the script is loaded, you can use its functionality
    var typed = new Typed('#element', {
        strings: [
            "about Full-Stack Development.",
            "about Mobile App Development.",
            "about Responsive Web Design.",
            "about UI/UX Design.",
            "about MERN stack",
            "about Angular.",
            "about Node.js.",
            "about PHP.",
            "about Python.",
            "about Java.",
            "about C#/.NET Development.",
            "about DBMS (SQL/NoSQL).",
            "about Cloud Computing (AWS, Azure, GCP).",
            "about DevOps (Docker, Kubernetes).",
            "about Version Control (Git, GitHub, GitLab).",
            "about SEO (Search Engine Optimization).",
            "about Machine Learning and AI.",
            "about Content Management Systems (WordPress, Drupal).",
            "about API Development (RESTful, GraphQL).",
            "about Linux System Administration.",
            "about Network Security.",
        ],
        typeSpeed: 50,
    });
};

// Append the script element to the document's head
document.head.appendChild(script);
