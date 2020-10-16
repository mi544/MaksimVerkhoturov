import Link from "next/link";

const Header = ({ children }) => {
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
            <Link href="/projects">
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <a>Resources</a>
            </Link>
          </li>
          <li>
            <Link href="#ContactMe">
              <a>Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
