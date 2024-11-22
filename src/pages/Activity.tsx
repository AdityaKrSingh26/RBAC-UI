import React from 'react';
import { Activity as ActivityIcon } from 'lucide-react'; // Assuming lucide-react is installed
import { useTheme } from '../contexts/ThemeContext';
import { format } from 'date-fns';
import { Activity as ActivityData } from '../Data/Data'; // Importing Activity data from data.ts

const Activity: React.FC = () => {
  const { theme } = useTheme();

  // Directly using the Activity data from data.ts
  const activities = ActivityData;

  return (
    <div>
      <h1 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
        Activity Log
      </h1>

      <div className={`flow-root ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } rounded-lg shadow`}>
        <ul role="list" className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className={`h-8 w-8 rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                      } flex items-center justify-center ring-8 ${theme === 'dark' ? 'ring-gray-800' : 'ring-white'
                      }`}>
                      <ActivityIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                        {activity.type}{' '}
                        <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                          }`}>
                          {activity.userId}
                        </span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500 pr-3">
                      {format(new Date(activity.timestamp), 'MMM d, yyyy HH:mm')}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Activity;
