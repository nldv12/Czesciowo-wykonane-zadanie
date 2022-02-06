import React from 'react'

export const FilterForm = ({setPriceFrom, setPriceTo}) => {

    const onPriceFromInputChange = (e) => {
        // TODO: implement handler
        setPriceFrom (e.target.value)

    }
    const onPriceToInputChange = (e) => {
        // TODO: implement handler
        setPriceTo (e.target.value)

    }

    // TODO: bind handlers and props
    return (
        <div>
            <label htmlFor="priceFrom">Price From:</label>
            <input onChange={onPriceFromInputChange}
                type="number"
                id="priceFrom"
                name="priceFrom"
                placeholder="Price from..." />
            <label htmlFor="priceTo">Price To:</label>
            <input onChange={onPriceToInputChange}
                type="number"
                id="priceTo"
                name="priceTo"
                placeholder="Price to..." />
        </div>
    )
}