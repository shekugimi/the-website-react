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
    <section className="registration-form mt-10 flex justify-center items-center text-black">
      <div className="container">
        <div className="registration-form-container bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="font-extrabold text-4xl mb-4">Registration Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-xl">
            <div>
              <label htmlFor="name" className="block font-bold mb-2">Name</label>
              <input type="text" id="name" {...register('name', { required: true })} className="shadow appearance-none text-black border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline" />
              {errors.name && <span className="text-red-500 text-xs italic ">Name is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-2">Email</label>
              <input type="email" id="email" {...register('email', { required: true })} className="shadow appearance-none text-black border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline" />
              {errors.email && <span className="text-red-500 text-xs italic">Email is required</span>}
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold mb-2">Phone</label>
              <input type="text" id="phone" {...register('phone', { required: true })} className="shadow appearance-none text-black border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline" />
              {errors.phone && <span className="text-red-500 text-xs italic">Phone is required</span>}
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold mb-2">College</label>
              <input type="text" id="phone" {...register('phone', { required: true })} className="shadow appearance-none text-black border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline" />
              {errors.phone && <span className="text-red-500 text-xs italic">Phone is required</span>}
            </div>
            <div>
              <label htmlFor="phone" className="block font-bold mb-2">Course</label>
              <input type="text" id="phone" {...register('phone', { required: true })} className="shadow appearance-none text-black border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline" />
              {errors.phone && <span className="text-red-500 text-xs italic">Phone is required</span>}
            </div>
            <div>
              <label htmlFor="duration" className="block font-bold mb-2">Duration</label>
              <select id="course" {...register('course', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 bg-white focus:outline-none focus:shadow-outline">
                <option value="">Select Duration</option>
                <option value="course1">2 Months</option>
                <option value="course2">4 Months</option>
                <option value="course3">6 Months</option>
              </select>
              {errors.course && <span className="text-red-500 text-xs italic">Course is required</span>}
            </div>
            <div>
              <label htmlFor="message" className="block font-bold mb-2">Message <span className='text-gray-900'>(Optional)</span></label>
              <textarea id="message" {...register('message', { required: false })} className="shadow appearance-none border rounded py-2 px-3 text-black bg-white focus:outline-none focus:shadow-outline"></textarea>
              {errors.message && <span className="text-red-500 text-xs italic">Message is required</span>}
            </div>
            <div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
