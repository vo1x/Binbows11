import React from 'react';

interface IWallpaperProps {
  url: string;
  type: 'desktop' | 'lockscreen';
}

const Wallpaper: React.FC<IWallpaperProps> = ({ url, type }) => {
  return (
    <div
      className={`absolute inset-0 -z-10 h-full w-full bg-cover bg-center bg-no-repeat select-none pointer-events-none ${
        type === 'lockscreen' ? 'blur-lg bg-white/50' : ''
      }`}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
};

export default Wallpaper;
