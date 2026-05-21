import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useGlobalData from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Calendar, User } from 'lucide-react';
import Button from '@site/src/components/UI/Atoms/Button';
import styles from './styles.module.scss';

const HighlightedCard = ({ post, dateLocale }) => (
  <Link to={post.permalink} className={styles.card}>
    {post.image && (
      <img
        src={post.image}
        alt={post.title}
        className={styles.card__img}
        loading="lazy"
      />
    )}
    <div className={styles.card__body}>
      <h3 className={styles.card__title}>{post.title}</h3>
      <p className={styles.card__desc}>{post.description}</p>
      <div className={styles.card__meta}>
        {post.authors?.[0] && (
          <span className={styles.meta}>
            <User size={11} strokeWidth={1.8} /> {post.authors[0].name}
          </span>
        )}
        <span className={styles.meta}>
          <Calendar size={11} strokeWidth={1.8} />{' '}
          {new Date(post.date).toLocaleDateString(dateLocale, {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>
    </div>
  </Link>
);

const ListItem = ({ post }) => (
  <Link to={post.permalink} className={styles.item}>
    {post.image && (
      <img
        src={post.image}
        alt={post.title}
        className={styles.item__img}
        loading="lazy"
      />
    )}
    <div className={styles.item__body}>
      <h4 className={styles.item__title}>{post.title}</h4>
      <p className={styles.item__desc}>{post.description}</p>
      {post.authors?.[0] && (
        <div className={styles.item__author}>
          <span className={styles.meta}>
            <User size={11} strokeWidth={1.8} /> {post.authors[0].name}
          </span>
        </div>
      )}
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
    <section id="news" className={styles.artboard}>
      <div className={styles.coords}>
        <span className="pk-coord">SECTION · 03 / BERITA</span>
      </div>

      <header className={styles.header}>
        <div>
          <span className={styles.header__eyebrow}>
            {translate({
              id: 'homepage.news.tag',
              message: 'Berita & Artikel',
            })}
          </span>
          <h2 className={styles.header__title}>
            {translate({
              id: 'homepage.news.title',
              message: 'Informasi Terbaru',
            })}
          </h2>
        </div>
        <p className={styles.header__sub}>
          {translate({
            id: 'homepage.news.subtitle',
            message:
              'Berita, artikel, dan pembaruan terkini seputar platform Piksel dan observasi bumi digital.',
          })}
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.highlighted}>
          {highlighted.map((post) => (
            <HighlightedCard
              key={post.slug}
              post={post}
              dateLocale={dateLocale}
            />
          ))}
        </div>
        <div className={styles.list}>
          {listItems.map((post) => (
            <ListItem key={post.slug} post={post} />
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <Button
          to="/blog"
          variant="outline"
          color="#1D1D1F"
          label={translate({
            id: 'homepage.news.viewAll',
            message: 'Lihat Semua Artikel',
          })}
        />
      </div>
    </section>
  );
};

export default NewsArticles;
