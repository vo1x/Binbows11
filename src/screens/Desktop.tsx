import React, { MouseEvent, useCallback } from 'react';
import Wallpaper from '../components/ui/Wallpaper';
import Taskbar from '../components/desktop/taskbar/Taskbar';
import { ContextMenuProvider, useContextMenu } from '../context/ContextMenuContext';
import ContextMenu from '../components/ui/ContextMenu';

const DESKTOP_BG_URL = 'images/desktop_wallpaper.webp';

const DesktopContent: React.FC = () => {
  const contextValue = useContextMenu();

  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (contextValue && contextValue.showMenu) {
        contextValue.showMenu(e, 'desktop');
      } else {
        console.error('showMenu is not available in the context');
      }
    },
    [contextValue]
  );

  return (
    <div onContextMenu={handleContextMenu} className="h-screen w-screen relative">
      <Wallpaper url={DESKTOP_BG_URL} type="desktop" />
      <Taskbar />
      <ContextMenu />
    </div>
  );
};

const Desktop: React.FC = () => {
  return (
    <ContextMenuProvider>
      <DesktopContent />
    </ContextMenuProvider>
  );
};

export default Desktop;
