# SWS AI Document Hub

A full-stack file upload web application built using:

* React + Vite
* Tailwind CSS
* Axios
* Spring Boot
* Spring Data JPA
* H2 Database

---

# Features

* Multi-file upload
* Bulk upload simulation
* File download support
* REST API integration
* Modern responsive UI
* Frontend + Backend connected

---

# Frontend Tech Stack

* React
* Vite
* Tailwind CSS
* Axios

---

# Backend Tech Stack

* Spring Boot
* Maven
* Spring Web
* Spring Data JPA
* Lombok
* H2 Database

---

# Project Structure

```txt
SWS_AI-Project
 ├── sws-frontend
 └── sws-backend
```

---

# How To Run Frontend

```bash
cd sws-frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# How To Run Backend

```bash
cd sws-backend/backend
mvn spring-boot:run
```

Backend runs on:

```txt
http://localhost:8080
```

---

# API Endpoints

## Upload Files

```http
POST /api/files/upload
```

## Download File

```http
GET /api/files/download/{id}
```

---

# Author

Subiksha
