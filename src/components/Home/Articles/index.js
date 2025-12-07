import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Carousel from "../../UI/Carousel";
import styles from "./styles.module.css";

import { articlesData as defaultArticles } from "@site/src/data/homepageData";

import Link from "@docusaurus/Link";

const Articles = ({ articles = [], title }) => {
  const articlesData = articles.length > 0 ? articles : defaultArticles;

  const defaultTitle = translate({
    id: "articles.title",
    message: "Artikel Pilihan",
  });

  const displayTitle = title || defaultTitle;

  const renderArticle = (article) => (
    <Link
      className={styles.articleCard}
      to={article.link}
      style={{ textDecoration: "none" }}
    >
      {article.image && (
        <div className={styles.articleTop}>
          <div className={styles.articleImage}>
            <img src={article.image} alt={article.title} loading="lazy" />
          </div>
          <h3 className={styles.articleTitle}>{article.title}</h3>
        </div>
      )}

      <div className={styles.articleBody}>
        <p className={styles.articleDescription}>{article.description}</p>
        {article.date && (
          <div className={styles.articleDate}>
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        )}
      </div>
    </Link>
  );

  return (
    <div className={styles.articlesWrapper}>
      <Carousel
        items={articlesData}
        title={displayTitle}
        renderItem={renderArticle}
        itemsPerView={{ desktop: 3, tablet: 2, mobile: 1 }}
        showNavigation={true}
        showPagination={true}
      />
    </div>
  );
};

export default Articles;
