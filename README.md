# Task Management Web App

This project is a task management web application built using C#, React, and SQL. It provides users with an intuitive interface to create, manage, and track tasks efficiently.

## Features
- **User Authentication**: Secure login and registration system.
- **Task Creation & Management**: Add, edit, and delete tasks.
- **Collaborative Features**: Assign tasks to employees with task priority.

## Tech Stack
- **Frontend**: React, CSS
- **Backend**: C# (ASP.NET Core)
- **Database**: SQL Server

## Installation
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-repo/task-management-app.git
   cd task-management-app
   ```
2. **Backend Setup:**
   - Install .NET SDK
   - Use terminal to run:
      ```
      sqlcmd -s mssqlserver -e  
      create database users
      go
      ```
   - Navigate to the main folder and run:
     ```sh
     dotnet restore
     dotnet run
     ```
3. **Frontend Setup:**
   - Navigate to the page folder and run:
     ```sh
     npm install
     npm run dev
     ```

## Usage
- Register or log in to your account.
- Create and manage tasks from the dashboard.
- Assign tasks to other users (if logged in as manager).
- See your assigned tasks in calendar with icon's on date when task is required to be completed.

## Documentation
- Full documantation made in polish is added as 'Dokumentacja Api.pdf' file.
