import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './productList.css'

export const ProductList = () => {

  const [data, setData] = useState(productRows)

  const handleDelete = (id) => { 
    setData(data.filter(item => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
      return(
        <div className='productListUser'>
            <img className="productListImg" src={params.row.avatar} alt=""/>
            {params.row.name}
        </div>
      )
    } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'price', headerName: 'Price', width: 90,},
    { field:'action', headerName:'Action', width: 150, renderCell: (params) => {
      return (
        <>
          <Link to = {"/product/"+params.row.id}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutlineIcon className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
        </>
      )
       
    }}
  ];
  

  return (
    <div className='productList'>
        <DataGrid
        rows={productRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      /> 
    </div>
  )
}
