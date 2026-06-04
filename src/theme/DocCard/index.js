import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import {
  findFirstSidebarItemLink,
  useDocById,
} from '@docusaurus/plugin-content-docs/client';
import { usePluralForm } from '@docusaurus/theme-common';
import styles from './styles.module.scss';

function useCategoryItemsPlural() {
  const { selectMessage } = usePluralForm();
  return (count) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.DocCard.categoryDescription.plurals',
          message: '1 item|{count} items',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count },
      ),
    );
}

function CardLayout({ href, eyebrow, title, description }) {
  return (
    <Link href={href} className={styles.card}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <span className={styles.title}>{title}</span>
      {description && <span className={styles.description}>{description}</span>}
      <span className={styles.cta}>
        {translate({
          id: 'theme.docs.DocCard.readMore',
          message: 'Buka →',
          description: 'The call-to-action link text on a doc card',
        })}
      </span>
    </Link>
  );
}

function CardCategory({ item }) {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useCategoryItemsPlural();
  if (!href) return null;

  const eyebrow = translate(
    {
      id: 'theme.docs.DocCard.categoryEyebrow',
      message: 'Kategori · {count}',
      description: 'Eyebrow label for a category card showing the item count',
    },
    { count: categoryItemsPlural(item.items.length) },
  );

  return (
    <CardLayout
      href={href}
      eyebrow={eyebrow}
      title={item.label}
      description={item.description}
    />
  );
}

function CardLink({ item }) {
  const doc = useDocById(item.docId ?? undefined);
  const eyebrow = translate({
    id: 'theme.docs.DocCard.pageEyebrow',
    message: 'Halaman',
    description: 'Eyebrow label for a doc page card',
  });

  return (
    <CardLayout
      href={item.href}
      eyebrow={eyebrow}
      title={item.label}
      description={item.description ?? doc?.description}
    />
  );
}

export default function DocCard({ item }) {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
