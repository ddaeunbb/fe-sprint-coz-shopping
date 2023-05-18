import { connect } from "react-redux";
import ItemComponent from "./ItemComponent";

const BookmarkFilterItem = ({ data, page, type }) => {
  return (
    <div className="product-list-display">
      <div className="product-list-display-container">
        {data
          .filter((el) => el.type === type && el.bookmark)
          .slice(0, page * 8)
          .map((el) => (
            <ItemComponent key={el.id} eachData={el} />
          ))}
      </div>
    </div>
  );
};

export default connect((state) => ({ data: state.bookmark.data }))(
  BookmarkFilterItem
);
