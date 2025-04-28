import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4">
        Error 404 Page Not Found
        <Link to="/">Home from Link</Link>
        <a href="/">Home from A</a>
    </div>
  )
}
