# 📌 Rättningsrapport – fed24d-the-last-todos-oliviaalmseger

## 🎯 Uppgiftens Krav:
# Assignment - The Last Todos

## 🚀 Project Overview 
This project is a Todo List application built as part of an assignment to practice component-based architecture, state management, and styling using Tailwind CSS.

### 📝 Assignment Requirements & Criteria
This project was developed based on a course assignment with separate requirements for passing (G) and higher grade (VG).

#### Requirements for Grade G:
- Create a hardcoded list of todos (with more than just plain text)
- Display the list on screen 
- Allow marking a todo as done
- Update the JavaScript list when a todo is completed
- Implement a click handler to remove a todo
- Persist data using localStorage
- Use at least one component
- Use state with a list of objects

#### Requirements for Grade VG (in addition to above):
- Allow toggling todos back from done to undone
- Add a form to create new todos
- Allow sorting of the list by different criteria
- Implement a UI framework (Tailwind CSS was chosen here)
- Use at least three components
- Use Lifting State Up to manage shared state between components

### 🪄 What I Built
Users can view existing todos, add new ones, mark them as completed or uncompleted, delete them, and sort the list in different ways. The app is fully responsive and adapts well to different screen sizes. The visual design is intentionally minimalistic and clean, using playful fonts to resemble a handwritten to-do list.

## 🎥 Demo 
[Click here to view the demo](https://medieinstitutet.github.io/fed24d-the-last-todos-oliviaalmseger/)

## 📸 Screenshots
**Whole page**
![Whole Page](todo.png)

**Sorting**
![Sorting](sort.png)


## 💻 Tech Stack 
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)


## ✍️ Author 
Created by: 
- [Olivia Almseger ](https://github.com/oliviaalmseger) 	


## 🤝 Credits
This project was developed as part of the curriculum at [Medieinstitutet](https://medieinstitutet.se/) during our first year of studies.


## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav för både betyget G och VG. Appen implementerar en enkel todo-lista med all efterfrågad funktionalitet som markerings- och sorteringsmöjligheter. Lokal lagring av data fungerar och användaren kan både lägga till och ta bort todos. Dessutom används state management och komponentbaserad arkitektur på ett korrekt sätt med React. Projektet är även stiliserat med Tailwind CSS och har minst tre komponenter samt använder 'Lifting State Up' för att hantera delad state mellan komponenterna.

💡 **Förbättringsförslag:**  
Koden överlag är välstrukturerad och dokumenterad. För att ytterligare förbättra kodkvaliteten kan du överväga att lägga till fler testfall för att säkerställa att alla funktionaliteter fungerar som avsett under olika scenarier. Det hade också varit bra att inkludera funktionalitetstester för att öka tillförlitligheten. Att abstrahera vissa upprepade stylingkonfigurationer, särskilt inom Tailwind CSS-klasser, till en mer modulär approach skulle kunna göra det lättare att underhålla och återanvända kod. Ytterligare kommentarer i koden kan också vara till hjälp för att förklara mer komplexa kodavsnitt.