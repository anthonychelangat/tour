import AttractionsCard from "./AttractionsCard";

const Attractions = ({ items }) => {
  return (
    <div
      className="sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
    2xl:grid-cols-4 max-w-6xl mx-auto py-4">
      {items.map(item => (
        <AttractionsCard
          title={item.title}
          activities={item.activities}
          image={item.image}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default Attractions;
