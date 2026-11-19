import { Link } from "react-router-dom"

export function NavMenu(){
    const navItems = ["Women","Men","Kids","Accessories","Collection","Brands"]
    return <>
    <nav className="hidden list-none justify-around gap-4 md:flex">
        {navItems.map(item=>
            <li key={item}>
                <Link to={item.toLowerCase()}>{item}</Link>
            </li>
        )}
    </nav>
    </>
}