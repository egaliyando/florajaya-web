interface MaterialIconProps {
  icon: string;
  filled?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeMap = {
  sm: "text-sm",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
};

export default function MaterialIcon({
  icon,
  filled = false,
  className = "",
  size = "lg",
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${sizeMap[size]} ${filled ? "filled-icon" : ""} ${className}`}
    >
      {icon}
    </span>
  );
}
