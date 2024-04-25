import { allDestinations } from "@/lib/actions";

const SelectDestination = async () => {
  const destinations = await allDestinations();
  return (
    <div>
      <select
        className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
        id="destination"
        name="destination">
        {destinations.map(destination => (
          <option key={destination.id} value={destination.id}>
            {destination.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectDestination;
