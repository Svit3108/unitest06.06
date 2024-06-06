import { rest } from 'msw';

export const handlers = [
  rest.get('/api/auth/user', (req, res, ctx) => {
    return res(ctx.json({ username: 'testuser' }));
  }),
  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(ctx.json({ username: 'testuser' }));
  }),
  rest.post('/api/auth/logout', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];