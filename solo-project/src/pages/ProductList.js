import { connect } from "react-redux";
import { useState } from "react";
import Modal from "../components/Modal";
import FilterNav from '../components/FilterNav';
import ProductFilterList from "../components/ProductFilterList";

const ProductList = ({ modal, setIsOpen }) => {
  const [select, setSelect] = useState("Total");
  const [page, setPage] = useState(1);

  return (
    <div className="ProductList"onClick={() => {setIsOpen(false);}}>
      {modal && <Modal />}
      <FilterNav setPage={setPage} setSelect={setSelect} select={select} />
      <ProductFilterList type={select} page={page} setPage={setPage} />
    </div>
  );
};

export default connect((state) => ({ modal: state.bookmark.modal }))(
  ProductList
);
