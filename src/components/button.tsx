interface BtnProps {
  title: string;
  px: string;
  py: string;
  bgColor: string;
}

export const Button = ({ title, px, py, bgColor }: BtnProps) => {
  return (
    <button
      className={`bg-blue-500 text-white cursor-pointer font-semibold rounded-lg 
        hover:bg-blue-600 ${px} ${py} ${bgColor}`}
    >
      {title}
    </button>
  );
};
