Task Manager - CPAN 144 Group Project

Group Members:
-Veevek Auckloo
-Oluwaseun Akinola
-Naslihan Mohammed Ayoub

Project Overview

Task Manager is a clean, minimalistic productivity app that allows users to manage their daily tasks efficiently. It features:

-Task creation, editing, and deletion
-Real-time date, time, and weather display (via free API)
-Modern dark theme with responsive layout

Components:
Calendar.js >>> Displays Toronto date && time
Weather.js >>> uses free API from https://open-meteo.com to display real time weather temperature for Toronto
NavBar.js >>> Contains links: Home, ABout, Contact
TaskList.js >>> Main TaskManager Function: Add, Delete, Delete

Routes:
/about >>> About Page
/contact >>> Contact form

State Management Structure:
tasks : array of all task items
newTitle / newDescription: controlled inputs
editingIndex: determines if editing a task
error: for input validation messages
