const Section = ({ title, children }) => {
  return (
    <section className="mb-5">
      <h2 className="text-3xl font-light mb-2 text-center">{title}</h2>
      {children}
    </section>
  );
};

export default Section;