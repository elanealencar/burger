import Image from "next/image";
const Section4 = () => {
    return (
        <div>

            <div className="mt-20">
                <h1 className="text-[#D1EF53] text-8xl whitespace-nowrap overflow-hidden flex justify-center">THE BEST BURGER IVE EVER HAD</h1>
            </div>
            <div className="mt-20 w-full h-[503px] rounded-4xl border-5 border-gray-100 bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/bar-image.jpeg)' }}
                >        
            </div>
            <div className="absolute left-[-500]"> 
                <Image
                    src="/assets/vector2.png"
                    alt="Imagem Vetor 2"
                    width={676} 
                    height={272}
                />
            </div>
            
            <div className="relative w-full mt-20 flex flex-col items-center overflow-hidden">
                <div className="text-7xl text-center px-62">ENCOMENDAR ONLINE OU VENHA VISITAR-NOS HOJE</div>
                <div className="flex justify-center items-center mt-4 text-md text-black h-16 w-48 bg-[#D1EF53] cursor-pointer">COMPRAR AGORA</div>       
               
            </div>
           
        </div>
    )
}

export default Section4;