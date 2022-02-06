import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
  }

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
  }

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range
  }
  let displayedProducts = props.products;
  // console.log(priceFrom)
  // console.log(priceTo)
  return (
    <div className="Products">
      <FilterForm
          setPriceFrom={setPriceFrom}
          setPriceTo={setPriceTo}
        />

      <ToggleColumns
        onCheckboxClick={''}
        columns={''} />

      <ProductList
        products={displayedProducts}
        priceTo={priceTo}
        priceFrom={priceFrom}
        setPriceTo={setPriceTo}
        columns={''} />
    </div>
  );
}

export default Search;
