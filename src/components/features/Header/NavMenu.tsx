export function NavMenu(){
    const navItems = ["Women","Men","Kids","Accessories","Collection","Brands"]
    return <>
    <nav className="flex list-none justify-around gap-4">
        {navItems.map(item=>
            <li key={item}>
                <a href="" >
                {item}
                </a>
            </li>
        )}
    </nav>
    </>
}