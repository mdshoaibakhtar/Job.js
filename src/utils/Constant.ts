export const formJson = [
    {
        label: "Name",
        "placeholder": "Enter your name",
        "defaultValue": "John Doe",
        "type": "name",
        options: []
    }, {
        label: "Email",
        "placeholder": "Enter your email",
        "defaultValue": "johndoe@gmail.com",
        "type": "name",
        options: []
    }, {
        label: "Date of birth",
        "placeholder": "Select your date of birth",
        "defaultValue": "08/02/2002",
        "type": "date",
        options: []
    }, {
        label: "Contact number",
        "placeholder": "Enter your contact number",
        "defaultValue": "+919905109322",
        "type": "name",
        options: []
    }, {
        label: "Permanent address",
        "placeholder": "Enter your permanent address",
        "defaultValue": "Thana road, Sultanganj, Bihar - 813213",
        "type": "name",
        options: []
    }, {
        label: "Same as permanent address",
        "placeholder": "",
        "defaultValue": "false",
        "type": "checkbox",
        options: []
    }, {
        label: "Current address",
        "placeholder": "Enter your current address",
        "defaultValue": "Thana road, Sultanganj, Bihar - 813213",
        "type": "name",
        options: []
    },
    {
        label: "About",
        "placeholder": "Tell us about yourself",
        "defaultValue": "Hi, I am Md Shoaib Akhtar",
        "type": "textarea",
        options: []
    },
    {
        label: "Current location",
        "placeholder": "Your current location",
        "defaultValue": "Kolkata, West bengal",
        "type": "name",
        options: []
    },
    {
        label: "Years of experience",
        "placeholder": "Years of experience",
        "defaultValue": "2 Years 1 Month",
        "type": "select",
        "options": [
            {
                key: '0years',
                label: "Fresher"
            },
            {
                key: '0to1',
                label: "0 to 1 Years"
            },
            {
                key: '1to2',
                label: "1 to 2 Years"
            },
            {
                key: '2to3',
                label: "2 to 3 Years"
            },
            {
                key: 'plus4',
                label: "+4 Years"
            }
        ]
    },
    {
        label: "Current salary (In Lacs)",
        "placeholder": "Your current salary",
        "defaultValue": "700000",
        "type": "price",
        options: []
    },
    {
        label: "Expected salary (In Lacs)",
        "placeholder": "Your expected salary",
        "defaultValue": "1000000",
        "type": "price",
        options: []
    },
    {
        label: "Notice period",
        "placeholder": "Notice period",
        "defaultValue": "30",
        "type": "select",
        "options": [
            {
                key: 'immediatejoin',
                label: "Immediate join"
            },
            {
                key: 'servingnoticeperiod',
                label: "Serving notice period"
            },
            {
                key: '30days',
                label: "30 Days"
            },
            {
                key: '60days',
                label: "60 Days"
            },
            {
                key: '90days',
                label: "90 Days"
            },
            {
                key: 'plus90days',
                label: "+90 Days"
            }
        ]
    }, {
        label: "Preferred shift",
        "placeholder": "Your preferred shift",
        "defaultValue": "Flexible",
        "type": "multiple",
        "options": [
            {
                key: 'flexible',
                label: "Flexible"
            },
            {
                key: 'night',
                label: "Night"
            },
            {
                key: 'morning',
                label: "Morning"
            }
        ]
    }, {
        label: "Job type",
        "placeholder": "Job type you want",
        "defaultValue": "Permanent",
        "type": "multiple",
        "options": [
            {
                key: 'fulltime',
                label: "Fulltime"
            },
            {
                key: 'parttime',
                label: "Parttime"
            },
            {
                key: 'contractual',
                label: "Contractual"
            }
        ]
    },
    {
        label: "Skills",
        "placeholder": "Your skills",
        "defaultValue": "",
        "type": "multiple",
        "options": [
            {
                key: "java",
                label: "Java"
            },
            {
                key: "python",
                label: "Python"
            },
            {
                key: "javascript",
                label: "JavaScript"
            },
            {
                key: "react",
                label: "React"
            },
            {
                key: "nextjs",
                label: "Next.js"
            },
            {
                key: "angular",
                label: "Angular"
            },
            {
                key: "vuejs",
                label: "Vue.js"
            },
            {
                key: "nodejs",
                label: "Node.js"
            },
            {
                key: "expressjs",
                label: "Express.js"
            },
            {
                key: "django",
                label: "Django"
            },
            {
                key: "flask",
                label: "Flask"
            },
            {
                key: "ruby",
                label: "Ruby"
            },
            {
                key: "rails",
                label: "Ruby on Rails"
            },
            {
                key: "php",
                label: "PHP"
            },
            {
                key: "go",
                label: "Go (Golang)"
            },
            {
                key: "swift",
                label: "Swift"
            },
            {
                key: "kotlin",
                label: "Kotlin"
            },
            {
                key: "typescript",
                label: "TypeScript"
            },
            {
                key: "html",
                label: "HTML"
            },
            {
                key: "css",
                label: "CSS"
            },
            {
                key: "sass",
                label: "Sass (CSS Preprocessing)"
            },
            {
                key: "tailwindcss",
                label: "Tailwind CSS"
            },
            {
                key: "bootstrap",
                label: "Bootstrap"
            },
            {
                key: "materialui",
                label: "Material UI"
            },
            {
                key: "graphql",
                label: "GraphQL"
            },
            {
                key: "restapi",
                label: "REST API"
            },
            {
                key: "docker",
                label: "Docker"
            },
            {
                key: "kubernetes",
                label: "Kubernetes"
            },
            {
                key: "aws",
                label: "Amazon Web Services (AWS)"
            },
            {
                key: "azure",
                label: "Microsoft Azure"
            },
            {
                key: "gcp",
                label: "Google Cloud Platform (GCP)"
            },
            {
                key: "mysql",
                label: "MySQL"
            },
            {
                key: "postgresql",
                label: "PostgreSQL"
            },
            {
                key: "mongodb",
                label: "MongoDB"
            },
            {
                key: "redis",
                label: "Redis"
            },
            {
                key: "firebase",
                label: "Firebase"
            },
            {
                key: "sqlite",
                label: "SQLite"
            },
            {
                key: "jenkins",
                label: "Jenkins"
            },
            {
                key: "git",
                label: "Git"
            },
            {
                key: "github",
                label: "GitHub"
            },
            {
                key: "gitlab",
                label: "GitLab"
            },
            {
                key: "bitbucket",
                label: "Bitbucket"
            },
            {
                key: "webpack",
                label: "Webpack"
            },
            {
                key: "babel",
                label: "Babel"
            },
            {
                key: "npm",
                label: "npm (Node Package Manager)"
            },
            {
                key: "yarn",
                label: "Yarn"
            },
            {
                key: "redis",
                label: "Redis"
            },
            {
                key: "cassandra",
                label: "Cassandra"
            },
            {
                key: "elasticsearch",
                label: "Elasticsearch"
            },
            {
                key: "rabbitmq",
                label: "RabbitMQ"
            },
            {
                key: "celery",
                label: "Celery"
            },
            {
                key: "ansible",
                label: "Ansible"
            },
            {
                key: "terraform",
                label: "Terraform"
            },
            {
                key: "vagrant",
                label: "Vagrant"
            },
            {
                key: "nginx",
                label: "Nginx"
            },
            {
                key: "apache",
                label: "Apache HTTP Server"
            },
            {
                key: "expressjs",
                label: "Express.js"
            },
            {
                key: "laravel",
                label: "Laravel"
            },
            {
                key: "symfony",
                label: "Symfony"
            },
            {
                key: "vuejs",
                label: "Vue.js"
            },
            {
                key: "nextjs",
                label: "Next.js"
            },
            {
                key: "reactnative",
                label: "React Native"
            },
            {
                key: "flutter",
                label: "Flutter"
            },
            {
                key: "xamarin",
                label: "Xamarin"
            },
            {
                key: "android",
                label: "Android Development"
            },
            {
                key: "ios",
                label: "iOS Development"
            },
            {
                key: "redux",
                label: "Redux"
            },
            {
                key: "vuex",
                label: "Vuex"
            },
            {
                key: "rxjs",
                label: "RxJS"
            }
        ]

    }, {
        label: "Preferred location",
        "placeholder": "Job location you want",
        "defaultValue": "",
        "type": "multiple",
        "options": [
            {
                key: "bangalore",
                label: "Bangalore"
            },
            {
                key: "hyderabad",
                label: "Hyderabad"
            },
            {
                key: "chennai",
                label: "Chennai"
            },
            {
                key: "pune",
                label: "Pune"
            },
            {
                key: "gurgaon",
                label: "Gurgaon"
            },
            {
                key: "noida",
                label: "Noida"
            },
            {
                key: "mumbai",
                label: "Mumbai"
            },
            {
                key: "kolkata",
                label: "Kolkata"
            },
            {
                key: "kochi",
                label: "Kochi"
            },
            {
                key: "chandigarh",
                label: "Chandigarh"
            }
        ]

    }, {
        label: "Preferred role",
        "placeholder": "Role you are looking",
        "defaultValue": "",
        "type": "multiple",
        "options": [
            {
                key: "frontend_developer",
                label: "Frontend Developer"
            },
            {
                key: "backend_developer",
                label: "Backend Developer"
            },
            {
                key: "software_developer",
                label: "Software Developer"
            },
            {
                key: "qa_engineer",
                label: "QA Engineer"
            },
            {
                key: "test_engineer",
                label: "Test Engineer"
            },
            {
                key: "aws_developer",
                label: "AWS Developer"
            },
            {
                key: "devops_engineer",
                label: "DevOps Engineer"
            },
            {
                key: "mobile_developer",
                label: "Mobile Developer"
            },
            {
                key: "data_scientist",
                label: "Data Scientist"
            },
            {
                key: "ux_ui_designer",
                label: "UX/UI Designer"
            }
        ]

    },
]

export const dynamicFieldJson = [
    {
        company_id: 'gej3873he7gg37d',
        company_name: 'Cloudkaptan cosultancy services',
        employeement_type: 'Fulltime',
        job_period: 'Sep 2022 - Present',
        current_employee: true,
        work_experience: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facers',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere'
        ]
    },
    {
        company_id: 'gej3873hefuh37d',
        company_name: 'Apple',
        employeement_type: 'Fulltime',
        job_period: 'Sep 2022 - Present',
        current_employee: true,
        work_experience: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facers',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, aspernatur voluptatem repellat facere'
        ]
    }
]

export const careerFormJson = [
    {
        "label": "Company Name",
        "placeholder": "Please enter your company name",
        "defaultValue": 'Cloudkaptan cosultancy services',
        "type": "name",
        "options": []
    },
    {
        "label": "Job type",
        "placeholder": "Job type eg.Fulltime or Parttime",
        "defaultValue": "fulltime",
        "type": "multiple",
        "options": [
            {
                key: 'fulltime',
                label: "Fulltime"
            },
            {
                key: 'parttime',
                label: "Parttime"
            },
            {
                key: 'contractual',
                label: "Contractual"
            }
        ]
    },
    {
        label: "Start date",
        "placeholder": "Select job start date",
        "defaultValue": "",
        "type": "date",
        options: []
    },
    {
        label: "Currently work here",
        "placeholder": "",
        "defaultValue": "false",
        "type": "checkbox",
        options: []
    },
    {
        label: "End date",
        "placeholder": "Select job end date",
        "defaultValue": "",
        "type": "date",
        options: []
    },
    {
        label: "Work experience",
        "placeholder": "Add your work experience",
        "defaultValue": "",
        "type": "dynamic_field_renderrer",
        options: []
    }
]
export const notice_period = [
    {
        key: 'immediatejoin',
        label: "Immediate join"
    },
    {
        key: 'servingnoticeperiod',
        label: "Serving notice period"
    },
    {
        key: '30days',
        label: "30 Days"
    },
    {
        key: '60days',
        label: "60 Days"
    },
    {
        key: '90days',
        label: "90 Days"
    },
    {
        key: 'plus90days',
        label: "+90 Days"
    }
]
export const employementTypeOptions = [
    {
        key: 'fulltime',
        label: "Fulltime"
    },
    {
        key: 'internship',
        label: "Internship"
    }
]