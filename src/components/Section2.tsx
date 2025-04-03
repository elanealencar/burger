const Section2 = () => {
    return ( 
        <div className="flex flex-row h-92 rounded-4xl text-black bg-[#D1EF53] items-center p-10">
            <div className="flex-1">
                <h1 className="text-7xl my-12">O HAMBÚRGUER ACIMA DE TODOS OS HAMBÚRGUERES</h1>
            </div>
            <div className="flex-1">
                <div className="font-inter text-2xl p-10 mx-10">Começamos com carne 100% Angus, selecionada a dedo para garantir a suculência e o 
                    sabor incomparáveis. Cada pedaço é grelhado na perfeição, 
                    com um toque especial que o torna irresistível.
                </div>
                <div className="text-md ml-20 bg-gray-100 w-44 h-14 flex justify-center items-center border-4 border-black hover:cursor-pointer">
                     SOBRE ISSO
                </div>
            </div>
        </div>
    )
}

export default Section2;