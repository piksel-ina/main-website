import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useGlobalData from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.scss';
import { Calendar, User } from 'lucide-react';
import Button from '@site/src/components/UI/Atoms/Button';

const HighlightedCard = ({ post, dateLocale }) => (
  <Link to={post.permalink} className={styles.newsArticles__highlightedCard}>
    <img
      src={post.image}
      alt={post.title}
      className={styles.newsArticles__highlightedImage}
      loading="lazy"
    />
    <div className={styles.newsArticles__highlightedOverlay}>
      <div className={styles.newsArticles__highlightedTop}>
        <div className={styles.newsArticles__meta}>
          {post.authors?.[0] && (
            <span className={styles.newsArticles__metaItem}>
              <User size={14} strokeWidth={1.8} />
              {post.authors[0].name}
            </span>
          )}
          <span className={styles.newsArticles__metaItem}>
            <Calendar size={14} strokeWidth={1.8} />
            {new Date(post.date).toLocaleDateString(dateLocale, {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>
      <div className={styles.newsArticles__highlightedBottom}>
        <h3 className={styles.newsArticles__highlightedTitle}>{post.title}</h3>
        <p className={styles.newsArticles__highlightedDesc}>
          {post.description}
        </p>
      </div>
    </div>
  </Link>
);

const ListItem = ({ post }) => (
  <Link to={post.permalink} className={styles.newsArticles__listItem}>
    <div className={styles.newsArticles__listItemImageWrapper}>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className={styles.newsArticles__listItemImage}
          loading="lazy"
        />
      )}
    </div>
    <div className={styles.newsArticles__listItemContent}>
      <h4 className={styles.newsArticles__listItemTitle}>{post.title}</h4>
      <div className={styles.newsArticles__meta}>
        {post.authors?.[0] && (
          <span className={styles.newsArticles__metaItem}>
            <User size={12} strokeWidth={1.8} />
            {post.authors[0].name}
          </span>
        )}
      </div>
    </div>
  </Link>
);

const NewsArticles = () => {
  const { i18n } = useDocusaurusContext();
  const dateLocale = i18n.currentLocale === 'en' ? 'en-US' : 'id-ID';
  const globalData = useGlobalData();
  const pluginData = globalData['featured-blog-data']?.default;
  const featuredPosts = pluginData?.featuredPosts || [];

  const highlighted = featuredPosts.slice(0, 2);
  const listItems = featuredPosts.slice(2, 6);

  if (featuredPosts.length === 0) return null;

  return (
    <section id="news" className={styles.newsArticles}>
      <div className={styles.newsArticles__header}>
        <div className={styles.newsArticles__accentLine}>
          <div className={styles.newsArticles__accentLineBar} />
          <span className={styles.newsArticles__accentText}>
            {translate({
              id: 'homepage.news.tag',
              message: 'Berita & Artikel',
              description: 'Section tag for news and articles',
            })}
          </span>
          <div className={styles.newsArticles__accentLineExtended} />
        </div>
        <h2 className={styles.newsArticles__title}>
          {translate({
            id: 'homepage.news.title',
            message: 'Informasi Terbaru',
            description: 'Main heading for the news section',
          })}
        </h2>
        <p className={styles.newsArticles__subtitle}>
          {translate({
            id: 'homepage.news.subtitle',
            message:
              'Berita, artikel, dan pembaruan terkini seputar platform Piksel dan observasi bumi digital.',
            description: 'Subtitle for the news section',
          })}
        </p>
      </div>

      <div className={styles.newsArticles__grid}>
        <div className={styles.newsArticles__highlighted}>
          {highlighted.map((post) => (
            <HighlightedCard
              key={post.slug}
              post={post}
              dateLocale={dateLocale}
            />
          ))}
        </div>
        <div className={styles.newsArticles__list}>
          {listItems.map((post) => (
            <ListItem key={post.slug} post={post} />
          ))}
          <div className={styles.newsArticles__listFooter}>
            <Button
              to="/blog"
              variant="outlined"
              color="#1D1D1F"
              label={translate({
                id: 'homepage.news.viewAll',
                message: 'Lihat Semua Artikel',
                description: 'Link text to view all blog posts',
              })}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArticles;
