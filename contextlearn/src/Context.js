import React from "react";

export const family = {
  mother: {
    name: "Seher",
    surName: "Özbalcı",
  },
  father: {
    name: "Eşref",
    surName: "Özbalcı",
  },
};

const MyContext = React.createContext(family);
MyContext.displayName = "BenimContextimbenimDunyam";

export { MyContext };
