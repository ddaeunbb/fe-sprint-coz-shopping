import { connect } from "react-redux";
import { useRef, useEffect } from "react";
import ProductFilterItem from "./ProductFilterItem";
import ItemComponent from "./ItemComponent";
import { unlimitScroll } from '../helpers/unlimitScroll';

const NAV_TOTAL = 'Total';

const ProductFilterList = ({ type, data, page, setPage }) => {
  const scrollRef = useRef(0);

  useEffect(() => {
    const scrollListener = () => {
      scrollRef.current = window.scrollY;
      unlimitScroll(page, setPage);
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [page, setPage]);

  switch (type) {
    case NAV_TOTAL:
      return (
        <div className="product-list-display">
          <div className="product-list-display-container">
            {data.slice(0, page * 8).map((el) => (
              <ItemComponent key={el.id} eachData={el} />
            ))}
          </div>
        </div>
      );
    default:
      return <ProductFilterItem page={page} type={type} />;
  }
};

export default connect((state) => ({ data: state.bookmark.data }))(
  ProductFilterList
);
