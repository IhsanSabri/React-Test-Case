import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <div className="p-6 h-screen">
        <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="text-black dark:text-white">First name</label>
                    <input type="text" className="bg-gray-200 form-input px-3 py-2 rounded-md dark:bg-white" required {...register('name')}/>
                </div>
                <div className="flex flex-col">
                    <label className="text-black dark:text-white">Last name</label>
                    <input type="text" className="bg-gray-200 form-input px-3 py-2 rounded-md dark:bg-white" required {...register('surname')}/>
                </div>
                <div className="flex flex-col">
                    <label className="text-black dark:text-white">Email</label>
                    <input type="email" className="bg-gray-200 form-input px-3 py-2 rounded-md dark:bg-white" required {...register('email')}/>
                </div>
                <div className="flex flex-col">
                    <label className="text-black dark:text-white">Password</label>
                    <input type="password" className="bg-gray-200 form-input px-3 py-2 rounded-md dark:bg-white" required {...register('password')}/>
                </div>
            </div>
            <div className="flex justify-center py-4">
                <button type="submit" className="bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-blue-300 hover:bg-blue-500">
                    Submit
                </button>
            </div>
        </form>
    </div>
  );
};

export default Contact;
