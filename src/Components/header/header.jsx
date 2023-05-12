import Link from "next/link";
import Image from "next/image";
export const Header = () => {
  return (
    <header>
      <div className=" ">
        <div className="d-flex justify-content-between align-items-center">
          <Link href="/">
            <Image
              alt="logo"
              src={require("/src/assets/images/next.svg")}
              width={150}
              height={100}
            />
          </Link>

          <nav>
            <ul className="d-flex " style={{ gap: 30 }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
