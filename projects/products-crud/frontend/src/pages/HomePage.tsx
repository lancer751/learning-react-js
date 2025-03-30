import { useEffect } from "react"
import { useProductStore } from "../store/product"
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { ProductCard } from "../components/ProductCard"


export const HomePage = () => {
  const getAllProducts = useProductStore(state => state.getProducts)
  const products = useProductStore(state => state.products)
  console.log(products)
  useEffect(() => {
    getAllProducts()
  }, [getAllProducts])

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          w={"full"}
          spacing={5}
        >
          {
            products.map(product => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))
          }
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
