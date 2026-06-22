# 📸 Image Slider / Carousel (React)

A responsive and dynamic **Image Slider (Carousel)** built using React.
It fetches images from an API and allows users to navigate through them using arrows and indicators.

---

## 🚀 Features

* 📡 Fetch images from API
* ⬅️➡️ Previous / Next navigation
* 🔘 Clickable indicators (dots)
* 🔄 Infinite looping (circular navigation)
* ⏳ Loading state handling
* ❌ Error handling
* 🎯 Smooth user interaction

---

## 🛠️ Tech Stack

* React (useState, useEffect)
* JavaScript (ES6)
* CSS
* React Icons

---

## 📂 Project Structure

```id="nq1qjf"
src/
│── App.jsx
│── index.css
```

---

## ⚙️ How It Works

* Images are fetched using `fetch()` inside `useEffect`
* State management:

  * `image` → stores fetched images
  * `currentSlide` → tracks active image index
  * `loading` → handles loading state
  * `errorMsg` → handles API errors
* Navigation:

  * Left arrow → previous image
  * Right arrow → next image
* Indicators (dots):

  * Click to jump to specific image

---

## 📸 Preview

* Displays one image at a time
* Navigate using arrows or dots
* Automatically loops from last → first and first → last

---

## ▶️ Run Locally

1. Clone the repository

```id="nphwlk"
git clone https://github.com/your-username/image-slider.git
```

2. Navigate to project folder

```id="dbsih7"
cd image-slider
```

3. Install dependencies

```id="mqxg6z"
npm install
```

4. Start development server

```id="oz9tbv"
npm run dev
```

---

## ⚠️ Important Fix

If indicators are not working, update this line:

```id="x8yqj4"
onClick={() => setCurrentSlide(index)}
```

---

## 🎯 Future Improvements

* 🔄 Auto-play slider
* ⏸️ Pause on hover
* 🎞️ Smooth transition animations
* 📱 Touch swipe support (mobile)
* 🎨 Better UI design

---

## 🙌 Author

Ashish Singh

---

## 📄 License

This project is open-source and available under the MIT License.
