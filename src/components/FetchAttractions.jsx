import { allAttractions } from "@/lib/actions";
import { FaEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const FetchAttractions = async () => {
  const attractions = await allAttractions();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Attraction</th>
            <th>Description</th>
            <th>Destination</th>
            <th>Actions</th>
          </tr>
        </thead>
        {attractions.map(attraction => (
          <tbody key={attraction.id}>
            <tr>
              <td className="mx-4 my-1">{attraction.id}</td>
              <td className="mx-4 my-1">{attraction.attraction}</td>
              <td className="mx-4 my-1">{attraction.attraction_des}</td>
              <td className="mx-4 my-1">{attraction.destination}</td>
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

export default FetchAttractions;
