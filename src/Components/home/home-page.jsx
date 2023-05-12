import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
export const HomePage = ({ data }) => {
  return (
    <main className="Home">
      {data.map((ev, index) => {
        return (
          <div className="items my-5">
            {" "}
            <Link key={index} href={`/events/${ev.id}`} className="">
              <Image
                className="rounded"
                //src={require(`/src/assets/images/${ev.id}.jpg`)}
                src={`${ev.image}`}
                alt={ev.title}
                width={500}
                height={500}
              />
              <h1>{ev.title}</h1>
              <p>{ev.description}</p>
            </Link>
          </div>
        );
      })}
    </main>
  );
};
