import Image from 'next/image';

export default function Carrito() {
    return (
        <div>
            <div className="min-h-screen bg-background text-text">
                <header className="bg-primary p-4">
                    <h1 className="text-4xl font-customFont text-center">Carrito de Compras</h1>
                </header>
                <main className="p-8">
                    <div className="space-y-4">
                        {/* <!-- Producto en el carrito --> */}
                        <div className="flex justify-between bg-secondary p-4 rounded-lg">
                            <div className="flex">
                                <Image 
                                    src="/producto1.png" // Asegúrate de que la imagen esté en la carpeta 'public'
                                    alt="Producto"
                                    width={64} // Ancho de la imagen
                                    height={64} // Alto de la imagen
                                    className="object-cover rounded-md"
                                />
                                <div className="ml-4">
                                    <h2 className="text-lg font-customFont2">Producto 1</h2>
                                    <p className="text-accent">Cantidad: 1</p>
                                    <p className="text-accent">Precio: $100.00</p>
                                    <button className="text-accent hover:text-primary">Eliminar</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between bg-secondary p-4 rounded-lg">
                            <div className="flex">
                                <Image 
                                    src="/producto2.png" // Asegúrate de que la imagen esté en la carpeta 'public'
                                    alt="Producto"
                                    width={64} // Ancho de la imagen
                                    height={64} // Alto de la imagen
                                    className="object-cover rounded-md"
                                />
                                <div className="ml-4">
                                    <h2 className="text-lg font-customFont2">Producto 2</h2>
                                    <p className="text-accent">Cantidad: 1</p>
                                    <p className="text-accent">Precio: $200.00</p>
                                    <button className="text-accent hover:text-primary">Eliminar</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between bg-secondary p-4 rounded-lg">
                            <div className="flex">
                                <Image 
                                    src="/producto3.png" // Asegúrate de que la imagen esté en la carpeta 'public'
                                    alt="Producto"
                                    width={64} // Ancho de la imagen
                                    height={64} // Alto de la imagen
                                    className="object-cover rounded-md"
                                />
                                <div className="ml-4">
                                    <h2 className="text-lg font-customFont2">Producto 3</h2>
                                    <p className="text-accent">Cantidad: 1</p>
                                    <p className="text-accent">Precio: $90.00</p>
                                    <button className="text-accent hover:text-primary">Eliminar</button>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Más productos pueden ir aquí --> */}
                    </div>
                    <div className="mt-6">
                        <p className="text-xl font-customFont2">Total: $100.00</p>
                        <button className="mt-4 px-6 py-2 bg-accent text-white rounded-lg">Proceder al Pago</button>
                    </div>
                </main>
            </div>
        </div>
    );
}
