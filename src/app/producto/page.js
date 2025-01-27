import Image from 'next/image';

export default function Producto () {
    return (
        <div>
            <h1>Producto</h1>
            
            <div className="min-h-screen bg-background text-text">
                <header className="bg-primary p-4">
                    <h1 className="text-4xl font-customFont text-center">Detalles del Producto</h1>
                </header>
                <main className="p-8">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <Image 
                                src="/images/product.jpg" 
                                alt="Producto" 
                                width={600} 
                                height={400} 
                            />
                        </div>
                        <div className="w-1/2 pl-8">
                            <h2 className="text-3xl font-customFont2">Producto 1</h2>
                            <p className="text-accent mt-4">Descripción detallada del producto.</p>
                            <p className="mt-4 text-xl">Precio: $100.00</p>
                            <button className="mt-6 px-6 py-2 bg-accent text-white rounded-lg">Agregar al Carrito</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
