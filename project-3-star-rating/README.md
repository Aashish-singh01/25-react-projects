# ⭐ Star Rating App (React)

A simple and interactive **Star Rating Component** built using React.
Users can hover over stars to preview ratings and click to select their rating.

---

## 🚀 Features

* ⭐ Dynamic star rendering
* 🖱️ Hover effect (preview rating)
* 🎯 Click to set rating
* 🔄 Real-time UI update
* 🎨 Clean and simple UI

---

## 🛠️ Tech Stack

* React (useState)
* JavaScript (ES6)
* CSS
* React Icons

---

## 📂 Project Structure

```
src/
│── App.jsx
│── style.css
```

---

## ⚙️ How It Works

* `useState` is used to manage:

  * `rating` → selected rating
  * `hover` → temporary hover state
* Stars are generated dynamically using an array loop
* Mouse events control the behavior:

  * `onMouseMove` → preview rating
  * `onClick` → set rating
  * `onMouseLeave` → reset hover to selected rating

---

## 📸 Preview

Star rating system where:

* Hover highlights stars ⭐
* Click locks the rating 🎯

---

## ▶️ Run Locally

1. Clone the repository

```
git clone https://github.com/your-username/star-rating-app.git
```

2. Navigate to project folder

```
cd star-rating-app
```

3. Install dependencies

```
npm install
```

4. Start development server

```
npm run dev
```

---

## 🎯 Future Improvements

* Half star rating ⭐✨
* Save rating to backend/API
* Add animations
* Mobile responsiveness improvements

live demo   (https://star-rating-smoky.vercel.app/)



This project is open-source and available under the MIT License.
