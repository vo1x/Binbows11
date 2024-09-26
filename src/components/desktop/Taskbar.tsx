import React from 'react';
import TaskbarIcon from './TaskbarIcon';

const Taskbar: React.FC = () => {
  return (
    <div className="absolute bottom-0 backdrop-blur-[128px] border-t border-t-neutral-700 bg-neutral-800 bg-opacity-50 h-max p-1 px-4 w-full overflow-hidden flex items-center   justify-center text-white">
      <div className="item-center flex">
        <TaskbarIcon name="start" />
      </div>
    </div>
  );
};

export default Taskbar;
