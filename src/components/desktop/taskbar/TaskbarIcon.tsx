interface ITaskbarIconProps {
  name: 'start' | 'explorer' | 'edge' | 'store' | 'taskview' | 'terminal' | 'search';
  size?: number;
}

const TaskbarIcon: React.FC<ITaskbarIconProps> = ({ name, size = 32 }) => {
  const ICON = `/icons/${name}.ico`;
  return (
    <div
      draggable="false"
      className={`flex items-center justify-center p-2 rounded-lg hover:bg-neutral-200/15 bg-transparent select-none`}
    >
      <img src={ICON} alt={name} className={`p-0 pointer-events-none`} width={size} height={size} />
    </div>
  );
};

export default TaskbarIcon;
