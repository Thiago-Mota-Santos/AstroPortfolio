type Social = {
    label: string;
    link: string;
  };
  
  type Presentation = {
    socials: Social[];
  };
  
  const presentation: Presentation = {
    socials: [
      {
        label: "Twitter | X",
        link: "https://twitter.com/Thzinhdev",
      },
      {
        label: "Linkedin",
        link: "https://www.linkedin.com/in/thiago-mota-907970251/",
      },
      {
        label: "Github",
        link: "https://github.com/Thiago-Mota-Santos"
      },
    ],
  };
  
  export default presentation;
  