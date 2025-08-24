'use client';

import { useEffect, useState } from 'react';

import { Clock, Coffee, Laptop, MapPin, Moon, Sun } from 'lucide-react';

interface StatusData {
  isAvailable: boolean;
  currentTime: string;
  timeZone: string;
  workingHours: boolean;
  status: 'working' | 'available' | 'busy' | 'offline';
  statusMessage: string;
  location: string;
}

const statusConfig = {
  working: { color: 'text-green-500', bgColor: 'bg-green-500/20', icon: Laptop },
  available: { color: 'text-blue-500', bgColor: 'bg-blue-500/20', icon: Coffee },
  busy: { color: 'text-yellow-500', bgColor: 'bg-yellow-500/20', icon: Clock },
  offline: { color: 'text-gray-500', bgColor: 'bg-gray-500/20', icon: Moon },
};

function getStatusFromTime(): {
  status: StatusData['status'];
  message: string;
  workingHours: boolean;
} {
  const dubaiTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' });
  const currentTime = new Date(dubaiTime);
  const hours = currentTime.getHours();
  const day = currentTime.getDay(); // 0 = Sunday, 6 = Saturday

  // Working hours: 9 AM - 6 PM, Sunday to Thursday
  const workingHours = day >= 0 && day <= 4 && hours >= 9 && hours <= 18;

  if (workingHours) {
    return {
      status: 'working',
      message: 'Available for work',
      workingHours: true,
    };
  } else if (hours >= 19 && hours <= 23) {
    return {
      status: 'available',
      message: 'Open to freelance projects',
      workingHours: false,
    };
  } else if (hours >= 0 && hours <= 6) {
    return {
      status: 'offline',
      message: 'Probably sleeping',
      workingHours: false,
    };
  } else {
    return {
      status: 'busy',
      message: 'Personal time',
      workingHours: false,
    };
  }
}

export default function DynamicStatus() {
  const [statusData, setStatusData] = useState<StatusData | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      const { status, message, workingHours } = getStatusFromTime();
      const dubaiTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dubai',
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
      });

      setStatusData({
        isAvailable: status === 'working' || status === 'available',
        currentTime: dubaiTime,
        timeZone: 'GST',
        workingHours,
        status,
        statusMessage: message,
        location: 'Dubai, UAE',
      });
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (!statusData) {
    return (
      <section className="mb-8">
        <div className="animate-pulse rounded-lg border bg-card p-4">
          <div className="h-4 w-32 rounded bg-muted" />
          <div className="mt-2 h-3 w-48 rounded bg-muted" />
        </div>
      </section>
    );
  }

  const config = statusConfig[statusData.status];
  const StatusIcon = config.icon;
  const TimeIcon = statusData.workingHours ? Sun : Moon;

  return (
    <section className="mb-8">
      <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
        <div className="flex items-center gap-3">
          {/* Status indicator */}
          <div
            className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm ${config.bgColor}`}
          >
            <div
              className={`relative h-2 w-2 rounded-full ${config.color.replace('text-', 'bg-')}`}
            >
              {statusData.status === 'working' && (
                <div
                  className={`absolute inset-0 h-2 w-2 animate-ping rounded-full ${config.color.replace('text-', 'bg-')}`}
                />
              )}
            </div>
            <StatusIcon className={`h-3 w-3 ${config.color}`} />
            <span className={`font-medium ${config.color}`}>
              {statusData.status.charAt(0).toUpperCase() + statusData.status.slice(1)}
            </span>
          </div>

          {/* Location and time */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>{statusData.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <TimeIcon className="h-3 w-3" />
              <span>
                {statusData.currentTime} {statusData.timeZone}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          {statusData.statusMessage}
          {statusData.isAvailable && (
            <span className="ml-2 font-medium text-primary">Feel free to reach out!</span>
          )}
        </p>
      </div>
    </section>
  );
}
