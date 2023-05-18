export default function FilterNav({setPage, setSelect, select}){
  const NAV_TOTAL = 'Total';
  const NAV_PRODUCT = 'Product';
  const NAV_EXHIBITION = 'Exhibition';
  const NAV_BRAND = 'Brand';
  const NAV_CATEGORY = 'Category'
  const SELECTED = 'selected';
  const publicUrl = process.env.PUBLIC_URL;

  const selectHandler = (e) => {
    setSelect(e.target.className);
    setPage(1);
  };

  return (
    <div className="product-list-container">
        <ul className="filter-tab">
          <li onClick={e=> selectHandler(e)}>
            <img alt="전체" src={`${publicUrl}/images/total.png`} className="Total"/>
            <span className={`${select === NAV_TOTAL && SELECTED}`}>전체</span>
          </li>
          <li onClick={e=> selectHandler(e)}>
            <img alt="상품" src={`${publicUrl}/images/product.png`} className="Product" />
            <span className={`${select === NAV_PRODUCT && SELECTED}`}>
              상품
            </span>
          </li>
          <li onClick={e=> selectHandler(e)}>
            <img alt="카테고리" src={`${publicUrl}/images/category.png`} className="Category" />
            <span className={`${select === NAV_CATEGORY && SELECTED}`}>
              카테고리
            </span>
          </li>
          <li onClick={e=> selectHandler(e)}>
            <img alt="전시" src={`${publicUrl}/images/exhibition.png`} className="Exhibition" />
            <span className={`${select === NAV_EXHIBITION && SELECTED}`}>
              전시
            </span>
          </li>
          <li onClick={e=> selectHandler(e)}>
            <img alt="브랜드" src={`${publicUrl}/images/brand.png`} className="Brand"/>
            <span className={`${select === NAV_BRAND && SELECTED}`}>
              브랜드
            </span>
          </li>
        </ul>
      </div>
  )
}