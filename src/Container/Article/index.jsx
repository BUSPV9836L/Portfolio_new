import React, { useEffect, useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import "../MyWorkDetails/MyWorkDetails.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
const articles = [
  {
    id: 1,
    title: "How to Implement Stripe in Your App",
    content:
      "Stripe is a powerful payment gateway that allows you to process payments securely. To implement Stripe, first sign up on Stripe's website and get your API keys. Then, install the Stripe SDK and use it to handle payments within your app.",
    code: `import Stripe from 'stripe';\nconst stripe =\n new Stripe('your-secret-key');`,
  },
  {
    id: 2,
    title: "How to Implement Edex",
    content:
      "Edex is a platform that offers educational courses. To implement Edex, integrate its API into your app and authenticate users. You can then fetch courses and display them dynamically.",
    code: `fetch('https://api.edex.com/courses')\n  .then(response => response.json())\n  .then(data => console.log(data));`,
  },
];

const Article = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const codeStyle =
    screenWidth < 768 ? { fontSize: "12px" } : { fontSize: "18px" };
  return (
    <div className="mywork">
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="my-work-details-container">
        {articles.map((article) => (
          <div key={article.id} className="work-card">
            <h2 className="work-title">{article.title}</h2>
            <p className="work-content">{article.content}</p>
            <div className="work-descriptions">
              <SyntaxHighlighter
                language="javascript"
                style={atomDark}
                customStyle={codeStyle}
              >
                {article.code}
              </SyntaxHighlighter>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
