import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const EventsPage = ({ data }) => {
  return (
    <div className={styles.main}>
      <h1>Events Page</h1>
      <div className="container my-5">
        <div className="row my-5">
          {" "}
          {data.map((ev, index) => {
            return (
              <div className="col col-md-6 col-lg-4">
                {" "}
                <Link
                  key={index}
                  href={`/events/${ev.id}`}
                  className="d-flex flex-column align-items-center"
                >
                  <Image
                    //src={require(`/src/assets/images/${ev.id}.jpg`)}
                    src={`${ev.image}`}
                    width={300}
                    className="rounded-circle my-2"
                    height={300}
                    alt={ev.title}
                  />
                  <h2>{ev.title}</h2>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
