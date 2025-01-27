import Image from 'next/image';
export default function NotFound(){
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">

            <div className="flex justify-center items-center flex-grow-1 h-screen">
                <Image src="/images/404.svg" alt="Page Not Found" width={300} height={300} />
                <h1 className="text-4xl text-center font-bold mt-10">Page Not Found</h1>
                <h2 className="text-4xl text-center font-bold mt-10">Que rompimo?</h2>
            </div>

        </div>
    )
}