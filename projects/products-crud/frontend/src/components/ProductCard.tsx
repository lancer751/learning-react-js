import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { Product } from "../types";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useProductStore } from "../store/product";
import { useState } from "react";

interface CardProps {
    readonly product: Product
}

export function ProductCard({ product } :CardProps) {
    const [productEdited, setProductEdited] = useState(product)
    const deleteProduct = useProductStore(state => state.deleteProduct)
    const updateProduct = useProductStore(state => state.updateProduct)

    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")
    const toastMessage = useToast()
    const {isOpen, onClose, onOpen} = useDisclosure()

    const handleDeleteProduct = async (productId: string | undefined) => {
        const {success, message} = await deleteProduct(productId)
        toastMessage({
            title: `${success ? "Success": "Error"}`,
            description: message,
            status: `${success ? "success": "error"}`,
            isClosable: success,
        })
    }

    const handleUpdateProduct = async (product: Product) => {
        const {success, message} = await updateProduct(product)

        onClose()
        toastMessage({
            title: `${success ? "Success": "Error"}`,
            description: message,
            status: `${success ? "success": "error"}`,
            isClosable: true,
        })
    }

  return (
    <Box
        shadow={"lg"}
        rounded={"lg"}
        maxW={"md"}
        w={"full"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{transform: "translateY(-5px)", shadow: "xl"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={60} w="full" objectFit={"cover"} objectPosition={"center"}/>
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
                <IconButton aria-label="edit-product" onClick={onOpen} icon={<EditIcon/>} colorScheme={"blue"}/>
                <IconButton aria-label="delete-product" onClick={()=> handleDeleteProduct(product._id)} icon={<DeleteIcon/>} colorScheme={"red"}/>
            </HStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton/>
                <ModalHeader>Update Product</ModalHeader>
                <ModalBody>
                    <VStack spacing={4}>
                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={productEdited.name}
                            onChange={(e) => setProductEdited({ ...productEdited, name: e.target.value })}
                        />
                        <Input
                            placeholder='Price'
                            name='price'
                            type='number'
                            value={productEdited.price}
                            onChange={(e) => setProductEdited({ ...productEdited, price: e.target.value })}
                        />
                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={productEdited.image}
                            onChange={(e) => setProductEdited({ ...productEdited, image: e.target.value })}
                        />
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <HStack>
                        <Button colorScheme="blue" mr={3} onClick={() => handleUpdateProduct(productEdited)}>
                            Save Changes
                        </Button>
                        <Button variant={'ghost'} onClick={() => {
                            onClose() 
                            setProductEdited(product)
                        }}>
                            Cancel
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
  )
}
