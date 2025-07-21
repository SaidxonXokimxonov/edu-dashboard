import NavLogo from "../../assets/img/nav-logo.png";

export default function Navbar() {
  return (
    <div className="w-[calc(100vw-300px)] h-[80px] my-4 px-5 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="w-[110px] h-[77px]" src={NavLogo} alt="" />
        <p className="text-2xl">Memo</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.75C17.0858 2.75 21.25 6.91421 21.25 12C21.25 17.0858 17.0858 21.25 12 21.25C6.91421 21.25 2.75 17.0858 2.75 12C2.75 6.91421 6.91421 2.75 12 2.75Z"
            stroke="#253238"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 12H16"
            stroke="#253238"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16V8"
            stroke="#253238"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="flex justify-between w-[400px] rounded-full bg-[#617E8C1A] px-4 py-2">
        <input className="border-none outline-none" type="text" placeholder="Search" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_223_2956)">
            <path
              d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="#617E8C"
            />
          </g>
          <defs>
            <clipPath id="clip0_223_2956">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
