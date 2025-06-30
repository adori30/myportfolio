type Props = {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  title?: string;
};

export default function Section({ title, className, children, id }: Props) {
  return (
    <section
      className="p-8 flex flex-col w-full"
      id={id}
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <div className="relative inline-block w-96 h-32 self-center mb-24">
        <div className="absolute w-70 h-8 bg-teal-800 bottom-7 right-12" />
        <h1 className="absolute top-0 left-0">{title}</h1>
      </div>
      <div className={className}>{children}</div>
    </section>
  );
}
