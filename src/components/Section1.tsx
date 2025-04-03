import Image from 'next/image';

const Section1 = () => {
    return (
        <div className="relative h-[750px] flex flex-col mt-10">
            <h1 className=" text-8xl font-bold text-center text-gray-100">
                A HAMBURGUERIA ORGÂNICA FAVORITA DE SÃO PAULO
            </h1>
            <div className="absolute inset-0 flex justify-center items-center mt-60">
                <div className="absolute left-0"> 
                    <Image
                        src="/assets/vector1.png"
                        alt="Imagem Vetor 1"
                        width={676} 
                        height={272}
                    />
                </div>
                <div className="absolute left-60">
                    <Image
                        src="/assets/burger-image.png"
                        alt="Imagem burger"
                        width={414} 
                        height={356}
                        className="z-10"
                    />
                </div>
                
                <Image
                    src="/assets/burger-image.png"
                    alt="Imagem burger"
                    width={559} 
                    height={478}
                    className="z-20"
                />

                
                <div className="absolute right-0">
                    <Image
                        src="/assets/vector2.png"
                        alt="Imagem Vetor 2"
                        width={676}
                        height={272}
                    />
                </div>
                
                <div className="absolute right-60">
                    <Image
                        src="/assets/burger-image.png"
                        alt="Imagem burger"
                        width={414} 
                        height={356}
                        className="z-10"
                    />
                </div>


            </div>
        </div>
    )
}

export default Section1;