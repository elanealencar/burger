import Image from "next/image";

const Section5 = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="absolute right-[-500] top-[-90]"> 
                <Image
                    src="/assets/vector1.png"
                    alt="Imagem Vetor 1"
                    width={676} 
                    height={272}
                />
            </div>
            <div className=" w-full overflow-hidden h-80 text-black flex flex-row lilasColor rounded-4xl mt-20">
             
            <div className="text-2xl p-20 flex-1/4">BURGER HEAVEN</div>
            <ul className="p-20 flex-1/4">
                <li className="text-md pb-4">MAIS</li>
                <li className="text-md pb-2 font-inter">SOBRE</li>
                <li className="text-md pb-2 font-inter">MENU</li>
                <li className="text-md pb-2 font-inter">LOCALIZAÇÕES</li>
                <li className="text-md pb-2 font-inter">PRIVACIDADE</li>
            </ul>
            <div className="text-md p-20 flex-1/2">
                <div className="mb-4">ENVIE A SUA OPINIÃO:</div>
                <div className="relative w-full max-w-md">
                    <input 
                        type="text" 
                        className="w-full h-14 border border-gray-600 rounded-md py-2 px-4 pr-20 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black px-4 py-1 text-sm hover:cursor-pointer">
                        ENVIAR
                    </button>
                </div>
            </div>
            
        </div>

        </div>
        
    )
}

export default Section5;