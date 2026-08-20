import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center">
      <h1 className="text-3xl font-medium text-[#212121]">Page not found</h1>
      <p className="mt-3 text-sm text-[#4a4a4a]">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="mt-6 rounded bg-[#212121] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
      >
        Back to home
      </Link>
    </div>
  )
}
