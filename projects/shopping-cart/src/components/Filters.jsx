import { useContext } from "react"
import { FiltersContext } from "../contexts/filtersProducts"
import { useFilters } from "../hooks/useFilters"


export function Filters(){
    const {filters, setFilters} = useFilters()

    const handleMinPrice = (e) => {
        setFilters({...filters, minPrice: e.target.value})
    }
    
    const handleCategory = (e) => {
        setFilters({...filters, category: e.target.value})
    }

    return(

        <div className="w-full max-w-3xl flex justify-between mt-10 mx-auto">
            <div className="relative mb-6 w-full max-w-xs">
                <p>Price: ${filters.minPrice}</p>
                <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
                <input id="labels-range-input" type="range" value={filters.minPrice} min="0" max="1000" onChange={(e) => {handleMinPrice(e)}} className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"/>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($0)</span>
                {/* <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">${1000/3}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span> */}
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1000)</span>
            </div>

            <div className="inline-flex items-center gap-x-4">
                <label htmlFor="categories">Category</label>
                <select name="categories" onChange={(e) => handleCategory(e)} className="px-6 py-2 rounded-sm">
                    <option value='all'>All</option>
                    <option value='beauty'>Beauty</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='furniture'>Furniture</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </div>
    )
}