const Section3 = () => {
    return (
        <div className="flex mt-10 flex-row h-[753px] gap-10">
           <div className="relative flex-1 mt-10 rounded-4xl border-5 border-gray-100 bg-cover bg-center"
           style={{ backgroundImage: 'url(/assets/batata-image.png)' }}
            >
                <div className="absolute w-96 bottom-5 left-5 bg-black text-white p-4 rounded-3xl">
                    <h3 className="text-2xl p-4">SAL & VINAGRE BATATAS FRITAS</h3>
                    <p className="text-md p-4 lilasColorText cursor-pointer">COMPRAR ONLINE</p>
                </div>
           </div>
           
           <div className="relative flex-1 mt-10 rounded-4xl border-5 border-gray-100 bg-cover bg-center"
            style={{ backgroundImage: 'url(/assets/frango-image.png)' }}
            >
                <div className="absolute w-96 bottom-5 left-5 bg-black text-white p-4 rounded-3xl">
                    <h3 className="text-2xl p-4">SANDUÍCHE DE FRANGO CROCANTE</h3>
                    <p className="text-md p-4 lilasColorText cursor-pointer">COMPRAR ONLINE</p>
                </div>
            </div>
        </div>
    )        
}

export default Section3