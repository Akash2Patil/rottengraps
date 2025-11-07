import { NextResponse } from 'next/server';
import { mockCounties } from '@/lib/mockData';

export async function GET() {
  return NextResponse.json(mockCounties);
}