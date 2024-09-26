import { useState } from 'react';

interface ITooltipProps {
  tip: string;
  children?: React.ReactNode;
}

const Tooltip: React.FC<ITooltipProps> = ({ tip, children }) => {
  const [isTipVisible, setIsTipVisible] = useState<boolean>(false);

  const handleMouseEnter = () => setIsTipVisible(true);
  const handleMouseLeave = () => setIsTipVisible(false);

  return (
    <div className="relative flex flex-col items-center w-max cursor-pointer">
      <div
        className="h-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        {children}
      </div>

      {isTipVisible && (
        <span
          id="tooltip"
          className="absolute top-full text-neutral-200 bg-black/50 w-96 rounded-md p-2 transition-opacity duration-200 opacity-100 z-10"
          role="tooltip"
        >
          {tip}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
