import { allUsers } from "@/lib/actions";
import { FaEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";

const FetchUsers = async () => {
  const users = await allUsers();

  return (
    <div>
      <p className="font-bold px-2 text-left mb-1">Users Table</p>
      <table className="p-2 border-2 border-blue-900">
        <thead>
          <tr className="border-2 border-gray-400">
            <th className="text-left font-bold">Id</th>
            <th className="text-left font-bold">User Name</th>
            <th className="text-left font-bold">Email</th>
            <th className="text-left font-bold">Actions</th>
          </tr>
        </thead>
        {users.map(user => (
          <tbody key={user.id}>
            <tr>
              <td className="px-4 py-1">{user.id}</td>
              <td className="px-4 py-1">{user.username}</td>
              <td className="px-4 py-1">{user.email}</td>
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

export default FetchUsers;
