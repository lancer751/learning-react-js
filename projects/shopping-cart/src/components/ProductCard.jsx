import {useCart} from '../hooks/userCart'

export function ProductCard({product}){
    const {addToCart} = useCart()

    return( 
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={`/product/${product.id}`}>
                <img className="p-8 rounded-t-lg" src={product.thumbnail} alt="product-image" />
            </a>
            <div className="px-5 pb-5">
                <a href={`/product/${product.id}`} className="line-clamp-1">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <small className='text-emerald-400 font-bold'>Category:</small>
                    <span className="bg-blue-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-blue-800 ms-3">{product.category}</span>
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <small className='text-yellow-400 font-bold'>Rating</small>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.rating}</span>
                </div>
                <p className="line-clamp-4 mb-4">
                    {product.description}
                </p>
                <div className="flex flex-col gap-3 items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <button type='button' onClick={() => addToCart(product)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Add to cart</button>
                </div>
            </div>
        </div>
    )
}