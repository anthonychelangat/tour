import { allRegionsPerCountry } from "@/lib/actions";

const SelectRegion = async () => {
  const regions = await allRegionsPerCountry();
  return (
    <div>
      <select
        className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
        id="region"
        name="region">
        {regions.map(region => (
          <option key={region.id} value={region.region}>
            {region.region}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectRegion;
