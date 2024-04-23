import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../../api";
import ProductCard from "../ProductCard";
import Button from "../Button";
import DropDown from "../DropDown";
import Pagination from "../Pagination";
import { PAGES } from "../../constants/paths";
import "./index.css";

const ORDERS = [
  {
    id: 0,
    orderBy: "recent",
    label: "최신순",
  },
  {
    id: 1,
    orderBy: "favorite",
    label: "좋아요순",
  },
];

function AllProducts() {
  const mqlDesktop = window.matchMedia("(min-width: 1200px)");
  const mqlTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1199px)"
  );

  function getProductsPerPage(screenSize) {
    switch (screenSize) {
      case "desktop":
        return 10;
      case "tablet":
        return 6;
      case "mobile":
        return 4;
      default:
        return 10;
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

  const [order, setOrder] = useState(ORDERS[0]);

  const onSelectOrderOption = (option) => {
    setOrder(option);
  };

  const loadProducts = async (order, size) => {
    const allProducts = await getProducts(order, size);
    setProducts(allProducts);
  };

  useEffect(() => {
    const size = getProductsPerPage("desktop");
    loadProducts(order.orderBy, size);
  }, [order]);

  return (
    <section className="all-product">
      <div className="all-product-header">
        <h2 className="all-product-title">전체 상품</h2>
        <div className="all-product-search">
          <div className="all-product-search-icon">
            <img src="images/ic_search.svg" alt="검색 아이콘" />
          </div>
          <input
            className="all-product-search-input"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <Button to={PAGES.addProduct.link}>상품 등록하기</Button>
        <DropDown
          options={ORDERS}
          selectedOption={order}
          onSelectOption={onSelectOrderOption}
        />
      </div>
      <ul className="all-product-list">
        {products.slice(0, numberOfProducts).map((product) => (
          <li key={product.id}>
            <ProductCard type="small" product={product} />
          </li>
        ))}
      </ul>
      <Pagination />
    </section>
  );
}

export default AllProducts;
