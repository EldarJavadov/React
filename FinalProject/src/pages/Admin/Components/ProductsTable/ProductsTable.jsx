import React, { useContext } from 'react'
import { ProductContext } from '../../../../context/ProductContext'
import { LuTrash2, LuBadgePlus } from "react-icons/lu"
import { Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const ProductsTable = () => {
    const { products, removeProduct } = useContext(ProductContext)
    const navigate = useNavigate()

    if (!products || products.length === 0) {
        return (
            <div className='text-center'>
                <Spinner animation="border" variant="secondary" />
                <p>Məhsullar yüklənir...</p>
            </div>
        )
    }


    
    return (
        <div>
            <div className='d-flex justify-content-between mb-3'>
                <h2>Məhsullar</h2>
                <div className='col-lg-2'>
                    <button onClick={() => navigate('/manage/products/add')} className='btn btn-primary w-100'><LuBadgePlus /> Yeni məhsul</button>
                </div>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>S/s</th>
                        <th>Şəkil</th>
                        <th>Kareqoriya</th>
                        <th>Adı</th>
                        <th>Qiyməti</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map((item, index) => (

                        <tr key={index}>
                            <td width="2%">{index + 1}</td>
                            <td> <img className='rounded' src={item.thumbnail} alt="" /> </td>
                            <td className='text-capitalize'>{item.category}</td>
                            <td>{item.brand}</td>
                            <td>{item.price} ₼</td>
                            <td>
                                <button onClick={() => removeProduct(item.id)} className='btn btn-danger btn-sm'><LuTrash2 /></button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable