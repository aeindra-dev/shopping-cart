import { useEffect,useState } from "react";
import {Logo} from "./Logo";
import {HeaderActionIcons} from "./HeaderActionIcons";
import { NavMenu } from "./NavMenu";
export default function Header(){
    const [vismode, setVismode] = useState<boolean>(false);

    useEffect(()=>{
        document.documentElement.classList.toggle("dark",vismode);
    },[vismode]);

    const toggleDarkMode = ()=>setVismode(prev=>!prev);
    return <>
    <div className="flex justify-around items-center">
        <Logo />
        <NavMenu/>
        <HeaderActionIcons onToggleDarkMode={toggleDarkMode}/>
    </div>
    </>
}