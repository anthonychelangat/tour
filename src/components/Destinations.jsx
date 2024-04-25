import Card from "./Card";

const Destinations = ({ items }) => {
  return (
    <div
      className="sm:grid sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2
    2xl:grid-cols-3 max-w-6xl mx-auto px-4 py-4">
      {items.map(item => (
        <Card title={item.title} image={item.image} key={item.title} />
      ))}
    </div>
  );
};

export default Destinations;
