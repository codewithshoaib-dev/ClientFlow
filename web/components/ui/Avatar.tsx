
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Avatar({
  name, 
  size = "md",
  className,
}: {
  name: string;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-accent/15 font-medium text-accent",
        size === "sm" ? "h-7 w-7 text-xs" : "h-9 w-9 text-sm",
        className,
      )}
    >
      {initials(name)}
    </div>
  );
}
