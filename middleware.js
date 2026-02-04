import NextAuthMiddleware from 'next-auth/middleware';

export const middleware = NextAuthMiddleware;

export const config = {
  matcher: ['/Contact'],
};