# ❌⭕ Tic Tac Toe Game (React)

A simple and interactive **Tic Tac Toe game** built with React where two players can play turn by turn. The game automatically detects winners, draw conditions, and allows restarting the game.

---

## 🚀 Features

- ❌⭕ Two-player gameplay
- 🎯 Winner detection logic
- 🤝 Draw detection
- 🔄 Restart game functionality
- ⚡ Dynamic game status updates
- 🧠 Uses React Hooks (`useState`, `useEffect`)
- 🎨 Clean UI

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6)
- CSS

---

## 📂 Project Structure

```bash
src/
│── App.jsx
│── index.css
```

---

## ⚙️ How It Works

### Game Flow

1. Game starts with Player **X**
2. Players take turns clicking squares
3. After every move:
   - Winner logic checks all winning patterns
   - Draw condition is checked
   - Game status updates automatically

4. If a winner exists:
   - Displays winner message

5. Restart button resets the board

---

## 🧠 Concepts Used

- useState
- useEffect
- Conditional Rendering
- Event Handling
- Array Methods
- Component Reusability
- Game Logic Implementation

---

## 🏆 Winning Patterns

The game checks these combinations:

```javascript
[
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];
```

## 🚀 Live Demo

**Live Website:** https://tic-tac-toe-drab-five-87.vercel.app/

---

## ▶️ Run Locally

Clone the repository

```bash
git clone https://github.com/your-username/tic-tac-toe-react.git
```

Go to project folder

```bash
cd tic-tac-toe-react
```

Install dependencies

```bash
npm install
```

Run project

```bash
npm run dev
```

---

## 🙌 Author

Ashish Singh

---

## 📄 License

This project is open-source and available under the MIT License.
