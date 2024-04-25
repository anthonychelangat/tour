import { allCountries } from "@/lib/actions";
import { selectedCountryId } from "@/lib/helpers";

const SelectCountry = async () => {
  const countries = await allCountries();

  return (
    <div>
      <select
        onFocus={selectedCountryId}
        className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
        id="country"
        name="country">
        {countries.map(country => (
          <option id={country.id} key={country.id} value={country.id}>
            {country.country}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectCountry;
