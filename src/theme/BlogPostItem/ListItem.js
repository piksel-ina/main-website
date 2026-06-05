import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { usePluralForm } from '@docusaurus/theme-common';
import { useDateTimeFormat } from '@docusaurus/theme-common/internal';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import styles from './styles.module.scss';

function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          message: 'One min read|{readingTime} min read',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
        },
        { readingTime },
      ),
    );
  };
}

export default function BlogPostListItem({ children, className }) {
  const { metadata } = useBlogPost();
  const { permalink, title, date, readingTime, tags, frontMatter } = metadata;
  const image = frontMatter.image;

  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const readingTimePlural = useReadingTimePlural();

  const ctaLabel = translate({
    id: 'theme.blog.post.readMoreCta',
    message: 'Baca →',
    description: 'Call-to-action link text on a blog post card in the list',
  });

  return (
    <article className={clsx(styles.card, className)}>
      {image && (
        <Link
          to={permalink}
          className={styles.imageLink}
          tabIndex={-1}
          aria-hidden="true"
        >
          <img src={image} alt="" className={styles.image} loading="lazy" />
        </Link>
      )}
      <div className={styles.body}>
        <div className={styles.eyebrow}>
          <time dateTime={date}>{dateTimeFormat.format(new Date(date))}</time>
          {typeof readingTime !== 'undefined' && (
            <>
              <span className={styles.eyebrowSep}>·</span>
              <span>{readingTimePlural(readingTime)}</span>
            </>
          )}
        </div>

        <h2 className={styles.title}>
          <Link to={permalink} className={styles.titleLink}>
            {title}
          </Link>
        </h2>

        <div className={styles.excerpt}>{children}</div>

        <div className={styles.footer}>
          {tags && tags.length > 0 && (
            <ul className={styles.tags}>
              {tags.map(({ label, permalink: tagPermalink }) => (
                <li key={tagPermalink}>
                  <Link to={tagPermalink} className={styles.tag}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link to={permalink} className={styles.cta}>
            {ctaLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
