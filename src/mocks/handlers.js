import { rest } from 'msw';

export const handlers = [
  rest.get('/api/recipes', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'Spaghetti Bolognese' },
        { id: 2, name: 'Käsekuchen' },
      ])
    );
  }),
];