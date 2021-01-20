import React from 'react'

const Product = ({ product, products, setProducts }) => {

    const inStockHandler = () => {
        setProducts(products.map(item => {
            if(item.id === product.id) {
                return {
                    ...item, inStock: !item.inStock
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setProducts(products.filter(item => item.id !== product.id))
    }

    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div className={`${ product.inStock ? 'text-gray' : 'out-of-stock' }`}>
                    <div className="name">{product.name}</div>
                    <div className="description">{product.description}</div>
                </div>
                <div>
                    <i onClick={inStockHandler} className={ `fas fa-download cp ${ product.inStock ? 'in-stock' : 'out-of-stock' }` }></i>
                    <i onClick={deleteHandler} className="far fa-trash-alt cp"></i>
                </div>
            </div>
        </div>
    )
}


export default Product