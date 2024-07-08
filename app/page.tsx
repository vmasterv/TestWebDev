import Photo from "@/components/Photo"
import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import Stats from "@/components/Stats"
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section className="h-full">
      <div className="container ms-auto h-full"></div>
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Software Developer
            </span>
            <h1 className="h1">
              Hi, I am <br/><span className="text-accent">John Doe</span>
            </h1>
            <div className="flex flex-col items-center sm:items-center">
              <p className="max-w-[500px] mb-9 text-white">
                I excel at digital design and frontend programming
                I excel at digital design
                I excel at frontend programming
              </p>
            
              <div className="flex flex-col items-center space-y-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <FiDownload className="text-xl" />
                  <span>Download CV</span>
                </Button>
            
                <div className="mb-8 xl:mb-0">
                  <Social 
                    containerStyles="flex gap-6" 
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"               
                  />
                </div>
              </div>
            
              
            </div>
          
        </div>
        <div>
            <Photo />
          </div>
      </div>
      <Stats />
    </section>

  )
}