type Props = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  title?: string;
};

export default function Section({ title, className, children, id }: Props) {
  return (
    <section
      className="px-8 flex flex-col w-full min-h-screen"
      id={id}
    >
      <div className="relative inline-block w-96 md:h-32 self-center mb-12">
        <div className="absolute w-40 h-8 bg-teal-800 bottom-7 right-24 top-30" />
        <h3 className="absolute top-20 left-12">{title}</h3>
      </div>
      <div className={`mt-28 md:mt-0 h-full ${className}`}>{children}</div>
    </section>
  );
}
