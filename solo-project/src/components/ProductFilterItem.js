import ItemComponent from "./ItemComponent";
import { connect } from "react-redux";

const ProductFilterItem = ({ data, page, type }) => {
  return (
    <div className="product-list-display">
      <div className="product-list-display-container">
        {data
          .filter((el) => el.type === type)
          .slice(0, page * 8)
          .map((el) => (
            <ItemComponent key={el.id} eachData={el} />
          ))}
      </div>
    </div>
  );
};

export default connect((state) => ({ data: state.bookmark.data }))(
  ProductFilterItem
);
