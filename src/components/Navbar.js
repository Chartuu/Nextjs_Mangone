export default function Navbar() {
    return (
        <nav className="bg-primary text-text p-4 flex justify-between">
            <h1 className="text-5xl font-bold font-customFont">Reitax</h1>
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
        </nav>
    );
}
