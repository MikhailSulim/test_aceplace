import { API_URL } from '@/utils/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await fetch(API_URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + process.env.API_KEY,
    },
    body: JSON.stringify({ query: params.id }),
  }).then((res) => res.json());

  return NextResponse.json(data);
}
