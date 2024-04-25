import { allCountries } from "@/lib/actions";
import { FaEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const FetchCountries = async () => {
  const countries = await allCountries();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Country</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        {countries.map(country => (
          <tbody key={country.id}>
            <tr>
              <td className="mx-4 my-1">{country.id}</td>
              <td className="mx-4 my-1">{country.country}</td>
              <td className="mx-4 my-1">{country.description}</td>
              <td className="flex items-center gap-3">
                <a className="flex items-center" href="">
                  <FaEye className="text-xl flex items-center text-blue-500 hover:text-blue-900" />
                </a>
                <form>
                  <button
                    className="flex items-center"
                    type="submit"
                    name="delete">
                    <IoTrash className="text-xl flex items-center text-red-500 hover:text-red-900" />
                  </button>
                </form>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default FetchCountries;
