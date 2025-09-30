import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Switch } from "../ui/switch";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const setTheme = (checked) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Sun
        className={`h-5 w-5 ${isDarkMode ? "text-primary/50" : "text-primary"}`}
      />
      <Switch
        checked={isDarkMode}
        onCheckedChange={(checked) => setTheme(checked)}
      />
      <Moon
        className={`h-5 w-5 ${isDarkMode ? "text-primary" : "text-primary/50"}`}
      />
    </div>
  );
}
