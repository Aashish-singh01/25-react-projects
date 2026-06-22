# 🌗 Light/Dark Mode Toggle (React + Custom Hook)

## 📌 Overview

This project is a **Light/Dark Theme Toggle App** built using React.
It uses a **custom hook (`useLocalStorage`)** to store the selected theme in the browser, so the preference persists even after refreshing the page.

---

## 🚀 Features

* 🌗 Toggle between Light and Dark mode
* 💾 Theme preference saved in localStorage
* ⚛️ Custom React Hook (`useLocalStorage`)
* 🔁 Persistent UI state after refresh
* 🎯 Simple and clean UI

---

## 🛠️ Tech Stack

* React.js
* JavaScript (ES6+)
* CSS
* Browser LocalStorage API

---

## 📁 Project Structure

```id="0k1exq"
src/
│── App.jsx
│── useLocalStorage.js
│── App.css
```

---

## 💡 How It Works

* `useLocalStorage` hook manages state + localStorage sync
* When user clicks **Change Theme**, state updates
* Theme value (`light` / `dark`) is stored in localStorage
* On reload, stored theme is automatically applied

---

## 🌍 Deployment

This project can be deployed using:

* Vercel
* Netlify

---

## 🎯 Learning Outcomes

* Creating and using custom React hooks
* Managing persistent state with localStorage
* Handling side effects using `useEffect`
* Building reusable logic in React

---

## 📸 Preview

(Add screenshot or GIF here)

---

## 🙌 Author

Ashish Singh
