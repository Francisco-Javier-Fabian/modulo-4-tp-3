import ThemeButton from "./ThemeButton"

const Header = ({ setIsSidebarOpen }) => {

  const handleOpenSidebar = () => setIsSidebarOpen(true)

  return (
    <header className="
      text-white p-4 flex justify-between
      bg-[#8f542b] 
      dark:bg-slate-900
    ">

      {/*  Btn para cambiar el tema Claro/Oscuro */}
      <ThemeButton />

      {/*  Btn para ver el modal de "Carrito"  */}
      <button
        onDoubleClick={handleOpenSidebar}
        className="
        text-black py-2 px-4 rounded
          hover:shadow-sm transform hover:scale-105 duration-300 
          bg-yellow-200 hover:bg-yellow-500 hover:shadow-[#B4CF66]
          dark:bg-teal-800 dark:hover:bg-teal-600 dark:hover:shadow-[#6457D5] dark:text-white
        ">
        <i className="bi bi-cart2 md:text-lg font-medium flex gap-2 items-center justify-center"></i>
      </button>

    </header>
  )
}

export default Header
/* F2D022 */