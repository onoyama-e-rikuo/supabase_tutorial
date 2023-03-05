import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) =>
    res(
      ctx.status(210),
      ctx.json([
        { id: 123, name: 'mock_1' },
        { id: 1432, name: 'mock_2' }
      ])
    )
  )
]
