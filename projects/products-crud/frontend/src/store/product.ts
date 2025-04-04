import { Product } from "../types"
import {create} from "zustand"

type ResponseInformation = {
    success: boolean, 
    message: string, 
    data?: Product
}

interface ProductState{
    products:  Product[],
    createNewProduct: (newProduct: Product) => Promise<ResponseInformation>,
    getProducts: () => Promise<Product[] | Error>
    deleteProduct: (productId : string | undefined) => Promise<ResponseInformation>,
    updateProduct: (productToUpdate: Product) => Promise<ResponseInformation>
}

export const useProductStore = create<ProductState>()((set, get) => ({
    products: [],
    createNewProduct: async (newProduct) => {
        console.log(newProduct)
        try{
            const response = await fetch('/api/products', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct)
            })
            
            const responseData = await response.json()
            if(!response.ok) return responseData

            set((state) => ({products: [...state.products, responseData.data]}))
            return {success: true, message: "Product created Successfully."}

        }catch(error){
            console.log("Error on creating new product", error)
            return {success: false, message: "An error ocurred while creating the product"}
        }
    },
    getProducts: async () => {
        try{
            const response = await fetch('/api/products')
            const {data} = await response.json()
            set({products: data})
            return data
        }catch(error){
            console.log("Error on getting products", error)
        }
    },
    deleteProduct: async (productId) => {
        try{
            const response = await fetch(`/api/products/${productId}`, {method: 'delete'})
            const {success, message} : ResponseInformation = await response.json()
            console.log(success, message)
            if(!response.ok) return {success, message}
            set(state => ({products: state.products.filter(product => product._id !== productId)}))
            return {success, message}
        }catch(error){
            console.log("Error on deleting product", error)
            return {success: false, message: "Error on delete the product"}
        }
    },
    updateProduct: async(productWithChanges) => {
        const {_id : productId} = productWithChanges
        try{
            const response = await fetch(`/api/products/${productId}`, {
                method: 'put',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productWithChanges)
            })

            const updateInfo : ResponseInformation = await response.json()
            if(!response.ok) return updateInfo

            const {products} = get()
            const  indexProductToUpdate = products.findIndex(p => p._id === productId)
            const productsCopy = structuredClone(products)
            productsCopy[indexProductToUpdate] = productWithChanges
            set({products: productsCopy})
            return {success: updateInfo.success, message: "The product was updated Successfully."}
        }catch(error){
            console.log("Erron on update product.", error)
            return {success: false, message: "Error to update product. The request failed."}
        }
    }
}))