interface IWallpaperProps {
  url: string;
  type: 'desktop' | 'lockscreen';
}

const Wallpaper: React.FC<IWallpaperProps> = ({ url, type }) => {
  return (
    <img
      src={url}
      alt="desktop background"
      loading="lazy"
      className={`absolute inset-0 -z-10 h-full w-full object-cover object-center ${type == 'lockscreen' && 'blur-lg bg-white/50'}`}
      style={{ userSelect: 'none', WebkitUserSelect: 'none', pointerEvents: 'none' }}
      draggable="false"
    />
  );
};

export default Wallpaper;
