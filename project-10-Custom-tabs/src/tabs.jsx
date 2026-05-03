import "./tabs.css";
import { useState } from "react";

export default function Tabs({ tabsContent = [], onChange }) {
  const [currentTabsIndex, setcurrentTabsIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setcurrentTabsIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabsIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabsIndex] && tabsContent[currentTabsIndex].content}
      </div>
    </div>
  );
}
