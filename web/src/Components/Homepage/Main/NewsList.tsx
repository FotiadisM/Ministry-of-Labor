import React, { useState } from "react";

interface NewsItemProps {
  date: string;
  text: string;
  href: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ date, text, href }) => {
  return (
    <div className="bg-white py-2 px-3 mb-3 rounded-3 shadow-lg">
      <div>{date}</div>
      <hr className="mt-0 mb-2" />
      <div className="row g-0 pb-2">
        <div className="col">
          <p
            className="text-break mb-0"
            style={{
              maxHeight: "72px",
              overflow: "hidden",
            }}
          >
            {text}
          </p>
        </div>
        <div className="col-auto ms-3 d-flex">
          <button className="btn btn-primary my-auto">
            <i
              className="bi bi-arrow-right-short m-auto"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const news: NewsItemProps[] = [
  {
    date: "28/10/2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "#",
  },
  {
    date: "28/10/2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "#",
  },
  {
    date: "28/10/2020",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    href: "#",
  },
];

interface NewsListsProps {
  title: string;
}

export const NewsList: React.FC<NewsListsProps> = ({ title }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const toggleHover = () => {
    setHovered((h) => !h);
  };

  return (
    <div className="mx-4">
      <h3
        className={
          "ms-3 mb-2 " +
          (hovered ? "text-primary text-decoration-underline" : "")
        }
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {title}
      </h3>
      <div>
        <NewsItem date={news[0].date} text={news[0].text} href={news[0].href} />
        <NewsItem date={news[1].date} text={news[1].text} href={news[1].href} />
        <NewsItem date={news[2].date} text={news[2].text} href={news[2].href} />
      </div>
    </div>
  );
};
