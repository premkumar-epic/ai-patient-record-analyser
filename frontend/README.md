# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# AI-Driven Patient Record Analysis Project

**Project Name**: AI-Driven Patient Record Analysis
**Stack**: React (Frontend), Flask (Backend), Tailwind CSS
**Features**:
- Admin Portal
- Doctor Portal
- Patient Portal
- Role-based Access Control (Admin, Doctor, Patient)
- Patient Record Management
- AI Diagnosis Suggestions
- Login/Sign-Up functionality

## 1. Project Overview

This project is a full-stack web application, leveraging React for a dynamic frontend and Flask for a robust backend. The primary goal is to streamline interaction among administrators, doctors, and patients through dedicated, role-specific portals. The application incorporates AI to provide early diagnosis suggestions based on patient-reported symptoms, offers a comprehensive dashboard for doctors to manage their patient load, and provides patients with secure access to their personalized medical records.

## 2. Core Features and Description

### 2.1 Admin Portal

**Features:**
- **Full System Access:** Unrestricted access to all data, including patient records, doctor profiles, and AI diagnostic outputs.
- **Comprehensive Data Management:** Capabilities to edit, delete, and modify any information across the platform, including patient and doctor details.
- **User Lifecycle Management:** Functionality to add, edit, and remove doctor and patient accounts, as well as assign patients to specific doctors.
- **Role and Permission Control:** Centralized management of user roles (Admin, Doctor, Patient) and their associated access privileges.
- **Holistic Data View:** Ability to view all patient information, encompassing diagnosis history, reported symptoms, laboratory findings, and personal details.

### 2.2 Doctor Portal

**Features:**
- **Integrated Patient Dashboard:** A personalized dashboard displaying a doctor's assigned patients.
    - **Prioritized Summary:** Highlights patients requiring immediate attention or those with the most critical conditions.
    - **Detailed Patient Listing:** A comprehensive, filterable list of all assigned patients, sortable by disease or other relevant parameters.
- **In-depth Patient Profiles:** Access to detailed medical information for each patient:
    - **Basic Demographics:** Name, Age, Gender.
    - **Vital Signs:** Key physiological indicators such as blood pressure and heart rate.
    - **Longitudinal Medical History:** A chronological record of reported symptoms and diagnoses made over time.
    - **Diagnostic Insights:** Access to laboratory reports and other test results.
    - **Treatment Regimen:** Information on current medications and established treatment plans.
- **Enhanced Record Management:** Functionality to add new patient profiles, update existing patient records, and contribute new diagnosis suggestions based on observed symptoms and findings.

### 2.3 Patient Portal

**Features:**
- **Secure Personal Dashboard:** Upon login, patients gain access to a dashboard displaying only their own medical information.
- **Comprehensive Personal Profile:** Detailed view of their name, age, gender, vital signs, reported symptoms, diagnosis history, laboratory reports, and current medications.
- **Read-Only Data Access:** Patients can view their complete medical history but do not have the ability to edit any information.

## 3. Detailed Page Structure

### 3.1 Home Page

- **Purpose**: To provide a welcoming introduction to the platform and highlight its key functionalities.
- **UI/UX Design**:
    - **Visually Appealing Layout**: Modern and responsive design ensuring a positive user experience.
    - **Feature Showcase**: Clearly presents the platform's core capabilities: AI-driven diagnosis, role-specific portals, and the integrated role-based access control system.
    - **Intuitive Navigation**: Prominent buttons or panels facilitating easy navigation to the login page or direct access to portals for logged-in users.
    - **Clear Authentication Options**: Easily accessible Login and Sign-up buttons for users based on their designated role.

### 3.2 Login and Sign-Up Page

- **Purpose**: To authenticate users and allow new users to register for the platform.
- **Login Flow**:
    - Standard Email and Password input fields for secure authentication.
    - **Intelligent Redirection**: Upon successful login, the system automatically redirects users to their role-specific dashboard (Admin Dashboard, Doctor Dashboard, or Patient Profile Page).

### 3.3 Admin Dashboard

- **Features**:
    - **Centralized User Management**: Tools for administrators to add new doctors and patients, modify existing user profiles, and delete accounts as needed.
    - **Comprehensive Record Oversight**: Full access to view and modify all patient data within the system.
    - **Robust Access Control Management**: Interface for assigning user roles and managing the associated access privileges for each role.
    - **Platform Activity Overview**: A summary section providing key metrics such as the total number of registered patients and doctors.

### 3.4 Doctor Dashboard

- **Features**:
    - **Assigned Patient Overview**: Displays a list of patients assigned to the logged-in doctor, including their most recent diagnosis and reported symptoms.
    - **Prioritized Patient View**: Highlights patients requiring urgent attention based on their condition or recent updates.
    - **Detailed Patient Listing**: A comprehensive and sortable list of all the doctor's patients, allowing for filtering by disease, severity, or other relevant criteria.
    - **Direct Patient Profile Access**: Clicking on a patient's name provides immediate access to their detailed medical history and profile.

### 3.5 Patient Profile Page

- **Features**:
    - **Secure Self-View**: Patients can only access and view their own personal medical information.
    - **Complete Information Display**: Presents personal details, comprehensive medical history, vital signs, reported symptoms, diagnosis history, laboratory reports, and current medications.

## 4. UI/UX Design

- **Responsive and Modern Design**: Ensures a seamless and user-friendly experience across various devices, including desktops and mobile phones.
- **Intuitive Navigation Panels**: Utilizes a sidebar or top navigation bar for quick and easy access to the features relevant to each user role.
- **Organized Data Presentation**: Employs cards to display patient data in a clear and structured manner, and modals for streamlined addition or editing of records.
- **Rapid Styling with Tailwind CSS**: Leverages Tailwind CSS for efficient and responsive design customization, ensuring a consistent and modern aesthetic.

## 5. Backend Details (Flask)**

- **RESTful Flask API**: The backend is constructed using the Flask framework to expose a well-defined RESTful API.
    - **Key Endpoints**: Includes essential endpoints for user authentication (`/login`, `/signup`), patient data management (`/patients`, `/patients/{id}`), doctor information (`/doctors`), and diagnosis-related functionalities (`/diagnosis`).
    - **Secure Authentication with JWT**: Implements JSON Web Tokens (JWT) for secure management of user login sessions and authentication.
    - **AI-Powered Diagnosis**: Integrates a foundational AI model within the backend to provide preliminary diagnosis suggestions based on the patient's reported symptoms.

## 6. Authentication and Authorization

- **Secure JWT Authentication**: Employs JWT for robust and secure user authentication and session management.
- **Role-Based Access Control**: Implements a system where access to specific data and functionalities is strictly controlled based on the user's assigned role (Admin, Doctor, or Patient).
- **Comprehensive User Management**:
    - Administrators have the authority to manage all user accounts.
    - Doctors and patients can securely register and log in using their email addresses and passwords.

## 7. Expected Behavior and Flow

- **Administrator**: Possesses complete control over all data and user accounts, with the ability to modify records and manage the entire user base.
- **Doctor**: Has access to the medical history of their assigned patients and the ability to update patient records and contribute new diagnoses.
- **Patient**: Can securely access and view their personal medical records, diagnoses, and reports, with all data access being read-only.