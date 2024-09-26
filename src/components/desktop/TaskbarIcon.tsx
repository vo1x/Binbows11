type TaskbarIconProps = {
  name: 'start' | 'explorer';
};

import StartIcon from '../icons/StartIcon';

const TaskbarIcon: React.FC<TaskbarIconProps> = ({ name }) => {
  if (name === 'start')
    return (
      <div className='p-2 rounded-lg hover:bg-neutral-200/15'>
        <StartIcon />
      </div>
    );
};

export default TaskbarIcon;
