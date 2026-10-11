import { HeartPlus, Search, ShoppingCartPlus, SunMoon, UserRoundSearch } from "lucide-react";

export function HeaderActionIcons({
  onToggleDarkMode,
}: {
  onToggleDarkMode: () => void;
}) {
  return (
    <div className="flex justify-around gap-4">
      <Search />
      <UserRoundSearch/>
      <HeartPlus/>
      <ShoppingCartPlus />
      <SunMoon onClick={onToggleDarkMode} className="dark:text-orange-400"/>
    </div>
  );
}