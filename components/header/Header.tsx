"use client";
import Link from "next/link";
import { easeIn, motion } from "motion/react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, SearchIcon, User, UserPen } from "lucide-react";
import { ButtonGroup } from "../ui/button-group";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  const { status } = useSession();
  const [onCustomize, setOnCustomize] = useState(false);

  const handleCustomize = () => {
    if (pathname === "/userProfile") {
      setOnCustomize(false);
      router.push("/");
    } else {
      setOnCustomize(true);
      router.push("/userProfile");
    }
  };
  const pathname = usePathname();
  const [headerShadow, setHeaderShadow] = useState("shadow-sm shadow-white/30");
  useEffect(() => {
    pathname !== "/userProfile" && setOnCustomize(false);
    if (pathname === "/contact") {
      setHeaderShadow("shadow-xl shadow-orange-800/70");
    } else {
      setHeaderShadow("shadow-sm shadow-white/30");
    }
  }, [pathname]);
  const router = useRouter();

  const links = [
    { name: "Posts", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    status === "authenticated" && (
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: easeIn }}
        className={"relative flex justify-center"}
      >
        <div
          className={`w-full font-extralight font-sans absolute text-2xl top-0 left-0 flex py-4 px-5 md:px-7 lg:px-20 text-white z-20 border-b border-white/30 items-center hover:backdrop-blur-[2px]  ${headerShadow} backdrop-blur-[1px] transition-all duration-300 hover:bg-black/20 bg-black/10`}
        >
          {/* Logo */}
          <div className="flex-1 flex gap-4 sm:gap-10 lg:gap-8 items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="rounded-md bg-white/50  hover:bg-white/70 p-1 cursor-pointer transition-all "
            >
              <Link href="/">
                <Image
                  src="/logo.png"
                  width={1016}
                  height={303}
                  className="w-20 h-auto hidden lg:block"
                  alt="logo"
                />
                <Image
                  src="/lg-logo.png"
                  width={1016}
                  height={303}
                  className="w-5 rounded-full block lg:hidden"
                  alt="logo"
                />
              </Link>
            </motion.div>
            <div className=" flex lg:hidden  items-center justify-center">
              <nav className="flex gap-2 sm:gap-8  justify-center items-center">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group "
                  >
                    <motion.h2
                      initial={{ opacity: 0.7, y: -5 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 "
                    >
                      {link.name}
                    </motion.h2>
                    <span
                      className={
                        link.href === pathname
                          ? `absolute bottom-0 left-0  h-0.5 bg-white/70 w-full transition-all duration-300`
                          : `absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300`
                      }
                    />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 hidden lg:flex  items-center justify-center">
            <nav className="flex gap-10 justify-center items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group "
                >
                  <motion.h2
                    initial={{ opacity: 0.7, y: -5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-medium text-white/80 group-hover:text-white transition-colors duration-300 "
                  >
                    {link.name}
                  </motion.h2>
                  <span
                    className={
                      link.href === pathname
                        ? `absolute bottom-0 left-0  h-0.5 bg-white/70 w-full transition-all duration-300`
                        : `absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300`
                    }
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0.2, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1  flex justify-end gap-3"
          >
            <ButtonGroup className="bg-slate-400/10 rounded-sm">
              <Input
                className="focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0"
                placeholder="Search..."
              />
              <Button
                variant="outline"
                className="bg-transparent hover:text-white hover:bg-transparent border-0 text-white/70"
                aria-label="Search"
              >
                <SearchIcon />
              </Button>
            </ButtonGroup>

            <div className="w-42 min-w-42 relative bg-slate-300/40 rounded-full px-1">
              <div className="absolute top-1 rounded-full left-17 cursor-pointer p-1 z-30 hover:bg-white/70">
                <LogOut
                  onClick={() => signOut({ callbackUrl: "/auth" })}
                  className="text-red-500/80"
                  size={20}
                />
              </div>
              <div onClick={() => handleCustomize()} className="relative ">
                <motion.div
                  className="w-9 h-9 z-30 flex"
                  initial={{ x: 0 }}
                  animate={{ x: onCustomize ? 120 : 0 }}
                >
                  <Avatar className="w-full h-full  ">
                    <AvatarImage src="/aykut.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </motion.div>
                <User className="absolute left-1 top-1.5 w-6 h-6 -z-1" />
                <UserPen className="absolute right-1 w-6 h-6 top-1.5 -z-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  );
};

export default Header;
