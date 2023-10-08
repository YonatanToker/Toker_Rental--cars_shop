import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/Components";
const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16  px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo3.jpg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Login"
          buttonType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
