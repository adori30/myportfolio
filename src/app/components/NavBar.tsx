export default function NavBar() {
  return (
    <nav
      className="flex flex-row items-center md:px-4 md:text-xl z-20 bg-teal-700
     justify-end w-full h-16 sticky top-0 gap-12 shadow-lg"
    >
      <MenuItem href="#about-me">About Me</MenuItem>
      <MenuItem href="#personal-projects">Personal Projects</MenuItem>
      <MenuItem href="#bottom">Contact</MenuItem>
      <div></div>
    </nav>
  );
}

type MenuItemProps = {
  children?: React.ReactElement | string;
  href?: string;
}

function MenuItem({children, href}: MenuItemProps) {
  return (
    <a className="cursor-pointer" href={href}>{children}</a>
  )
}
