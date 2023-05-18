import { connect } from "react-redux";
import { useRef, useEffect } from "react";
import ProductFilterItem from "./ProductFilterItem";
import ItemComponent from "./ItemComponent";

const NAV_EXHIBITION = "Exhibition";
const NAV_BRAND = "Brand";
const NAV_PRODUCT = "Product";
const NAV_CATEGORY = "category";

const ProductFilterList = ({ type, data, page, setPage }) => {
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollPosition === scrollHeight) {
        setPage(page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, setPage]);

  switch (type) {
    case NAV_BRAND:
    case NAV_CATEGORY:
    case NAV_PRODUCT:
    case NAV_EXHIBITION:
      return <ProductFilterItem page={page} type={type} />;

    default:
      return (
        <div className="product-list-display">
          <div className="product-list-display-container">
            {data.slice(0, page * 8).map((el) => (
              <ItemComponent key={el.id} eachData={el} />
            ))}
          </div>
        </div>
      );
  }
};

export default connect((state) => ({ data: state.bookmark.data }))(
  ProductFilterList
);
