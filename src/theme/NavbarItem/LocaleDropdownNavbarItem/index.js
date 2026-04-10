import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import {
  mergeSearchStrings,
  useHistorySelector,
} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import styles from './styles.module.scss';

const FLAG_MAP = {
  id: 'img/flags/id.svg',
  en: 'img/flags/gb.svg',
};

function LocaleFlag({ locale }) {
  const src = useBaseUrl('/' + (FLAG_MAP[locale] ?? FLAG_MAP.id));
  return (
    <span className={styles.localeFlag}>
      <img src={src} alt="" width="20" height="14" />
    </span>
  );
}

function DropdownFlag({ locale }) {
  const src = useBaseUrl('/' + (FLAG_MAP[locale] ?? FLAG_MAP.id));
  return (
    <img
      src={src}
      alt=""
      width="16"
      height="11"
      className={styles.dropdownFlag}
    />
  );
}

function useLocaleDropdownUtils() {
  const {
    siteConfig,
    i18n: { localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  const getLocaleConfig = (locale) => {
    const localeConfig = localeConfigs[locale];
    if (!localeConfig) {
      throw new Error(
        `Docusaurus bug, no locale config found for locale=${locale}`,
      );
    }
    return localeConfig;
  };

  const getBaseURLForLocale = (locale) => {
    const localeConfig = getLocaleConfig(locale);
    const isSameDomain = localeConfig.url === siteConfig.url;
    if (isSameDomain) {
      return `pathname://${alternatePageUtils.createUrl({
        locale,
        fullyQualified: false,
      })}`;
    }
    return alternatePageUtils.createUrl({
      locale,
      fullyQualified: true,
    });
  };

  return {
    getURL: (locale, options) => {
      const finalSearch = mergeSearchStrings(
        [search, options.queryString],
        'append',
      );
      return `${getBaseURLForLocale(locale)}${finalSearch}${hash}`;
    },
    getLabel: (locale) => {
      return getLocaleConfig(locale).label;
    },
    getLang: (locale) => {
      return getLocaleConfig(locale).htmlLang;
    },
  };
}

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString,
  ...props
}) {
  const utils = useLocaleDropdownUtils();
  const {
    i18n: { currentLocale, locales },
  } = useDocusaurusContext();
  const localeItems = locales.map((locale) => {
    return {
      label: (
        <>
          <DropdownFlag locale={locale} />
          {utils.getLabel(locale)}
        </>
      ),
      to: utils.getURL(locale, { queryString }),
      target: '_self',
      autoAddBaseUrl: false,
      className:
        locale === currentLocale
          ? mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });
  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : utils.getLabel(currentLocale);

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <LocaleFlag locale={currentLocale} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
