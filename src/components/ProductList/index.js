import { Wrap, WrapItem } from "@chakra-ui/react";
import Product from "../Product";

export default function ProductList({ products }) {
  return (
    <Wrap spacing="100px" justify="center">
      {products.map((product) => (
        <WrapItem key={product.id}>
          <Product product={product} />
        </WrapItem>
      ))}
    </Wrap>
  );
}
