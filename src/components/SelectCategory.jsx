import { allCategories } from "@/lib/actions";

const SelectCategory = async () => {
  const categories = await allCategories();
  return (
    <div>
      <select
        className="bg-transparent w-[30rem] py-2 px-4 outline-none border-2 border-solid border-gray-500 focus:border-blue-900"
        id="category"
        name="category">
        {categories.map(category => (
          <option key={category.id} value={category.id}>
            {category.type_of_accomodation}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectCategory;
