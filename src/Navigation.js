import * as Icons from "lucide-react";

const navLinks = [
    {
        name: "Home",
        icon: "Home"
    },
    {
        name: "Setting",
        icon: "Settings"
    }
]

function Navigation () {
    return (
        <div className="flex gap-4 text-red-500">
        {
            navLinks.map(link => {
                const Icon = Icons[link.icon];
                
                return (
                    <Nav 
                        icon={Icon}
                        name={link.name}
                        key={link.name}
                    />
                )
            })
        }
        </div>
    )
}

function Nav ({ icon: Icon, name }) {
    return (
        <div>
            <Icon size={24} />
            <span>{name}</span>
        </div>
    )
}

export default Navigation