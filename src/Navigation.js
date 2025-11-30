import { useState } from 'react';
import * as Icons from "lucide-react";

const navLinks = [
  { name: "Home", icon: "Home", active: true },
  { name: "Map", icon: "Map", active: false },
  { name: "Setting", icon: "Settings", active: false },
  { name: "Transfer", icon: "RefreshCcw", active: false },
  { name: "Profile", icon: "User", active: false }
];

function Navigation() {
  const [navs, setNavs] = useState(navLinks);

  return (
    <div className="flex gap-1 text-gray-300 outline">
      {navs.map((link) => {
        const Icon = Icons[link.icon];

        return (
          <Nav
            key={link.name}
            setNavs={setNavs}
            navs={navs}
            icon={Icon}
            name={link.name}
            active={link.active}
          />
        );
      })}
    </div>
  );
}

function Nav({ icon: Icon, name, active, navs, setNavs }) {

  function handleNavChange(name) {
    const updated = navs.map(nav =>
      nav.name === name
        ? { ...nav, active: true }
        : { ...nav, active: false }
    );

    setNavs(updated);
  }

  return (
    <div className="grid gap-5 outline outline-red-50">
      <Icon
        size={24}
        strokeWidth={active ? 0 : 1}
        absoluteStrokeWidth={true}
        fill={active ? "currentColor" : "none"}
        onClick={() => handleNavChange(name)}
      />
      <span>{name}</span>
    </div>
  );
}

export default Navigation;