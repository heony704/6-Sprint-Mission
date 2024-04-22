import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../../api";
import ProductCard from "../ProductCard";
import "./index.css";

function BestProducts() {
  const mqlDesktop = window.matchMedia("(min-width: 1200px)");
  const mqlTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1199px)"
  );

  function getProductsPerPage(screenSize) {
    switch (screenSize) {
      case "desktop":
        return 4;
      case "tablet":
        return 2;
      case "mobile":
        return 1;
      default:
        return 4;
    }
  }

  const getScreenSize = useCallback(() => {
    const screenSize = mqlDesktop.matches
      ? "desktop"
      : mqlTablet.matches
      ? "tablet"
      : "mobile";

    return screenSize;
  }, [mqlDesktop.matches, mqlTablet.matches]);

  const [numberOfProducts, setNumberOfProducts] = useState(() => {
    const screenSize = getScreenSize();
    const productsPerPage = getProductsPerPage(screenSize);
    return productsPerPage;
  });

  const handleMediaQueryChange = useCallback(() => {
    const screenSize = getScreenSize();
    const productsPerPage = getProductsPerPage(screenSize);

    setNumberOfProducts(productsPerPage);
  }, [getScreenSize]);

  useEffect(() => {
    mqlDesktop.addEventListener("change", handleMediaQueryChange);
    mqlTablet.addEventListener("change", handleMediaQueryChange);
  }, [mqlDesktop, mqlTablet, handleMediaQueryChange]);

  const [products, setProducts] = useState([]);

  const loadBestProducts = async (size) => {
    const bestProducts = await getProducts("favorite", size);
    setProducts(bestProducts);
  };

  useEffect(() => {
    const maxProducts = getProductsPerPage("desktop");
    loadBestProducts(maxProducts);
  }, []);

  return (
    <section className="best-product">
      <h2 className="best-product-title">베스트 상품</h2>
      <ul className="best-product-list">
        {products.slice(0, numberOfProducts).map((product) => (
          <li key={product.id}>
            <ProductCard type="big" product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BestProducts;
