import { Flex, Heading } from "@chakra-ui/react";
import ProductList from "./components/ProductList";
import data from "./data/products";

const App = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      paddingBlock="50px"
      backgroundColor="#011627"
    >
      <Heading fontSize="5xl" paddingBottom="100px" textColor="white">
        NFT Example
      </Heading>
      <ProductList products={data} />
    </Flex>
  );
};

export default App;
