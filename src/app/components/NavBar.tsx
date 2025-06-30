export default function NavBar() {
  return (
    <section
      className="flex flex-row items-center px-4 text-xl z-20 bg-gradient-to-r from-teal-300 to-teal-700
     justify-end w-full h-20 sticky top-0 gap-12"
    >
      <MenuItem>About Me</MenuItem>
      <MenuItem>My Experiences</MenuItem>
      <div></div>
    </section>
  );
}

type MenuItemProps = {
  children?: React.ReactElement | string;
}

function MenuItem({children}: MenuItemProps) {
  return (
    <div className="cursor-pointer">{children}</div>
  )
}
