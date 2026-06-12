import React, { useState, useEffect } from 'react';

export default function TimeWidget({ location, timezone, status }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const options = {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        setTime(formatter.format(new Date()));
      } catch (e) {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex flex-col items-end text-right font-display select-none">
      <span className="text-xs text-theme-textMuted uppercase tracking-wider">Current location:</span>
      <span className="text-2xl font-semibold text-theme-textLight leading-tight">
        {location.split(',')[0]} <span className="text-theme-accent">{time}</span>
      </span>
      <div className="flex items-center gap-1.5 mt-1 text-xs font-medium text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>{status}</span>
      </div>
    </div>
  );
}
