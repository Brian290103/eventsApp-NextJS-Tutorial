import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const EventsCatPage = ({ data, pageName }) => {
  return (
    <div className={styles.main}>
      <h1>Events in {pageName}</h1>
      <div className="container">
        <div className="row">
          {data.map((ev, index) => {
            return (
              <div className="col-3 my-3">
                <div className=" p-3">
                  <Link a key={index} href={`/events/${ev.city}/${ev.id}`}>
                    <Image
                      //src={require(`/src/assets/images/${ev.city}.png`)}
                      //src={require(`/src/assets/images/sf-blockchain-week.png`)}
                      className="rounded w-100"
                      src={`${ev.image}`}
                      width={250}
                      height={200}
                      alt={ev.title}
                    />
                    <h2 className="fs-5 my-2 fw-bold">{ev.title}</h2>
                    <p>{ev.description}</p>
                  </Link>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return { params: { cat: ev.id.toString() } };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //console.log(context);
  const id = context?.params.cat;

  const { allEvents } = await import("/data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);

  const pageName = id.toLowerCase().charAt(0).toUpperCase() + id.slice(1);

  return { props: { data, pageName } };
}
