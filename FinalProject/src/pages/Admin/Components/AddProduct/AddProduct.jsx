import axios from 'axios'
import { toast } from 'react-hot-toast'
import React, { useEffect, useRef } from 'react'
import apiUrl from '../../../../utils/api'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()


    const handleAdded = async () => {
        try {
            const response = await axios.post(`${apiUrl.productsUrl}/add`)
            if (response) {
                toast.success("Yeni məhsul uğurla əlavə edildi.")
                navigate('/manage/products')
            }
        } catch (error) {
            console.error("Error adding new product:", error)
            toast.error("Məhsul əlavə edilərkən xəta baş verdi.")
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center col-lg-6 m-auto'>
            <h4>Yeni məhsul</h4>
            <input type="text" className='form-control' placeholder='Məhsulun adını daxil edin' />
            <button onClick={handleAdded} className='btn btn-primary mt-3 w-100'>Əlavə et</button>
        </div>
    )
}

export default AddProduct