import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:3000/books/${id}`);
      setLoading(false);
      enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
      navigate("/show");
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error deleting book', { variant: 'error' });
      console.error('Delete book error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl m-5'>Are you sure you want to delete this book?</h3>
        <button
          className='p-4 bg-red-600 text-white m-0 w-100'
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
