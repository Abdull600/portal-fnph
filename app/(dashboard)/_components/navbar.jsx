import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import styles from "./navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  return (
    <div className="bg-[#fff] flex items-center h-[74px] px-[20px] md:px-[40px] lg:px-[60px] py-5 justify-between border-[1px] border-[##E4E7EC]">
      <div className="flex md:hidden">
        <Link href="/dashboard">
          <Image
            height={50}
            width={50}
            className="rounded-full"
            src="/logo.svg"
            alt="logo image"
          />
        </Link>
      </div>
      <div className="hidden bg-[#E4E7EC] gap-1 rounded h-[50px] py-5 px-1 lg:w-[500px] md:w-[300px]  md:flex flex-row items-center">
        <IoSearchOutline size={30} />
        <input type="text" className="py-3 outline-none w-full bg-transparent" placeholder="Search here..." />
      </div>
      <div className="hidden md:flex gap-3 items-center justify-center">
        <Image
          height={50}
          width={50}
          className="rounded-full"
          src="/images/avatar.png"
          alt="user avatar"
        />
        <h3 className={styles.student_name}>Adekunle Sukanmi</h3>
        <IoIosArrowDown size={25} />
      </div>
      <div className="md:hidden flex">
        <GiHamburgerMenu
          size={30}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;