const Card = ({ title, image, activities }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat group cursor-pointer sm:hover:shadow-slate-400 
      sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2
      transition-shadow duration-200 "
      style={{
        backgroundImage: `url(${image})`,
        width: "75vh",
        height: "45vh",
      }}>
      <h2 className="text-xl text-gray-900 font-bold mt-6 ml-4">{title}</h2>
    </div>
  );
};

export default Card;
