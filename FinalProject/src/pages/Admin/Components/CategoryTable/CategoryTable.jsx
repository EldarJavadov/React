import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import { CategoriesContext } from '../../../../context/CategoryContext'

const CategoryTable = () => {
  const categories = useContext(CategoriesContext)

  if (!categories || categories.length === 0) {
    return (
      <div className='text-center'>
        <Spinner animation="border" variant="secondary" />
        <p>Kateqoriyalar yüklənir...</p>
      </div>
    )
  }



  return (
    <div className='d-flex flex-column'>
      <div className='mb-3'>
        <h2>Kateqoriyalar</h2>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>S/s</th>
            <th>Kateqoriyanın adı</th>
          </tr> 
        </thead>
        <tbody>
          {categories && categories.map((item, index) => (

            <tr key={index}>
              <td width="2%">{index + 1}</td>
              <td className='text-capitalize'>{item}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default CategoryTable