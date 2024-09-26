import Wallpaper from '../components/ui/Wallpaper';
import Taskbar from '../components/desktop/Taskbar';

const DESKTOP_BG_URL = 'images/desktop_wallpaper.webp';

const Desktop: React.FC = () => {
  return (
    <div className="h-screen w-screen relative">
      <Wallpaper url={DESKTOP_BG_URL} type="desktop" />
      <Taskbar />
    </div>
  );
};

export default Desktop;
