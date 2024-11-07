import { createContext, useState } from "react";

// context to consume
export const FiltersContext = createContext()

// provide the context
export function FiltersProvider({children}){
    const [filters, setFilters] = useState({
        'category': 'all',
        'minPrice': 0
    }) 

    return(
        <FiltersContext.Provider value={{
            filters, 
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
} 