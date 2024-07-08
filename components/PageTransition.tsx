"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";


import React, { ReactNode } from "react";

const PageTransition = ({children}: {children: ReactNode}) => {
    const pathname = usePathname();
    return <AnimatePresence>
        <div key={pathname}>
        <motion.div
        initial={{ opacity: 0.5 }} 
        animate={{ 
            opacity: 0,
            transition:{ delay: 0.5, duration: 0.4, ease: "easeInOut"} }} 
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" 
        />
        {children}
        </div>
        </AnimatePresence>;
};
  
  export default PageTransition;