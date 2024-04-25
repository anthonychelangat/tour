import NavItem from "@/components/placesNav/NavItem";

const PlacesNav = () => {
  const items = [
    {
      title: "Uganda",
      place: "uganda",
    },
    {
      title: "Eastern Uganda",
      place: "eUganda",
    },
    {
      title: "Mt. Elegon",
      place: "elegon",
    },
    {
      title: "Mt. Rwenzori",
      place: "rwenzori",
    },
    {
      title: "River Nile",
      place: "nile",
    },
    {
      title: "Gorrillas",
      place: "gorrillas",
    },
  ];
  return (
    <div>
      <NavItem items={items} />
    </div>
  );
};
export default PlacesNav;
