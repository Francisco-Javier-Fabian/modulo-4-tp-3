//  Diseño de la Card para los productos en inicio

import { useCartContext } from "../contexts/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useCartContext();

  return (
    <div className='bg-[#8f542b] dark:bg-slate-900 w-full p-4 xl:p-5 rounded-xl shadow-md text-center'>

      {/*  Imágen del libro  */}
      <div className="w-full md:h-80 lg:h-[520px] overflow-hidden rounded-xl">
        <img
          src={`/assets/imgBooks/${product.img}.jpg`}
          alt={product.name}
          className="w-full h-full object-cover" />
      </div>

      {/*  Nombre de la película  */}
      <h2 className="text-lg lg:text-xl font-bold text-white my-3 lg:my-4">{product.name}: $ {product.price}</h2>

      {/*  Btn para añadir  */}
      <button
        onClick={() => addToCart(product)}
        className="bg-orange-800 hover:bg-amber-700 dark:bg-teal-800 dark:hover:bg-teal-600 text-white font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded"
      >
        <i className="bi bi-cart-plus md:text-lg flex gap-2 items-center justify-center">Carrito</i>
      </button>

    </div>
  )
}

export default ProductCard