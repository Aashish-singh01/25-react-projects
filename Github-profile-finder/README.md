# 🔍 GitHub Profile Finder

A simple React application that allows users to search GitHub profiles and view profile details using the GitHub API.

---

## 🚀 Features

* 🔎 Search GitHub users by username
* 👤 Display profile image and name
* 📊 Show followers, following, and repositories
* 📅 Show account creation date
* ⏳ Loading state handling
* 🌐 Fetch data from GitHub API

---

## 🛠️ Tech Stack

* React
* JavaScript (ES6)
* CSS
* GitHub REST API

---

## 📂 Project Structure

```bash
src/
│── App.jsx
│── User.jsx
│── App.css
```

---

## ⚙️ How It Works

1. User enters a GitHub username
2. App fetches profile data from GitHub API
3. Data is stored using React state
4. Profile information is displayed dynamically

---

## 📡 API Used

```bash
https://api.github.com/users/{username}
```

---

## ▶️ Run Locally

Clone the project

```bash
git clone https://github.com/your-username/github-profile-finder.git
```

Go to the project directory

```bash
cd github-profile-finder
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 🧠 Concepts Used

* useState
* useEffect
* API Fetching
* Conditional Rendering
* Props
* Async/Await

---

## 🎯 Future Improvements

* Error handling for invalid usernames
* Dark mode
* Search on Enter key
* Better UI animations
* Responsive design improvements


