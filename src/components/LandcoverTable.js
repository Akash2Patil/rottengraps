'use client';

export default function LandcoverTable({ data, theme }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className={`${theme === 'dark' ? 'border-b border-gray-700' : 'border-b border-gray-200'}`}>
            <th className={`text-left py-3 px-4 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              County
            </th>
            <th className={`text-right py-3 px-4 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Shrubland
            </th>
            <th className={`text-right py-3 px-4 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Grassland
            </th>
            <th className={`text-right py-3 px-4 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Cropland, rainfed
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr 
              key={index}
              className={`${theme === 'dark' ? 'border-b border-gray-700 hover:bg-gray-700' : 'border-b border-gray-100 hover:bg-gray-50'} transition-colors`}
            >
              <td className={`py-3 px-4 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {item.landcover}
              </td>
              <td className={`text-right py-3 px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {item.area.toLocaleString()}
              </td>
              <td className={`text-right py-3 px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {(item.area * 0.6).toLocaleString()}
              </td>
              <td className={`text-right py-3 px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {(item.area * 0.8).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}