TaskFlow – Full Stack To-Do List Application

1. Project Overview

TaskFlow is a full-stack web application developed to help users organize and manage their daily tasks efficiently. It provides a simple and user-friendly interface for creating, updating, searching, and tracking tasks.

2. Objectives

- To make daily task management easy.
- To develop a user-friendly web application.
- To implement CRUD operations.
- To connect the frontend with a backend API.
- To display task information through a dashboard.

3. Technologies Used

Frontend

- React.js
- HTML
- CSS
- JavaScript
- Vite
- Axios

Backend

- Python
- Django
- Django REST Framework

Database

- SQLite

Development Tools

- Visual Studio Code
- Git
- GitHub

4. Features

- User Registration
- User Login
- Dashboard
- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed or pending
- Search tasks
- Display task counts
- Responsive user interface

5. Project Modules

Registration Module: Allows new users to create an account.

Login Module: Allows registered users to log in.

Dashboard Module: Displays task information and task counts.

Task Management Module: Allows users to add, edit, delete, search, and update the completion status of tasks.

6. Project Structure

TaskFlow/
├── backend/
│   ├── taskflow/
│   ├── tasks/
│   └── manage.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
└── README.md

7. Installation and Execution

Prerequisites

- Python
- Node.js and npm
- Git

Backend Setup

1. Open the project folder in Visual Studio Code.
2. Open a terminal and navigate to the "backend" folder.
3. Activate your Python virtual environment.
4. Install the required Python packages.
5. Apply database migrations.
6. Start the Django development server.

python manage.py migrate
python manage.py runserver

Backend URL: "http://127.0.0.1:8000/"

Frontend Setup

1. Open a second terminal.
2. Navigate to the "frontend" folder.
3. Install the dependencies.
4. Start the React development server.

npm install
npm run dev

Open the Local URL displayed in the terminal.

8. Benefits

- Helps organize daily activities.
- Makes task tracking easier.
- Provides a simple interface.
- Demonstrates full-stack web development.
- Helps practice API integration and database operations.

9. Future Enhancements

- MySQL database integration
- Secure authentication
- User-specific task management
- Password recovery
- Online deployment
- Task deadlines and reminders

10. Conclusion

TaskFlow provides a convenient way to manage daily tasks through a web application. This project demonstrates the use of React for frontend development, Django REST Framework for backend services, and SQLite for data storage.

Author

Chaitrali Aherkar

Project Type
Internship Full Stack Development Project
