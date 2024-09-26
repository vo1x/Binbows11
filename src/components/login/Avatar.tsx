const AVATAR_URL = 'images/avatar.gif';

interface IAvatar {
  username: string;
}

const Avatar: React.FC<IAvatar> = ({ username }) => {
  return username !== '' ? (
    <div className="w-36 h-36 relative rounded-full border-none bg-[#017EDD] flex items-center justify-center">
      <span className="text-5xl text-white">{username[0].toUpperCase()}</span>
    </div>
  ) : (
    <img
      src={AVATAR_URL}
      alt="user avatar"
      loading="lazy"
      className="w-36 h-36 rounded-full border-2 border-white"
    />
  );
};

export default Avatar;
