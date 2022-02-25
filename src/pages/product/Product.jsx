import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart';
import {productData} from '../../dummyData';
import PublishIcon from '@mui/icons-material/Publish';

export const Product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Edit Product</h1>
            <Link to='/newProduct'>
             <button className="productAddButton">Create Product</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey='Price' title='Sales Performance'/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://i.ibb.co/pb7BRQK/shoe1.png" alt="" className='productInfoImg'/>
                    <span className='productName'>Shoe</span>
                </div>
                <div className="productInfoBottom">
                    <div className='productInfoItem'>
                        <span className="productInfoKey">ID:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">Yes</span>
                    </div>
                    <div className='productInfoItem'>
                        <span className="productInfoKey">In Stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className='productForm'>
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type='text' placeholder='shoe'/>
                    <label>In Stock</label>
                    <select name='instock' id='idstock'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                    <label>Active</label>
                    <select name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://i.ibb.co/pb7BRQK/shoe1.png" alt="" className='productImg'/>
                        <label htmlFor='file'><PublishIcon className="productUpdateIcon"/></label>
                        <input type='file' id='file' style={{display:"none"}}/>
                        
                    </div>
                    <button className="productUpdateButton">Update</button>
                </div>
            </form>
        </div>

    </div>
  )
}
