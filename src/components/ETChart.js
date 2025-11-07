'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function ETChart({ data, theme }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-3 rounded-lg shadow-lg border`}>
          <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            {payload[0].payload.month} {payload[0].payload.year}
          </p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value} mm
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
        <XAxis 
          dataKey="month" 
          stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
        />
        <YAxis 
          stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'}
          label={{ 
            value: 'mm/month', 
            angle: -90, 
            position: 'insideLeft', 
            fill: theme === 'dark' ? '#9ca3af' : '#6b7280' 
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="ET" 
          stroke="#ef4444" 
          strokeWidth={2}
          dot={{ r: 3 }}
          name="Evapotranspiration (ET)"
        />
        <Line 
          type="monotone" 
          dataKey="P" 
          stroke="#3b82f6" 
          strokeWidth={2}
          dot={{ r: 3 }}
          name="Net ET"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}