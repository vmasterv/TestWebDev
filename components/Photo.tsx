"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="flex flex-col items-center">
            <motion.div 
            initial = {{ opacity: 0 }}
            animate = {{ opacity: 1, transition: { duration: 2.4, delay: 1 }}} 
           
        
            className="w-[265px] h-[265px] sm:w-[200px] sm:h-[200px] xl:w-[477px] xl:h-[477px] relative mix-blend-lighten">
                <Image 
                    src="/assets/robot-8871646_1280.jpg" 
                    priority quality={100} 
                    fill
                    alt="/assets/robot-8871646_1280.jpg"
                    className="object-contain rounded-full"
                    />
            
            <motion.svg 
                className="w-[265px] h-[265px] xl:w-[480px] xl:h-[480px] absolute"
                fill="transparent"
                viewBox={`0 0 506 506`}
                xmlns={`http://www.w3.org/2000/svg`}
                >
                <motion.circle 
                    cx={`253`}
                    cy={`253`}
                    r={`253`}
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 0 0", "16 25 95 72", "4 250 2 2"],
                        rotate: [120, 360],
                    }}
                    transition={
                        {
                            duration: 20,
                            delay: 1.2,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }
                    }
                />
            </motion.svg>

            </motion.div>
        </div>
    );
}

export default Photo;