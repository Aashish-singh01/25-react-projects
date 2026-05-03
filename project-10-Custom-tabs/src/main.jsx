import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './tabs.jsx'
import Tabs from './tabs.jsx'
import TabsTest from './tabs-test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabsTest />
  </StrictMode>,
)
