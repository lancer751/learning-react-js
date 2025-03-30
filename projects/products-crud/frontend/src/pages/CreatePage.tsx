import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Product } from "../types"
import { useProductStore } from "../store/product"


export const CreatePage = () => {
  const createProduct = useProductStore(state => state.createNewProduct)
  const [newProduct, setNewProduct] = useState<Product>({
    name: "",
    price: "",
    image: ""
  })
  const toast = useToast()

  const handleAddProduct = async () => {
    const {success, message} = await createProduct(newProduct)
    
    if(!success) {
      toast({
        title: 'Error',
        description: message,
        status: 'error',
        isClosable: true,
      })
    }else{
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true,
      })
    }

    setNewProduct({name: "", price: "", image: ""})
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        > 
          <VStack gap={6}>
            <Input
              placeholder="Product Name"
              name="name"
              type="text"
              value={newProduct.name}
              onChange={e => setNewProduct({...newProduct, name: e.target.value})}
            />

            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={e => setNewProduct({...newProduct, price: e.target.value})}
            />

            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={e => setNewProduct({...newProduct, image: e.target.value})}
            />
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}
