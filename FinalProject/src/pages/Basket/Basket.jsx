import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import { LuTrash2 } from "react-icons/lu"
import './basket.css'

const Basket = () => {
    const { basket, removeBasket } = useContext(BasketContext)

    if (basket && basket.length === 0) {
        return (
            <div className="container-fluid  mt-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0">
                            <div className="card-body cart">
                                <div className="col-sm-12 empty-cart-cls text-center">
                                    <img src="https://i.imgur.com/dCdflKN.png" className="img-fluid mb-4 mr-3" />
                                    <h3><strong>Səbət boşdur</strong></h3>
                                    <a href="/" className="btn btn-primary cart-btn-transform m-3">Alış-verişə davam edin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
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
                    {basket && basket.map((item, index) => (

                        <tr key={index}>
                            <td width="2%">{index + 1}</td>
                            <td> <img className='rounded-2' src={item.thumbnail} alt="" /> </td>
                            <td className='text-capitalize'>{item.category}</td>
                            <td>{item.brand}</td>
                            <td>{item.price} ₼</td>
                            <td>
                                <button onClick={() => removeBasket(item)} className='btn btn-danger btn-sm'><LuTrash2 /></button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Basket