import { HeroText } from "./HeroText";
import { HeroData } from "./HeroData";
import { HeroImage } from "./HeroImage";
import { useEffect,useState } from "react";

export default function HeroSection(){
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    // Represents an object inside the array
    const currentSlide = HeroData[currentIndex];

     // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % HeroData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return <>
            <section className="relative grid grid-cols-1 w-full min-h-150 overflow-hidden p-0.5">
                <HeroText hero={currentSlide} />
                <HeroImage hero={currentSlide} />
            </section>
    </>
}