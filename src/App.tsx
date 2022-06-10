import { Outlet } from 'react-router-dom';

import { BottomBar, TopBar } from './components';

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
      <BottomBar />
    </>
  );
}

export default App;
