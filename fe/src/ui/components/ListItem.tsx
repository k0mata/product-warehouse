import React, { FC } from 'react';

interface ListItemProps {
  name: string;
  isHazardous: boolean;
  sizePerUnit: number;
}

export const ListItem: FC<ListItemProps> = ({ name, isHazardous, sizePerUnit }): JSX.Element => {
  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">Size per unit: {sizePerUnit}</p>
        </div>
      </div>
      <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">{}</p>
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className={`${isHazardous ? 'bg-yellow-500/20' : 'bg-emerald-500/20'} flex-none rounded-full p-1`}>
            <div className={`${isHazardous ? 'bg-yellow-500' : 'bg-emerald-500'} h-1.5 w-1.5 rounded-full`}/>
          </div>
          <p className="text-xs leading-5 text-gray-500">{isHazardous ? 'Hazardous' : 'Non Hazardous'}</p>
        </div>
      </div>
    </li>
  );
};