import { KeyboardEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';

import Avatar from '../components/login/Avatar';
import Tooltip from '../components/login/Tooltip';
import Wallpaper from '../components/ui/Wallpaper';

const LOCK_SCREEN_BG_URL = 'images/lockscreen_wallpaper.webp';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const username = useUserStore((state: any) => state.username);
  const updateUsername = useUserStore((state: any) => state.updateUsername);

  const [usernameInput, setUsernameInput] = useState<string>(username);

  const handleUsernameInput = (e: KeyboardEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (username !== value) {
      updateUsername(value);
    }
    console.log(username);
  };

  return (
    <div className="relative flex h-screen w-screen justify-center items-center">
      <Wallpaper url={LOCK_SCREEN_BG_URL} type="lockscreen" />
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-1">
          <Avatar username={usernameInput} />

          <input
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleUsernameInput(e);
              }
            }}
            value={usernameInput}
            required={true}
            onChange={(e) => setUsernameInput(e.target.value)}
            type="text"
            placeholder="Enter your username"
            className="bg-transparent outline-none border-none py-2 text-white placeholder-white font-semibold text-3xl text-center"
          />
        </div>
        <input
          type="password"
          className="bg-[#252324] rounded-md text-neutral-200 focus:border-b-white/15 outline-none text-lg p-2 px-4 w-80 placeholder-neutral-400 border-2 border-b-3 border-white/15 border-b-[#017EDD]"
          placeholder="PIN"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (usernameInput !== '') return navigate('/desktop');
            }
          }}
        />
        <Tooltip tip="Enter a random username and password to login!">
          <span className="text-neutral-200 hover:text-white ">I forgot my pin</span>
        </Tooltip>
      </div>
    </div>
  );
};

export default Login;
