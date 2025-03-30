import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { Product } from "../types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";

interface CardProps {
    readonly product: Product
}

export function ProductCard({ product } :CardProps) {
    const deleteProduct = useProductStore(state => state.deleteProduct)
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")
    const toastMessage = useToast()

    const handleDeleteProduct = async (productId: string | undefined) => {
        const {success, message} = await deleteProduct(productId)
        
        toastMessage({
            title: `${success ? "Success": "Error"}`,
            description: message,
            status: `${success ? "success": "error"}`,
            isClosable: success,
        })
    }

  return (
    <Box
        shadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{transform: "translateY(-5px)", shadow: "xl"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w="full" objectFit={"cover"} objectPosition={"top"}/>
        <Box p={4}>
            <Heading as={"h3"} size={"md"} mb={2}>
                {product.name}
            </Heading>
            <Text
                fontWeight={"bold"}
                fontSize={"xl"}
                color={textColor}
                mb={4}
            >
                ${product.price}
            </Text>
            <HStack spacing={2}>
                <IconButton aria-label="edit-product" icon={<EditIcon/>} colorScheme={"blue"}/>
                <IconButton aria-label="delete-product" onClick={() => handleDeleteProduct(product._id)} icon={<DeleteIcon/>} colorScheme={"red"}/>
            </HStack>
        </Box>
    </Box>
  )
}
