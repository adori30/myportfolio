export default function NavBar() {
  return (
    <section
      className="flex flex-row items-center px-4 text-xl z-20 bg-teal-700
     justify-end w-full h-16 sticky top-0 gap-12"
    >
      <MenuItem href="#about-me">About Me</MenuItem>
      {/* <MenuItem>My Experiences</MenuItem> */}
      <div></div>
    </section>
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
