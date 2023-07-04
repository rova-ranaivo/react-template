import { Outlet } from 'react-router-dom';
import DesktopMenu from '../Desktop-menu/DesktopMenu';

const RootLayout = () => {
  return (
    <>
      <DesktopMenu />
      <Outlet />
    </>
  );
}

export default RootLayout;