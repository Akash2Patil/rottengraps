import { NextResponse } from 'next/server';
import { mockLandcoverData } from '@/lib/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const county = searchParams.get('county') || 'Marsabit';
  
  const data = mockLandcoverData[county] || mockLandcoverData['Marsabit'];
  
  return NextResponse.json(data);
}