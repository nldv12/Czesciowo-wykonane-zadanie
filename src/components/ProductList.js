import React from 'react'

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows


    let newArray = props.products.filter(el => el.price >= props.priceFrom && el.price <= props.priceTo)

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({newArray.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Price</th>
          </tr>
          {newArray.map(el => (
              <tr key={el.id}>
                  <th>{el.id}</th>
                  <th>{el.name}</th>
                  <th>{el.department}</th>
                  <th>{el.price}</th>
              </tr>
          ) )}
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}
