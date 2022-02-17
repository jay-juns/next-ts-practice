import Link from "next/link"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contents">
              <a>Contents</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;