import { Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom'
import { ErrorPage } from '../pages/error-page'
import { ExamplePage } from '../pages/example-page'
import { HomePage } from '../pages/home-page'

function Layout() {
  return (
    <div>
      <h1>ページ一覧</h1>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/example">users</Link>
        </li>
        <li>
          <Link to="/nowhere">Non-existent path</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="example" element={<ExamplePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
