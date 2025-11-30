import * as Icons from "lucide-react";

const navLinks = [
  {
    name: "Home",
    icon: "Home",
  },
	{
		name: "Map",
		icon: "Map"
	},
  {
    name: "Setting",
    icon: "Settings",
  },
	 {
    name: "Transfer",
    icon: "refresh-ccw",
  },
	{
		name: "Profile",
		icon: "user"
	}
];

function Navigation() {
  return (
    <div className="flex gap-4 text-red-500">
      {navLinks.map((link) => {
        const Icon = Icons[link.icon];

        return (
          <Nav
            icon={Icon}
            name={link.name}
            key={link.name}
          />
        );
      })}
    </div>
  );
}

function Nav({ icon: Icon, name }) {
  return (
    <div className="grid gap-5 bg-grey-300">
      <Icon size={24} />
      <span>{name}</span>
    </div>
  );
}

export default Navigation;