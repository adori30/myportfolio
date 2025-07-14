type Props = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  title?: string;
};

export default function Section({ title, className, children, id }: Props) {
  return (
    <section className="px-4 md:px-8 flex flex-col w-full min-h-[80vh] overflow-x-hidden" id={id}>
      <div className="relative inline-block self-center mt-16">
      <span className="relative z-10 text-3xl md:text-4xl xl:text-5xl">{title}</span>
      <div className="absolute w-32 md:w-40 h-5 md:h-5 bg-teal-800 -right-5 bottom-0 z-0" />
      </div>
      <div className={`mt-8 md:mt-0 h-full ${className}`}>{children}</div>
    </section>
  );
}
