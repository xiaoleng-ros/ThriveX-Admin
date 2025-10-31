import { Link } from 'react-router-dom';
import DropdownUser from './DropdownUser';
import DarkModeSwitcher from './DarkModeSwitcher';
import logo from '/logo.png';

const Header = (props: { sidebarOpen: string | boolean | undefined; setSidebarOpen: (arg0: boolean) => void }) => {
  return (
    <header className="sticky top-0 z-[999] flex w-full bg-light-gradient dark:bg-dark-gradient drop-shadow-1 dark:drop-shadow-none backdrop-blur-lg">
      <div className="flex flex-grow items-center justify-between px-4 py-3 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center">
          <div className="flex items-center gap-4 lg:hidden">
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="z-[99999] block rounded-sm border border-stroke bg-white p-1 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
            >
              <span className="relative block h-6 w-6 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!w-full delay-300'}`}></span>
                  <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && 'delay-400 !w-full'}`}></span>
                  <span className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!w-full delay-500'}`}></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!h-0 !delay-[0]'}`}></span>
                  <span className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && '!h-0 !delay-200'}`}></span>
                </span>
              </span>
            </button>

            <Link className="block flex-shrink-0 lg:hidden" to="/">
              <img src={logo} alt="logo" className="w-8" />
            </Link>
          </div>

          <div className="hidden xs:block ml-5 2xl:ml-0">有些梦虽然遥不可及，但并不是不可能实现</div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li className="hidden md:block">
              <a href="https://github.com/LiuYuYang01/ThriveX-Admin" target="_blank" className="hover:text-primary text-sm" rel="noreferrer">
                开源不易，赏个 Star 吧！！！
              </a>
            </li>

            <DarkModeSwitcher />
          </ul>

          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
