import React, { createContext, useContext, useState, MouseEvent, useCallback } from 'react';

interface IContextMenuContext {
  menuPosition: { x: number; y: number } | null;
  menuType: string | null;
  showMenu: (e: MouseEvent, menuType: string) => void;
  closeMenu: () => void;
}

interface IContextMenuProviderProps {
  children: React.ReactNode;
}

const defaultContextValue: IContextMenuContext = {
  menuPosition: null,
  menuType: null,
  showMenu: () => {
    console.warn(
      'Default showMenu called. This should not happen if the provider is working correctly.'
    );
  },
  closeMenu: () => {}
};

const ContextMenuContext = createContext<IContextMenuContext>(defaultContextValue);

export const useContextMenu = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    console.error('useContextMenu must be used within a ContextMenuProvider');
  }
  return context;
};

export const ContextMenuProvider: React.FC<IContextMenuProviderProps> = ({ children }) => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);
  const [menuType, setMenuType] = useState<string | null>(null);

  const showMenu = useCallback((e: MouseEvent, menuType: string) => {
    e.preventDefault();
    setMenuType(menuType);
    setMenuPosition({ x: e.pageX, y: e.pageY });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuType(null);
    setMenuPosition(null);
  }, []);

  const contextValue = {
    menuPosition,
    menuType,
    showMenu,
    closeMenu
  };

  return <ContextMenuContext.Provider value={contextValue}>{children}</ContextMenuContext.Provider>;
};
