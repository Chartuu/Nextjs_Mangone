import Image from 'next/image';

export default function Catalogo() {
    return (
        <div>
            <div className="min-h-screen bg-background text-text">
                <header className="bg-primary p-4">
                    <h1 className="text-4xl font-customFont text-center">Catálogo de Productos</h1>
                </header>
                <main className="p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* <!-- Producto 1 -->*/}
                        <div className="bg-secondary p-4 rounded-lg shadow-lg">
                            <Image 
                                src="/producto1.png" 
                                alt="Producto 1" 
                                width={300} // Ancho de la imagen
                                height={200} // Alto de la imagen
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h2 className="mt-4 text-xl font-customFont2">Producto 1</h2>
                            <p className="text-accent mt-2">Descripción breve del producto.</p>
                            <a href="/producto/1" className="text-accent hover:text-primary">Ver más</a>
                        </div>
                        {/* <!-- Producto 2 -->*/}
                        <div className="bg-secondary p-4 rounded-lg shadow-lg">
                            <Image 
                                src="/producto2.png" 
                                alt="Producto 2" 
                                width={300} 
                                height={200} 
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h2 className="mt-4 text-xl font-customFont2">Producto 2</h2>
                            <p className="text-accent mt-2">Descripción breve del producto.</p>
                            <a href="/producto/2" className="text-accent hover:text-primary">Ver más</a>
                        </div>
                        {/* <!-- Producto 3 -->*/}
                        <div className="bg-secondary p-4 rounded-lg shadow-lg">
                            <Image 
                                src="/producto3.png" 
                                alt="Producto 3" 
                                width={300} 
                                height={200} 
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <h2 className="mt-4 text-xl font-customFont2">Producto 3</h2>
                            <p className="text-accent mt-2">Descripción breve del producto.</p>
                            <a href="/producto/3" className="text-accent hover:text-primary">Ver más</a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
