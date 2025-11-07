import { NextResponse } from 'next/server';
import { mockETData } from '@/lib/mockData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const county = searchParams.get('county') || 'Marsabit';
  
  const data = mockETData[county] || mockETData['Marsabit'];
  
  return NextResponse.json(data);
}