'use client';
import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ETChart from '@/components/ETChart';
import LandcoverTable from '@/components/LandcoverTable';
import MapComponent from '@/components/MapComponent';
import useStore from '@/store/useStore';
import { mockCounties, mockETData, mockLandcoverData } from '@/lib/mockData';

export default function EvapotranspirationPage() {
  const router = useRouter();
  const { theme, selectedCounty, setSelectedCounty } = useStore();
  const [chartData, setChartData] = useState([]);
  const [landcoverData, setLandcoverData] = useState([]);
  const [countyCoords, setCountyCoords] = useState(null);

  useEffect(() => {
    // Load data for selected county
    const county = mockCounties.find(c => c.name === selectedCounty);
    if (county) {
      setCountyCoords(county.coords);
    }
    
    setChartData(mockETData[selectedCounty] || mockETData['Marsabit']);
    setLandcoverData(mockLandcoverData[selectedCounty] || mockLandcoverData['Marsabit']);
  }, [selectedCounty]);

  const handleCountyChange = (e) => {
    setSelectedCounty(e.target.value);
  };

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-md transition-colors`}
            >
              <ArrowLeft className={`w-6 h-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
            </button>
            <div>
              <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Evapotranspiration
              </h1>
              <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Explore patterns and trends in water availability and usage across various indicators.
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                Select a category below to view detailed charts and insights.
              </p>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mt-2`}>
                Showing results for: {selectedCounty} (County)
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <select
              className={`px-3 py-1.5 rounded-lg border text-sm ${
                theme === 'dark'
                  ? 'bg-gray-700 border-gray-600 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
            >
              <option>County</option>
            </select>
            <select
              value={selectedCounty}
              onChange={handleCountyChange}
              className={`px-4 py-2 rounded-lg border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-white'
                  : 'bg-white border-gray-300 text-gray-900'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {mockCounties.map(county => (
                <option key={county.id} value={county.name}>
                  {county.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Map Section */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-8`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {selectedCounty} Region
            </h2>
            <div className="flex gap-2">
              <button className={`px-3 py-1 text-sm rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                Base Map
              </button>
              <button className={`px-3 py-1 text-sm rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                Raster Map
              </button>
              <button className={`px-3 py-1 text-sm rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                Vector Data Layers
              </button>
            </div>
          </div>
          <MapComponent 
            theme={theme} 
            selectedCounty={selectedCounty}
            countyCoords={countyCoords}
          />
        </div>

        {/* Chart Section */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-8`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Evapotranspiration and P...
            </h2>
            <div className="flex gap-2">
              <button className={`p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button className={`p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
          <ETChart data={chartData} theme={theme} />
        </div>

        {/* Landcover Table */}
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Landcover classes area (ha) by county
            </h2>
            <div className="flex gap-2">
              <button className={`p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button className={`p-2 rounded ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
          <LandcoverTable data={landcoverData} theme={theme} />
        </div>
      </div>
    </main>
  );
}