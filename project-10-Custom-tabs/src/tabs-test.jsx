// this is  parent component
import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return <h1>Some Random Content</h1>;
}

export default function TabsTest() {
  const tabs = [
    {
      label: "Tabs 1",
      content: <div>This is content for Tabs 1 </div>,
    },
    {
      label: "Tabs 2",
      content: <div>This is content for Tabs 2 </div>,
    },
    {
      label: "Tabs 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabsIndex) {
    console.log(currentTabsIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
