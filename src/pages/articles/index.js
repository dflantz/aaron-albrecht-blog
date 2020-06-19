import React from "react";

import Layout from "../../components/Layout";
import ArticleRoll from "../../components/ArticleRoll";

export default class ArticleIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/article-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #797270, -0.5rem 0 0 #797270",
              backgroundColor: "#797270",
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Articles
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ArticleRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
