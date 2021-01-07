import React from "react";

interface LinkProps {
  text: string;
  link: string;
}

const Link: React.FC<LinkProps> = ({ text, link }) => {
  return (
    <div className="text-center d-flex justify-content-center">
      <div
        className="bg-primary rounded-pill my-auto"
        style={{ width: "12px", height: "12px" }}
      ></div>
      <div className="ms-2 fs-5">{text}</div>
    </div>
  );
};

interface BoxProps {
  title: string;
  links: LinkProps[] | null;
}

const Box: React.FC<BoxProps> = ({ title, links }) => {
  return (
    <div className="shadow rounded-3">
      <div
        className="text-center fw-bolder text-primary border border-2 border-primary rounded-3 py-2"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        {title}
      </div>
      {links !== null ? (
        <div className="bg-white container-fluid rounded-3">
          <div className="row g-0 row-cols-2 pb-2">
            {links.map((l, i) => {
              return (
                <div className="col mt-2" key={i}>
                  <Link text={l.text} link={l.link} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

interface LinksBoxProps {
  title: string;
  boxes: BoxProps[];
}

const LinksBox: React.FC<LinksBoxProps> = ({ title, boxes }) => {
  return (
    <div>
      <h3 className="text-center mb-4 fw-border">{title}</h3>
      <div className="container px-0">
        <div className="row row-cols-4 gx-3 gy-2">
          {boxes.map((b) => {
            return (
              <div className="col" key={b.title}>
                <Box title={b.title} links={b.links} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const boxes: LinksBoxProps[] = [
  {
    title: "Υπηρεσίες για:",
    boxes: [
      {
        title: "Ασφαλισμένους",
        links: [
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
        ],
      },
      {
        title: "Εργοδότες",
        links: [
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
        ],
      },
      {
        title: "Συνταξιούχους",
        links: [
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
        ],
      },
      {
        title: "Ανέργους",
        links: [
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
          { text: "Fast link", link: "/link" },
        ],
      },
    ],
  },
  {
    title: "Πληροφορίες για:",
    boxes: [
      {
        title: "Προσκλήσεις",
        links: null,
      },
      {
        title: "Προκηρύξεις",
        links: null,
      },
      {
        title: "Διακηρύξεις",
        links: null,
      },
      {
        title: "Συμβάσεις",
        links: null,
      },
      {
        title: "Προγράμματα",
        links: null,
      },
      {
        title: "Εκστρατίες",
        links: null,
      },
      {
        title: "Δαπάνες",
        links: null,
      },
      {
        title: "Ασφαλιστικούς Φορείς",
        links: null,
      },
    ],
  },
];

interface MiddlePageProps {}

export const MiddlePage: React.FC<MiddlePageProps> = () => {
  return (
    <div>
      {boxes.map((b) => {
        return (
          <div className="py-5" key={b.title}>
            <LinksBox title={b.title} boxes={b.boxes} />
          </div>
        );
      })}
    </div>
  );
};
