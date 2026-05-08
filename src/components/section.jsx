const Section = ({ title, children }) => {
  return (
    <section className="mb-5">
      <p 
        className="text-4xl font-extrabold mb-2 text-center text-[#0D1164]">{title}
      </p>
      {children}
    </section>
  );
};

export default Section;