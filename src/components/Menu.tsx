const Menu = () => {
    return (
      <nav className="text-white font-bowlby items-center">
        <div className="container mx-auto flex justify-between">
            <div className="text-3xl flex font-bold h-16 items-center">BURGER HEAVEN</div>
            <ul className="text-md flex space-x-6 font-bowlby items-center h-16">
                <li className="h-full flex flex-1 justify-center items-center hover:text-black hover:cursor-pointer hover:bg-purple-200 p-2">SOBRE</li>
                <li className="h-full flex flex-1 justify-center items-center hover:text-black hover:cursor-pointer hover:bg-purple-200 p-2">MENU</li>
                <li className="h-full flex flex-1 text-start hover:text-black hover:cursor-pointer hover:bg-purple-200 p-2">ENCOMENDAR ONLINE</li>
            </ul>
        </div>
      </nav>
    )
  }
  
  export default Menu