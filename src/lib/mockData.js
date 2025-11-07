export const mockCounties = [
  { id: 1, name: 'Marsabit', coords: [37.9908, 2.3331] },
  { id: 2, name: 'Turkana', coords: [35.5655, 3.1191] },
  { id: 3, name: 'Wajir', coords: [40.0569, 1.7471] },
  { id: 4, name: 'Mandera', coords: [41.8569, 3.9366] },
  { id: 5, name: 'Garissa', coords: [39.6401, -0.4536] },
  { id: 6, name: 'Baringo', coords: [36.0833, 0.4667] }
];

export const mockETData = {
  'Marsabit': [
    { month: 'Jan', year: 2018, ET: 45, P: 25 },
    { month: 'Feb', year: 2018, ET: 52, P: 30 },
    { month: 'Mar', year: 2018, ET: 58, P: 45 },
    { month: 'Apr', year: 2018, ET: 65, P: 85 },
    { month: 'May', year: 2018, ET: 70, P: 95 },
    { month: 'Jun', year: 2018, ET: 68, P: 60 },
    { month: 'Jul', year: 2019, ET: 62, P: 40 },
    { month: 'Aug', year: 2019, ET: 58, P: 35 },
    { month: 'Sep', year: 2019, ET: 55, P: 30 },
    { month: 'Oct', year: 2019, ET: 60, P: 50 },
    { month: 'Nov', year: 2019, ET: 55, P: 70 },
    { month: 'Dec', year: 2019, ET: 48, P: 55 },
    { month: 'Jan', year: 2020, ET: 46, P: 28 },
    { month: 'Feb', year: 2020, ET: 54, P: 32 },
    { month: 'Mar', year: 2020, ET: 60, P: 48 },
    { month: 'Apr', year: 2020, ET: 68, P: 90 },
    { month: 'May', year: 2021, ET: 72, P: 100 },
    { month: 'Jun', year: 2021, ET: 70, P: 65 },
    { month: 'Jul', year: 2021, ET: 64, P: 42 },
    { month: 'Aug', year: 2021, ET: 60, P: 38 },
    { month: 'Sep', year: 2022, ET: 57, P: 33 },
    { month: 'Oct', year: 2022, ET: 62, P: 55 },
    { month: 'Nov', year: 2022, ET: 58, P: 75 },
    { month: 'Dec', year: 2023, ET: 50, P: 60 }
  ],
  'Turkana': [
    { month: 'Jan', year: 2018, ET: 55, P: 15 },
    { month: 'Feb', year: 2018, ET: 62, P: 20 },
    { month: 'Mar', year: 2018, ET: 68, P: 35 },
    { month: 'Apr', year: 2018, ET: 75, P: 65 },
    { month: 'May', year: 2018, ET: 80, P: 75 },
    { month: 'Jun', year: 2018, ET: 78, P: 50 },
    { month: 'Jul', year: 2019, ET: 72, P: 30 },
    { month: 'Aug', year: 2019, ET: 68, P: 25 },
    { month: 'Sep', year: 2019, ET: 65, P: 20 },
    { month: 'Oct', year: 2019, ET: 70, P: 40 },
    { month: 'Nov', year: 2019, ET: 65, P: 60 },
    { month: 'Dec', year: 2019, ET: 58, P: 45 },
    { month: 'Jan', year: 2020, ET: 56, P: 18 },
    { month: 'Feb', year: 2020, ET: 64, P: 22 },
    { month: 'Mar', year: 2020, ET: 70, P: 38 },
    { month: 'Apr', year: 2020, ET: 78, P: 70 },
    { month: 'May', year: 2021, ET: 82, P: 80 },
    { month: 'Jun', year: 2021, ET: 80, P: 55 },
    { month: 'Jul', year: 2021, ET: 74, P: 32 },
    { month: 'Aug', year: 2021, ET: 70, P: 28 },
    { month: 'Sep', year: 2022, ET: 67, P: 23 },
    { month: 'Oct', year: 2022, ET: 72, P: 45 },
    { month: 'Nov', year: 2022, ET: 68, P: 65 },
    { month: 'Dec', year: 2023, ET: 60, P: 50 }
  ]
};

export const mockLandcoverData = {
  'Marsabit': [
    { landcover: 'Shrubland', area: 355262, percentage: 45.5 },
    { landcover: 'Grassland', area: 226378, percentage: 29.8 },
    { landcover: 'Cropland', area: 2738749, percentage: 14.9 },
    { landcover: 'Forest', area: 85000, percentage: 9.8 }
  ],
  'Turkana': [
    { landcover: 'Shrubland', area: 420000, percentage: 52.3 },
    { landcover: 'Grassland', area: 280000, percentage: 27.7 },
    { landcover: 'Barren', area: 150000, percentage: 14.7 },
    { landcover: 'Cropland', area: 55000, percentage: 5.3 }
  ],
  'Baringo': [
    { landcover: 'Shrubland', area: 355262, percentage: 42.1 },
    { landcover: 'Grassland', area: 226378, percentage: 31.5 },
    { landcover: 'Cropland', area: 2738749, percentage: 18.2 },
    { landcover: 'Forest', area: 68000, percentage: 8.2 }
  ]
};

export const kenyaBoundary = [
  [33.9098, 4.6780], [34.0700, 3.0500], [34.4700, 1.8900],
  [34.9500, 0.0500], [35.8000, -0.5000], [36.9300, -1.3200],
  [37.7700, -3.0000], [37.9700, -3.4300], [39.2000, -4.6700],
  [40.9900, -3.9800], [41.8800, -1.5800], [41.5500, 0.0000],
  [41.9100, 2.9000], [41.2900, 3.9700], [40.9800, 4.2500],
  [40.0700, 4.1700], [39.8500, 3.8500], [39.5600, 3.4200],
  [38.8900, 3.5000], [38.1700, 3.6100], [36.8500, 4.4500],
  [35.9400, 4.6200], [35.2600, 5.4900], [34.9500, 5.4300],
  [34.0700, 4.2500], [33.9098, 4.6780]
];