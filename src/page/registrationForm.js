import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Simulating a POST request to an API endpoint
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
      toast.success('Registration Successful');
      reset(); // Reset form fields after successful submission
    } catch (error) {
      toast.error('Registration Failed');
    }
  };

  return (
    <div class="max-w-md mt-28 mb-10 mx-auto p-8 bg-gray-900 rounded-md shadow-md form-container">
      <h2 class="text-2xl font-semibold text-white mb-6">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} class="space-y-6 text-xl">
        <div>
          <label htmlFor="name" class="block text-start  text-gray-300 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" {...register('name', { required: true })}
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
          {errors.name && <span className="text-red-500 text-xs italic ">Name is required</span>}
        </div>
        <div>
          <label htmlFor="email" class="block text-start text-gray-300 text-sm font-bold mb-2">Phone</label>
          <input type="email" id="email" {...register('email', { required: true })}
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
          {errors.phone && <span className="text-red-500 text-xs italic">Mobile number is required</span>}
        </div>
        <div>
          <label htmlFor="email" class="block text-start text-gray-300 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" {...register('email', { required: true })}
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
          {errors.email && <span className="text-red-500 text-xs italic">Email is required</span>}
        </div>
        <div>
          <label htmlFor="email" class="block text-start text-gray-300 text-sm font-bold mb-2">Department</label>
          <input type="email" id="email" {...register('email', { required: true })}
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
          {errors.department && <span className="text-red-500 text-xs italic">Department is required</span>}
        </div>
        <div>
          <label htmlFor="email" class="block text-start text-gray-300 text-sm font-bold mb-2">Batch</label>
          <input type="email" id="email" {...register('email', { required: true })}
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
          {errors.batch && <span className="text-red-500 text-xs italic">Batch is required</span>}
        </div>
        <div className='flex flex-row items-center justify-between '>
          <button type="submit"
            class="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black font-bold focus:outline-none focus:shadow-outline-blue">
            Submit
          </button>
          <button type="reset"
            class="text-red hover:text-white focus:outline-none focus:shadow-outline-blue">
            Reset
          </button>
        </div>
        <div className='text-sm'>
        <span className='text-sm'>
          Any queries ? mail us at <a href="mailto:progyaneducations@gmail.com" class="text-blue-500">Progyan Educations</a>
        </span>

        </div>

      </form>
    </div>
  );
};

export default RegistrationForm;
