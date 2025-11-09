"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ETChart from "@/components/ETChart";
import LandcoverTable from "@/components/LandcoverTable";
import MapComponent from "@/components/MapComponent";
import useStore from "@/store/useStore";
import { mockCounties, mockETData, mockLandcoverData } from "@/lib/mockData";
import Link from "next/link";

export default function EvapotranspirationPage() {
  const router = useRouter();
  const { theme, selectedCounty, setSelectedCounty } = useStore();
  const [chartData, setChartData] = useState([]);
  const [landcoverData, setLandcoverData] = useState([]);
  const [countyCoords, setCountyCoords] = useState(null);

  useEffect(() => {
    // Load data for selected county
    const county = mockCounties.find((c) => c.name === selectedCounty);
    if (county) {
      setCountyCoords(county.coords);
    }

    setChartData(mockETData[selectedCounty] || mockETData["Marsabit"]);
    setLandcoverData(
      mockLandcoverData[selectedCounty] || mockLandcoverData["Marsabit"]
    );
  }, [selectedCounty]);

  const handleCountyChange = (e) => {
    setSelectedCounty(e.target.value);
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <main
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } transition-colors`}
    >
      <div className=" flex flex-col lg:flex-row">
        {/* contentsection */}
        <div className={`${isCollapsed ? "hidden" : "w-full lg:w-1/2 block "} content-section pt-2 p-5 lg:p-6 relative`}>
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-8 gap-4">
            <div className="flex items-start gap-1 lg:gap-4">
              
              <div>
                <div className="flex gap-2 items-center">
                  <Link href="/">
                <ChevronLeft className={`w-9 h-9 ${
                    theme === "dark" ? "text-white" : "text-[#919194]"
                  }`}/>
              </Link>
                <h1
                  className={`text-2xl lg:text-4xl font-normal ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                  >
                  Evapotranspiration
                </h1>
                  </div>
                <p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-white" : "text-[#60646C]"
                  }`}
                >
                  Explore patterns and trends in water availability and usage
                  across various indicators.
                </p>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-white" : "text-[#60646C]"
                  } mt-1`}
                >
                  Select a category below to view detailed charts and insights.
                </p>
                <p
                  className={`text-sm font-medium ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  } mt-8`}
                >
                  <span className={`text-sm ${theme === "dark" ? "text-white" : "text-[#60646C]"}`}>Showing results for:</span> {selectedCounty} (County)
                </p>
              </div>
            </div>

          </div>

          {/* Chart Section */}
          <div
            className={`${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } rounded-xl mb-8 border-1 border-[#CDCED6] overflow-hidden`}
          >
            <div className={`flex items-center justify-between mb-6 p-2 lg:p-5 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b-1 border-[#CDCED6]`}>
              <h2 className={`text-lg lg:text-xl font-normal ${theme === "dark" ? "text-white" : "text-[#1C2024]"}`}>
                Evapotranspiration and Ref. ET
              </h2>
              <div className="flex gap-2 p-3">
                <button className={`p-2 rounded  ${theme === "dark" ? "hover:bg-gray-700 text-white": "hover:bg-gray-100 text-black"}`}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
                <button
                  className={`p-2 rounded ${theme === "dark" ? "hover:bg-gray-700 text-white": "hover:bg-gray-100 text-black"}`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <ETChart data={chartData} theme={theme} />
          </div>

          {/* Landcover Table */}
           <div className={`${theme === "dark" ? "bg-gray-800" : "bg-white"} rounded-xl mb-8 border-1 border-[#CDCED6] overflow-hidden`}
          >
          <div className={`flex items-center justify-between mb-6 p-2 lg:p-5 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b-1 border-[#CDCED6]`}>

               <h2 className={`text-lg lg:text-xl font-normal ${theme === "dark" ? "text-white" : "text-[#1C2024]"}`}>
                Landcover classes area (ha) by county
              </h2>
              <div className="flex gap-2 p-3">
                <button
                  className={`p-2 rounded ${
                    theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-gray-100 text-black"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
                <button
                  className={`p-2 rounded ${
                    theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-gray-100 text-black"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                
              </div>
            </div>
            <LandcoverTable data={landcoverData} theme={theme} />
          </div>

          
        </div>

        {/* Map Section */}
        <div
          className={` ${ isCollapsed ? "w-[100%] h-screen": "w-full lg:w-1/2 h-full"} relative`}
        >
          <button className={`${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          } hidden lg:block w-[25px] h-[50px] bg-white absolute left-[-5] rounded z-50 top-1/3 flex justify-center items-center cursor-pointer ${theme === "dark" ? "bg-gray-500" : undefined}`} onClick={()=>{
              setIsCollapsed(!isCollapsed)
          }}>
            <ChevronLeft className={`text-black transition-transform duration-300 ${
                isCollapsed ? "rotate-180" : ""
              }  `}/>
          </button>
          <MapComponent
            theme={theme}
            selectedCounty={selectedCounty}
            countyCoords={countyCoords}
          />
        </div>
      </div>
    </main>
  );
}
