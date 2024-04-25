const AttractionsCard = ({ title, image, activities }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat group cursor-pointer sm:hover:shadow-slate-400 
        sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2
        transition-shadow duration-200 flex flex-col justify-between px-4 py-2 "
      style={{
        backgroundImage: `url(${image})`,
        width: "52vh",
        height: "35vh",
      }}>
      <div></div>
      <div className="text-gray-50">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{activities}</p>
      </div>
    </div>
  );
};

export default AttractionsCard;
