import React from 'react'
import './newProduct.css'
import PublishIcon from '@mui/icons-material/Publish';

export const NewProduct = () => {
  return (
    <div className='newProduct'>
        <h1 className="newProductTitle">Add Product</h1>
        <form className='addProductForm'>
            <div className="addProductItem">
                <label>Product Image</label>
                <input type='file' id='file'/>
            </div>
            <div className="addProductItem">
                <label>Product name</label>
                <input type='text' placeholder='Shoes'/>
            </div>
            <div className="addProductItem">
                <label>Stock</label>
                <input type='text' placeholder='Shoes'/>
            </div>
            <div className="addProductItem">
                <label>Active</label>
                    <select name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
            </div>
                <button className="addProductButton">Add Product</button>
            </form>

    </div>
  )
}
