# 🩺 AI-Driven Patient Record Analysis

## 📌 Project Overview
- **Name:** AI-Driven Patient Record Analysis  
- **Stack:** React (Frontend), Flask (Backend), Tailwind CSS  
- **Key Features:**
  - Admin, Doctor & Patient Portals
  - Role-based Access Control
  - AI-powered Diagnosis Suggestions
  - Patient Record Management
  - Secure Login/Sign-Up with JWT

---

## 🧠 1. Overview
This full-stack web application allows Admins, Doctors, and Patients to interact with healthcare records based on their roles. The system integrates AI for **early diagnosis** suggestions and provides each role with a customized dashboard experience.

---

## 🔧 2. Core Features

### 👑 2.1 Admin Portal
- 🔓 **Full Access** to all system data.
- ✏️ **Edit/Delete** patient and doctor records.
- 👥 **User Management** for adding/editing/deleting profiles.
- 🛡️ **Role Assignment** (Admin, Doctor, Patient).
- 📊 **View All Data** including records, symptoms, reports, and diagnosis history.

### 🩺 2.2 Doctor Portal
- 📋 **Patient Dashboard** with summarized and detailed views.
- 🔍 **Patient Profile Access**: name, age, gender, vitals, symptoms, history, lab reports, and medications.
- ➕ **Add/Update Records** and suggestions based on symptoms.

### 👤 2.3 Patient Portal
- 🧾 **Personalized Dashboard** with read-only access.
- 📖 View own: name, vitals, history, symptoms, diagnosis, lab reports, and medications.

---

## 🖥️ 3. Detailed Page Structure

### 🏠 3.1 Home Page
- Clean, modern UI welcoming users.
- Showcases platform capabilities.
- Navigation panel & Login/Signup button with responsive design.

### 🔐 3.2 Login/Sign-Up Page
- Secure login with email/password.
- Role-based redirection to dashboards.

### 🛠️ 3.3 Admin Dashboard
- 👤 User management interface
- 📑 Access and modify all patient/doctor data
- 📊 Platform activity summary

### 👨‍⚕️ 3.4 Doctor Dashboard
- 📌 View assigned patients and latest diagnosis
- 🩺 Summarized and filterable patient views
- 📋 Patient profile with in-depth info

### 🧍‍♂️ 3.5 Patient Profile Page
- 👁️ Read-only access
- 📂 View all personal medical records in one place

---

## 🎨 4. UI/UX Design Highlights
- ✅ **Responsive Design** for both mobile and desktop
- 🧭 **Sidebars/Top Navbars** for role-specific navigation
- 🗂️ **Cards/Modals** for content management
- 🌈 **Tailwind CSS** for rapid custom styling

---

## 🔙 5. Backend (Flask)
- 🔗 **RESTful API** with endpoints like `/login`, `/signup`, `/patients`, `/doctors`, `/diagnosis`, etc.
- 🛡️ **JWT Authentication** for secure session handling
- 🤖 AI diagnosis suggestion model based on symptoms

---

## 🔐 6. Authentication & Authorization
- 🔒 **JWT-based login system**
- 🛠️ **Role-based access control** per user type
- 📥 Doctors/Patients register via email & login to role-specific dashboards

---

## 🔄 7. User Flow Summary
- 👑 **Admin**: Full access & management of users and records
- 🩺 **Doctor**: Access/update only assigned patients and their records
- 👤 **Patient**: View-only access to their own profile and medical history

---

> 💡 This project bridges healthcare and technology to provide a secure, intelligent, and role-based platform for managing patient records and assisting in diagnosis.

🌐 **GitHub Repo:** [AI Patient Record Analyser](https://github.com/premkumar-epic/ai-patient-record-analyser)

---
 ## **About me**