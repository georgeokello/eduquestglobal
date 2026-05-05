const Section = ({ title, children }) => {
  return (
    <section className="mb-5">
      <p 
        className="text-3xl font-extrabold mb-2 text-center">{title}
      </p>
      {children}
    </section>
  );
};

export default Section;