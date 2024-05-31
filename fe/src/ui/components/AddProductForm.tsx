import React, { useState } from 'react';
import { useAddProducts } from '../../db/data-hooks/useAddProduct.ts';
import { useQueryClient } from '@tanstack/react-query';
import { HazardSwitch } from './Switch.tsx';

export const AddProductForm = () => {
  const queryClient = useQueryClient();

  const [name, setName] = useState('');
  const [isHazardous, setIsHazardous] = useState(false);
  const [sizePerUnit, setSizePerUnit] = useState('');

  const mutation = useAddProducts(queryClient);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const product = {
      id: Date.now(),
      name,
      isHazardous,
      sizePerUnit: parseFloat(sizePerUnit)
    };

    await mutation.mutate({ product });
    setName('');
    setIsHazardous(false);
    setSizePerUnit('');
  };

  return (
    <div>
      <h1 className={'font-bold'}>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
              <div className="sm:col-span-4 flex gap-4 items-center">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name:</label>
                <input
                  id="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>


            <div className="sm:col-span-4 flex gap-4 items-center mt-4">
              <label htmlFor="hazard" className="block text-sm font-medium leading-6 text-gray-900">Hazardous:</label>

              <HazardSwitch isHazardous={isHazardous} setIsHazardous={setIsHazardous}/>
            </div>

            <div className="sm:col-span-4 flex gap-4 items-center mt-4">
              <label htmlFor="sizePerUnit" className="block text-sm font-medium leading-6 text-gray-900">Size per
                unit:</label>
              <input
                id="sizePerUnit"
                name="sizePerUnit"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="number"
                step="0.01"
                value={sizePerUnit}
                onChange={(e) => setSizePerUnit(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>

          </div>
        </div>
      </form>
    </div>
  )
    ;
};
