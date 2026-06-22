import { useContext } from "react";
import { featureFlagsContext } from "./context";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(featureFlagsContext);

  const componentToRender = [
    {
      key: "showDarkAndLightMode",
      Component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      Component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      Component: <RandomColor />,
    },
    {
      key: "showAccordion",
      Component: <Accordion />,
    },
    {
      key: "showTreeView",
      Component: <TreeView />,
    },
  ];

  function checkEnableFlag(getCurrentkey) {
    return enabledFlags[getCurrentkey];
  }

  if (loading) return <h1>Loading Data! Please wait</h1>;
  return (
    <div>
      <h1>Feature Flags</h1>
      {componentToRender.map((componentItem) =>
        checkEnableFlag(componentItem.key) ? componentItem.Component : null,
      )}
    </div>
  );
}
