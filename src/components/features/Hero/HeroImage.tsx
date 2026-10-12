import type { HeroProps } from "./HeroTypes";

export function HeroImage({hero}:{hero:HeroProps}){
    return <div className="col-start-1 row-start-1 w-full h-full">
                <img src={hero.img} className="w-full h-full object-cover"></img>
            </div>
}