import useLocalStorage from "./useLocalStorage";

import "./App.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  // console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="contanier">
        <p>Hello World! </p>
        <button onClick={handleTheme}>Change Theme</button>
      </div>
    </div>
  );
}

export default App;
