import Link from 'next/link'

export default ({ path }) => (
  <ol className="breadcrumb">
    <li className="breadcrumb-item active">
      <Link prefetch href={ "http://localhost:3000/"+path } >
      <a>{path}</a>
      </Link>
    </li>
  </ol>
)