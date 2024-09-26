import React from 'react';
import TaskbarIcon from './TaskbarIcon';

const Taskbar: React.FC = () => {
  return (
    <div className="absolute bottom-0 backdrop-blur-[128px] border-t border-t-neutral-700 bg-neutral-800 bg-opacity-50 h-max p-1 w-full overflow-hidden flex items-center justify-center text-white">
      <div className="flex items-center space-x-3">
        <TaskbarIcon name="start" />
        <TaskbarIcon name="taskview" />
        <TaskbarIcon name="explorer" />
        <TaskbarIcon name="store" />
        <TaskbarIcon name="terminal" />
      </div>
    </div>
  );
};

export default Taskbar;
