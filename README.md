# 📂 Document Hub

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple)
![Spring Boot](https://img.shields.io/badge/SpringBoot-Backend-brightgreen)
![H2 Database](https://img.shields.io/badge/H2-Database-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-UI-38BDF8)
![License](https://img.shields.io/badge/license-MIT-green)

A full-stack document management web application inspired by a single-page clone of the **SWS AI website**, built using **React + Vite** for the frontend and **Spring Boot** for the backend. The application allows users to upload, manage, and download documents through a clean and modern interface.

---

## 🔗 Demo Video

🎥 Demo Video: [Watch Demo](https://drive.google.com/file/d/1Sl8-DbHSUilUttR8TLu0Jj0tT04tR0VG/view?usp=sharing)

---

## ✨ Features

* Multi-file upload support
* Bulk upload simulation
* File download functionality
* REST API integration using Axios
* Responsive modern UI with Tailwind CSS
* Frontend and backend fully connected
* Dynamic rendering with React state management

---

## 🛠️ Tech Stack

### 🌐 Frontend

* React.js
* Vite
* Tailwind CSS
* Axios

### ⚙️ Backend

* Spring Boot
* Spring Web
* Spring Data JPA
* Maven
* Lombok

### 🗄️ Database

* H2 Database

---

## 📂 Project Structure

```txt
SWS_AI-DocumentHub/
├── sws-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── sws-backend/
│   └── src/main/java/
│       ├── controller/
│       ├── service/
│       ├── entity/
│       └── repository/
│
└── README.md
```

---

## ⚙️ Setup & Installation

### 🖥️ 1. Frontend Setup

```bash
cd sws-frontend
npm install
npm run dev
```

Frontend runs at:

```txt
http://localhost:5173
```

---

### ⚙️ 2. Backend Setup

```bash
cd sws-backend
mvn spring-boot:run
```

Backend runs at:

```txt
http://localhost:8080
```

---

## 🔌 API Endpoints

### Upload Files

```http
POST /api/files/upload
```

### Download File

```http
GET /api/files/download/{id}
```

---

## 🚀 Deployment

### Frontend

* Vercel
* Netlify

### Backend

* Render
* Railway
* AWS

(Currently runs locally)

---

## 🔭 Future Enhancements

* JWT Authentication & Authorization
* Drag-and-drop file upload
* File type validation
* Cloud storage integration
* User dashboard and analytics
* Docker containerization
* Search and filter functionality

---

## 👩‍💻 Author

**Subiksha S**

---

## 📄 License

This project is licensed under the MIT License.
