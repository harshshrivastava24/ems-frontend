
const employees = [
    {
        "id": 1,
        "email": "john.doe@example.com",
        "password": "password123",
        "firstName": "John",
        "taskCount": {
            "active": 1,
            "completed": 1,
            "newTask": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Prepare project report",
                "description": "Compile the Q2 financial results and prepare a summary report.",
                "category": "Reporting",
                "taskDate": "2025-05-25"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Team meeting",
                "description": "Discuss project updates and assign new tasks.",
                "category": "Meetings",
                "taskDate": "2025-05-15"
            },
            {
                "active": false,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Team meeting",
                "description": "Discuss project updates and assign new tasks.",
                "category": "Meetings",
                "taskDate": "2025-05-15"
            },
            {
                "active": false,
                "completed": false,
                "newTask": false,
                "failed": true,
                "title": "Client presentation",
                "description": "Prepare and deliver presentation for client XYZ.",
                "category": "Client Relations",
                "taskDate": "2025-05-10"
            }
        ]
    },
    {
        "id": 2,
        "email": "jane.smith@example.com",
        "password": "securepass456",
        "firstName": "Jane",
        "taskCount": {
            "active": 2,
            "completed": 1,
            "newTask": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Update website",
                "description": "Revamp homepage design and update content.",
                "category": "Development",
                "taskDate": "2025-05-28"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Write blog post",
                "description": "Create new content for company blog on industry trends.",
                "category": "Content",
                "taskDate": "2025-05-20"
            },
            {
                "active": false,
                "completed": false,
                "newTask": false,
                "failed": true,
                "title": "System audit",
                "description": "Review system logs for security issues.",
                "category": "Security",
                "taskDate": "2025-05-14"
            },
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Customer feedback analysis",
                "description": "Analyze feedback from recent survey to identify improvement areas.",
                "category": "Research",
                "taskDate": "2025-05-29"
            }
        ]
    },
    {
        "id": 3,
        "email": "michael.lee@example.com",
        "password": "mikepass789",
        "firstName": "Michael",
        "taskCount": {
            "active": 2,
            "completed": 2,
            "newTask": 1,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Database migration",
                "description": "Move existing database to new cloud infrastructure.",
                "category": "IT",
                "taskDate": "2025-05-27"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Server maintenance",
                "description": "Perform routine maintenance on all servers.",
                "category": "Maintenance",
                "taskDate": "2025-05-19"
            },
            {
                "active": true,
                "completed": false,
                "newTask": false,
                "failed": false,
                "title": "Backup setup",
                "description": "Configure automated backup system.",
                "category": "IT",
                "taskDate": "2025-05-29"
            },
            {
                "active": false,
                "completed": false,
                "newTask": false,
                "failed": true,
                "title": "Bug fixes",
                "description": "Fix login issues reported by users.",
                "category": "Development",
                "taskDate": "2025-05-12"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Update API documentation",
                "description": "Ensure all endpoints are documented correctly.",
                "category": "Documentation",
                "taskDate": "2025-05-17"
            }
        ]
    },
    {
        "id": 4,
        "email": "susan.kim@example.com",
        "password": "susan321",
        "firstName": "Susan",
        "taskCount": {
            "active": 2,
            "completed": 3,
            "newTask": 2,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Market research",
                "description": "Study competitor strategies and trends.",
                "category": "Marketing",
                "taskDate": "2025-05-26"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Design survey",
                "description": "Create a new customer satisfaction survey.",
                "category": "Research",
                "taskDate": "2025-05-18"
            },
            {
                "active": false,
                "completed": false,
                "newTask": false,
                "failed": true,
                "title": "Email campaign",
                "description": "Launch and monitor new email campaign.",
                "category": "Outreach",
                "taskDate": "2025-05-13"
            },
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Social media planning",
                "description": "Schedule and draft social media content for next month.",
                "category": "Marketing",
                "taskDate": "2025-05-29"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Branding update",
                "description": "Work with design team to update brand guidelines.",
                "category": "Branding",
                "taskDate": "2025-05-16"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Customer persona research",
                "description": "Develop detailed customer personas for product targeting.",
                "category": "Analytics",
                "taskDate": "2025-05-21"
            }
        ]
    },
    {
        "id": 5,
        "email": "daniel.ross@example.com",
        "password": "daniel@456",
        "firstName": "Daniel",
        "taskCount": {
            "active": 3,
            "completed": 2,
            "newTask": 3,
            "failed": 1
        },
        "tasks": [
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Code review",
                "description": "Review pull requests from frontend team.",
                "category": "Development",
                "taskDate": "2025-05-29"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Performance optimization",
                "description": "Optimize application performance for faster load times.",
                "category": "Engineering",
                "taskDate": "2025-05-22"
            },
            {
                "active": false,
                "completed": false,
                "newTask": false,
                "failed": true,
                "title": "Refactor old modules",
                "description": "Improve code quality by refactoring legacy code.",
                "category": "Maintenance",
                "taskDate": "2025-05-11"
            },
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Deploy new release",
                "description": "Push version 2.0.1 to production environment.",
                "category": "DevOps",
                "taskDate": "2025-05-28"
            },
            {
                "active": false,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Automated testing",
                "description": "Implement CI/CD automated testing pipeline.",
                "category": "Quality Assurance",
                "taskDate": "2025-05-27"
            },
            {
                "active": true,
                "completed": false,
                "newTask": true,
                "failed": false,
                "title": "Integrate payment gateway",
                "description": "Add Stripe integration to checkout process.",
                "category": "Integration",
                "taskDate": "2025-05-29"
            },
            {
                "active": false,
                "completed": true,
                "newTask": false,
                "failed": false,
                "title": "Code documentation",
                "description": "Document all critical functions in the API module.",
                "category": "Documentation",
                "taskDate": "2025-05-20"
            }
        ]
    }
]


const admin = [{
    "id": 1,
    "email": "admin1@gmail.com",
    "password": "admin123",
}]

export const setLocalStorageData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorageData = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
}