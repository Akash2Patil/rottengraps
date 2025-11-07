'use client';
import { Droplets, Leaf, Cloud, Database } from 'lucide-react';
import CategoryCard from '@/components/CategoryCard';
import MapComponent from '@/components/MapComponent';
import useStore from '@/store/useStore';
import { mockCounties } from '@/lib/mockData';

export default function HomePage() {
  const { theme, statsType, setStatsType } = useStore();

  const categories = [
    {
      title: 'Water Availability and Usage Analysis',
      subtitle: 'Find Evapotranspiration, Precipitation, Water Footprint, Virtual Water data',
      value: '154.17',
      icon: <img src='/icons/drop.svg'/>,
      link: '/evapotranspiration'
    },
    {
      title: 'Ecosystem and Land Insights',
      subtitle: 'Find Biomass Production, Land Cover classification and Hydrometric Zones data',
      value: '154.17',
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      link: '/evapotranspiration'
    },
    {
      title: 'Climate and Environmental Conditions',
      subtitle: 'Find Drought Condition and Climate Change data',
      value: '154.17',
      icon: <Cloud className="w-6 h-6 text-orange-600" />,
      link: '/evapotranspiration'
    },
    {
      title: 'Additional Data and Resources',
      subtitle: 'Find Cropping Intensity, Elevation, Population Data, Surface Water and more data here',
      value: '154.17',
      icon: <Database className="w-6 h-6 text-purple-600" />,
      link: '/evapotranspiration'
    }
  ];

  return (
    <main className={`w-full relative`}>
      {/* Map Section */}
      {/* <div className="flex items-center gap-2 mb-2">
                <select className={`px-3 py-1.5 border text-sm ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}>
                  <option>Country</option>
                  <option selected>Kenya</option>
                </select>
              </div> */}
      {/* <MapComponent 
            theme={theme} 
            selectedCounty="Kenya" 
            countyCoords={[37.9062, 0.0236]}
          /> */}
          <MapComponent countyCoords={[37.9062, 0.0236]} />

          {/*Info section*/}
      <div className="absolute bottom-0 left-0 right-0 py-5 bg-white/10 border border-white/20 backdrop-blur-md text-white">

        <div className='border-b-1 border-[#dadada]'>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">

            <div className='flex flex-col px-8'>
              <h2 className={`text-2xl font-normal ${theme === 'dark' ? 'text-white' : 'text-white'}`}>
                View Overall Stats
              </h2>
              <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-white'} mt-1`}>
                Switch between Total and Cropland stats using the buttons below. Click on the cards to view them.
              </p>
              {/*button*/}
              <div className={`${theme === 'dark' ? 'bg-gray-600' : 'bg-white'}flex mt-5 w-fit rounded-sm`}>
              <button
                onClick={() => setStatsType('total')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  statsType === 'total'
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } text-[#3F7FC0]`}
              >
                Total Area Stats
              </button>
              <button
                onClick={() => setStatsType('cropland')}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                  statsType === 'cropland'
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Cropland Area Stats
              </button>
            </div>
            </div>
            
          </div>
          
        </div>

        {/* Category Cards */}
        <div className="flex gap-3 w-[98%] ml-auto mt-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              {...category}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </main>
  );
}