export default function Admin() {
    return (
        <div>

            <div className="min-h-screen bg-background text-text">
                <header className="bg-primary p-4">
                    <h1 className="text-4xl font-customFont text-center">Panel de Administración</h1>
                </header>
                <main className="p-8">
                    <div className="space-y-6">
                        <div className="bg-secondary p-4 rounded-lg">
                            <h2 className="text-2xl font-customFont2">Gestión de Productos</h2>
                            <button className="mt-4 px-6 py-2 bg-accent text-white rounded-lg">Añadir Nuevo Producto</button>
                        </div>
                        <div className="bg-secondary p-4 rounded-lg">
                            <h2 className="text-2xl font-customFont2">Usuarios</h2>
                            <button className="mt-4 px-6 py-2 bg-accent text-white rounded-lg">Gestionar Usuarios</button>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )
}
