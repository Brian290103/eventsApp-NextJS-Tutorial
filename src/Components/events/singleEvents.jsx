import React from "react";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const eventId = router?.query.id;

    if (!email.match(validRegex)) {
      return setMessage("Please introduce a new email address");
    }
    setMessage("");

    //console.log(email, eventId);

    try {
      //POST fetch request
      //body emailValue and the eventId

      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, eventId }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      //console.log(data);
      setMessage(data.message);
      setEmail("");
    } catch (e) {
      console.log("ERROR:", e);
      setMessage("ERROR:", e);
    }
  };
  return (
    <div className={styles.main}>
      <h1> {data.title} </h1>
      <Image
        src={data.image}
        width={1000}
        height={500}
        alt={data.title}
        className="w-100 h-100"
      />
      <p> {data.description} </p>

      <form action="" onSubmit={handleSubmit} className="mb-5 container">
        <div className="row">
          <div className="my-2 col-sm-8 col-md-6 col-lg-4 ">
            <label htmlFor="email" className="form-label fw-bold">
              Get Registered for this Event
            </label>
            <input
              type="text"
              id="email"
              placeholder="Insert your Email Here"
              required
              value={email}
              className="form-control w-100"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button className="btn btn-outline-secondary ">Submit</button>
      </form>

      <p>{message}</p>

      {/* <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit"> Submit</button>
      </form>
      <p>{message}</p> */}
    </div>
  );
};

export default SingleEvent;
