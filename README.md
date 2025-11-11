# 📱 Interactive Job Board App (React Native)

An interactive **Job Board Mobile App** built for the **ProDev Frontend Engineering Program**.  
The app allows users to **explore, filter, and apply** for job postings, with real-time API integration, responsive layouts, and accessible forms — all optimized for mobile experience.

---

## 🧭 Overview

This project provides a hands-on opportunity to build a **real-world mobile application** using **React Native (Expo)** and modern frontend best practices.

Users can:
- View job listings dynamically fetched from an API.
- Filter by **category**, **location**, and **experience level**.
- Apply for jobs using an intuitive and accessible form.

---

## 🎯 Project Goals

### 🔗 API Integration
- Dynamically fetch and display job listings from an API.
- Handle loading and error states gracefully.

### 🎚️ Advanced Filtering
Allow users to refine results by:
- **Category** (Engineering, Marketing, Design)
- **Location** (Accra, Remote, etc.)
- **Experience Level** (Entry, Mid, Senior)

### 📱 Responsive & Accessible Design
- Works across all screen sizes.
- Accessible components with proper input validation and navigation.

### 🧾 Job Application Form
- Simple and accessible.
- Validates input (name, email, CV link, cover letter).
- Provides feedback on successful or failed submissions.

---

## 🧠 Key Learnings

This project helped strengthen my skills in:
- **React Native and Expo CLI**
- **Global state management** using Context API
- **API consumption** and data rendering
- **Responsive mobile layouts**
- **Form handling and validation**
- **Version control and collaboration workflow**

---

## 🛠️ Technologies Used

| Category | Tool |
|-----------|------|
| Framework | React Native (Expo) |
| State Management | Context API |
| Styling | React Native StyleSheet / Tailwind RN |
| Navigation | React Navigation |
| API Requests | Axios / Fetch API |
| Deployment | Expo Go / EAS Build |

---

## 📂 Project Structure

```plaintext
job-board-app/
│
├── assets/
│   └── images/                 # App images and icons
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── JobCard.js          # Displays job details
│   │   ├── FilterBar.js        # Filtering controls
│   │   ├── Loader.js           # Loading spinner component
│   │   └── ErrorMessage.js     # Error handling UI
│   │
│   ├── context/                # Global state management
│   │   └── JobContext.js
│   │
│   ├── screens/                # App screens
│   │   ├── HomeScreen.js       # Job listing and filters
│   │   ├── JobDetailScreen.js  # Job details page
│   │   └── ApplyScreen.js      # Job application form
│   │
│   ├── navigation/             # Stack or tab navigation setup
│   │   └── AppNavigator.js
│   │
│   ├── styles/                 # Global and shared styles
│   │   └── globalStyles.js
│   │
│   └── App.js                  # Main app entry
│
└── package.json
