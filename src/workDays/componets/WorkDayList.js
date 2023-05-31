import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const WorkDayList = (workDays) => {

    const formattedDate = moment(workDays.date).format('MM/DD/YYYY'); // returns a string in the format of MM/DD/YYYY

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workDays.items?.map((workDay) => (
        <li key={workDay._id} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <Link to={`/workday/${workDay._id}`}>
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h1 className="truncate text-sm font-medium text-gray-900">{workDay.name}</h1>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">{formattedDate}</p>
            </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default WorkDayList;
