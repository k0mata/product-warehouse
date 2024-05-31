import { useState } from 'react';
import { useAddProducts } from '../../db/data-hooks/useAddProduct.ts';
import { useQueryClient } from '@tanstack/react-query';

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
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Hazardous:</label>
          <input
            type="checkbox"
            checked={isHazardous}
            onChange={(e) => setIsHazardous(e.target.checked)}
          />
        </div>
        <div>
          <label>Size per unit:</label>
          <input
            type="number"
            step="0.01"
            value={sizePerUnit}
            onChange={(e) => setSizePerUnit(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};
