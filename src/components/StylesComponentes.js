import React from "react";

const H1Title = ({ children, className }) => {
  return (
    <h1
      className={`max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-color1 ${className}`}
    >
      {children}
    </h1>
  );
};

const H2Title = ({ children, className }) => {
  return (
    <h2
      className={`max-w-md text-4xl font-bold text-center md:text-left my-2 sm:text-color1 lg:text-black ${className}`}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`max-w-sm  text-stone-600 text-center md:text-left ${className}`}
    >
      {children}
    </p>
  );
};

const Button = ({ children, className }) => (
  <div
    className={`p-3 text-white bg-color1 rounded-full baseline cursor-pointer hover:bg-color3 md:block ${className}`}
  >
    {children}
  </div>
);

const Contenedor = ({ children, className }) => (
  <div className={`flex flex-col lg:flex-wrap lg:flex-row ${className}`}>{children}</div>
);

export { H2Title, H1Title, Paragraph, Button,Contenedor };
