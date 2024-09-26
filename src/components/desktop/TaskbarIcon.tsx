type TaskbarIconProps = {
  name: 'start' | 'explorer';
  size?: number;
};

const TaskbarIcon: React.FC<TaskbarIconProps> = ({ name, size = 32 }) => {
  const ICON = `/icons/${name}.ico`;
  return (
    <div className={`p-2 rounded-lg hover:bg-neutral-200/15`}>
      <img src={ICON} alt="Start" className={``} width={`${size}`} />
    </div>
  );
};

export default TaskbarIcon;
