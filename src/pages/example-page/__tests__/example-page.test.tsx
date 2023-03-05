import { render, screen } from '@testing-library/react'
import { fetch } from 'cross-fetch'
import { ExamplePage } from '../routes/example'
import { server } from './mocks/server'

global.fetch = fetch

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('モックデータが2件表示されていること', async () => {
  render(<ExamplePage />)
  expect(await screen.findAllByRole('listitem')).toHaveLength(2)
})
