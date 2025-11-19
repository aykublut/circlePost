"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Login from "./_components/Login";
import Register from "./_components/Register";
import useStore from "@/store/zustand";

const AuthPage = () => {
  const { mode, setMode, nextPage } = useStore();

  return (
    <motion.div
      key={nextPage ? "next" : "current"}
      initial={{ opacity: nextPage ? 1 : 0 }}
      animate={{ opacity: nextPage ? 0 : 1 }}
      className="relative min-h-screen  w-full flex items-center justify-center overflow-hidden text-white/90"
    >
      {/* Arka planda sağda büyük fotoğraf */}
      <motion.div
        initial={{ opacity: 0.3, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-0 md:right-10 hidden top-0 bottom-0 py-5 h-90 md:block"
      >
        <Image src="/bennnnn.png" alt="bg-person" width={500} height={900} />
      </motion.div>

      {/* Orta kart */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl p-8"
      >
        {/* Login/Register Switch */}
        <div className="flex justify-center mb-6 ">
          <div className="flex gap-4 bg-white/10 rounded-2xl p-1">
            <button
              onClick={() => setMode("login")}
              className={`px-5 py-2 text-sm rounded-xl font-medium transition-none
                ${mode === "login" ? "bg-white/30 text-white" : "text-gray-300"}
              `}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`px-5 py-2 text-sm rounded-xl font-medium transition-none
                ${
                  mode === "register"
                    ? "bg-white/30 text-white"
                    : "text-gray-300"
                }
              `}
            >
              Register
            </button>
          </div>
        </div>

        {/* Formlar - Soft büyüme animasyonu */}
        <motion.div
          key={mode} // login/register değiştiğinde yeniden animasyon uygular
          initial={{ opacity: 0.8, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {mode === "login" ? <Login /> : <Register />}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AuthPage;
