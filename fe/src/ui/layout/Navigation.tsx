import { ChartPieIcon, HomeIcon } from '@heroicons/react/24/outline';
import { NavLink, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-2">
          <li>
            <NavLink
              to={'/products'}
              className={
                `${pathname.includes('/products')
                  ? 'bg-gray-50 text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'} group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
            >
              <ChartPieIcon
                className={`${pathname.includes('/products') ? 'text-indigo-600' : 'text-gray-400'} group-hover:text-indigo-600','h-6 w-6 shrink-0`}
                aria-hidden="true"
              />
              Products
              {/*{item.count ? (*/}
              {/*  <span*/}
              {/*    className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"*/}
              {/*    aria-hidden="true"*/}
              {/*  >*/}
              {/*          {item.count}*/}
              {/*        </span>*/}
              {/*) : null}*/}
            </NavLink>
          </li>

          <li>
            <NavLink
              to={'/warehouses'}
              className={
                `${pathname.includes('/warehouses')
                  ? 'bg-gray-50 text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'} group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`}
            >
              <HomeIcon
                className={`${pathname.includes('/warehouses') ? 'text-indigo-600' : 'text-gray-400'} group-hover:text-indigo-600','h-6 w-6 shrink-0`}
                aria-hidden="true"
              />
              Warehouses
              {/*{item.count ? (*/}
              {/*  <span*/}
              {/*    className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"*/}
              {/*    aria-hidden="true"*/}
              {/*  >*/}
              {/*          {item.count}*/}
              {/*        </span>*/}
              {/*) : null}*/}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
