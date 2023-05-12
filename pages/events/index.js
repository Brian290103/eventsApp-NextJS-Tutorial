import EvPage from "@/src/Components/events/events-page";
const EventsPage = ({ data }) => {
  return <EvPage data={data} />;
};

export default EventsPage;

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  //console.log(events_categories);
  return {
    props: { data: events_categories },
  };
}
