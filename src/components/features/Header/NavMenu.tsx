export function NavMenu(){
    const navItems = ["Women","Men","Kids","Accessories","Collection","Brands"]
    return <>
    <nav className="hidden list-none justify-around gap-4 md:flex">
        {navItems.map(item=>
            <li key={item}>
                <a href={item} >
                {item}
                </a>
            </li>
        )}
    </nav>
    </>
}