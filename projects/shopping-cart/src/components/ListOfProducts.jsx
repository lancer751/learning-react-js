import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { useFilters } from "../hooks/useFilters"

export function ListOfProducts(){
    const [products, setProducts] = useState([])
    const {filterProducts} = useFilters(products)

    const filteredProducts = filterProducts(products)
    
    useEffect(()=>{
        const fetchProducts = async() => {
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()

            setProducts(data.products)
        }

        fetchProducts()
    }, [])

    return(
        <section className="max-w-screen-lg mx-auto">
            <div className="grid justify-items-center grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
                {
                    products.length === 0  ? 
                        <p className="text-center">Loading...</p>
                    :
                    filteredProducts.map(product => {

                        return (
                            <ProductCard 
                                key={product.id}
                                {...product}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}