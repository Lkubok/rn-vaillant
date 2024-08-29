import HomeIcon from "@/assets/icons/home-icon.svg"; // Adjust the path to your SVG files
import SearchIcon from "@/assets/icons/search-icon.svg"; // Adjust the path to your SVG files

interface TabBarIconProps {
  name: "home" | "search"; // Add other icon names here
  color: string;
  size?: number;
}

const icons = {
  home: HomeIcon,
  search: SearchIcon,
};

export const TabBarIcon: React.FC<TabBarIconProps> = ({
  name,
  color,
  size = 24,
}) => {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return (
    <Icon
      width={size}
      height={size}
      stroke={color}
      fill={name === "home" ? color : undefined}
    />
  );
};

export default TabBarIcon;
