export default function Navbar() {
    return (
        <nav className="bg-primary text-text p-4  ">
            <div className=" box-content md:box-border size-auto p-18">
            <h1 className="text-7xl font-bold font-customFont flex justify-center items-center">SPARK</h1>
            </div>
            <div className="flex justify-center items-center">
            <ul className="flex gap-4 font-customFont2">
                <li>
                    <a href="/" className="hover:text-accent">
                        Inicio
                    </a>
                </li>
                <li>
                    <a href="/catalogo" className="hover:text-accent">
                        Catalogo
                    </a>
                </li>
                <li>
                    <a href="/carrito" className="hover:text-accent">
                        Carrito
                    </a>
                </li>
            </ul>
            </div>
        </nav>
    );
}
