import { allDestinations } from "@/lib/actions";
import { FaEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const FetchDestinations = async () => {
  const destinations = await allDestinations();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Destination</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        {destinations.map(destination => (
          <tbody key={destination.id}>
            <tr>
              <td className="mx-4 my-1">{destination.id}</td>
              <td className="mx-4 my-1">{destination.name}</td>
              <td className="mx-4 my-1">{destination.description}</td>
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

export default FetchDestinations;
