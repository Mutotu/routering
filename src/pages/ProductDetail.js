import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  return (
    <div>
      Product Detail
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetail;
