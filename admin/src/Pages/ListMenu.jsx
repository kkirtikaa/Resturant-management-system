import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { MdDeleteForever } from 'react-icons/md'
import axios from 'axios'

const ListMenu = ({ token }) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(
        backendUrl + '/api/product/list',
        { headers: { token } }
      )

      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='w-full p-4'>

      <p className='text-2xl font-bold mb-4'>Menu List</p>

      {/* Header */}
      <div className='grid grid-cols-[1fr_3fr_2fr_1fr_1fr] border-b pb-2 font-semibold text-gray-700'>
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className='text-center'>Action</p>
      </div>

      {/* List Items */}
      {list.map((item, index) => (
        <div
          key={index}
          className='grid grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center border-b py-3'
        >

          <img
            src={item.image}
            alt=""
            className='w-[40px] h-[40px] object-cover'
          />

          <p>{item.name}</p>

          <p>{item.category}</p>

          <p>{item.price}</p>

          <div className='flex justify-center'>
            <MdDeleteForever className='text-red-600 text-xl cursor-pointer'/>
          </div>

        </div>
      ))}

    </div>
  )
}

export default ListMenu