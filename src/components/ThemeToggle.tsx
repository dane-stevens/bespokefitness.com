import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`relative h-4 w-full rounded-full bg-zinc-700`}
    >
      <Icon
        icon={theme === "dark" ? "ri:moon-fill" : "ri:sun-fill"}
        className={`-mt-[4px] h-[24px] w-[24px] transition-all duration-100 ${
          theme === "dark"
            ? "ml-[11px] text-blue-300 hover:text-blue-400"
            : "-ml-[4px] text-yellow-400 hover:text-yellow-500"
        }`}
      />
    </button>
  );
}
