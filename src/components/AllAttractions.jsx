import AllAttractionsCard from "./AllAttractionsCard";

const AllAttractions = ({ items }) => {
  return (
    <div
      className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {items.map(item => (
        <AllAttractionsCard
          title={item.title}
          activities={item.activities}
          image={item.image}
          key={item.title}
        />
      ))}
    </div>
  );
};

export default AllAttractions;
