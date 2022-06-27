import {
  Image,
  Button,
  HStack,
  Box,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { TriangleUpIcon, ViewIcon } from "@chakra-ui/icons";
import Modal from "../Modal";

export default function Product({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" padding="10px">
      <Image src={product.image} alt="product" boxSize="xs" />
      <Box
        fontWeight="semibold"
        textAlign="center"
        margin="15px"
        textColor="white"
      >
        <Heading fontSize="xl">{product.name}</Heading>
        {`${product.price} ${product.currency}`}
      </Box>
      <HStack justifyContent="center">
        <Button
          rightIcon={<ViewIcon />}
          colorScheme="whiteAlpha"
          variant="outline"
          size="sm"
          width="150px"
          onClick={onOpen}
        >
          View Owner
        </Button>
        <Button
          rightIcon={<TriangleUpIcon />}
          colorScheme="yellow"
          variant="solid"
          size="sm"
          width="150px"
        >
          Mint
        </Button>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose} ownerName={product.ownerName} />
    </Box>
  );
}
