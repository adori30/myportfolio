export default function NavBar() {
  return (
    <nav
      className="flex flex-row items-center md:px-4 text-sm md:text-xl z-20 bg-teal-700
     justify-end w-full h-16 sticky top-0 gap-5 md:gap-12 shadow-lg"
    >
      <MenuItem href="#about-me" className="ml-8">About Me</MenuItem>
      <MenuItem href="#personal-projects">Personal Projects</MenuItem>
      <MenuItem href="#bottom">Contact</MenuItem>
      <div></div>
    </nav>
  );
}

type MenuItemProps = {
  children?: React.ReactElement | string;
  href?: string;
  className?: string;
}

function MenuItem({children, href, className}: MenuItemProps) {
  return (
    <a className={`cursor-pointer ${className}`} href={href}>{children}</a>
  )
}
