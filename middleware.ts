// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const response = NextResponse.next();
  
//   response.cookies.delete('googtrans');
  
//   response.headers.set('Cache-Control', 'no-store, must-revalidate');
  
//   return response;
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };