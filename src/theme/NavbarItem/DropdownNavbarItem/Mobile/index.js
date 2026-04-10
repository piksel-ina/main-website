import { useEffect } from 'react';
import clsx from 'clsx';
import { isRegexpStringMatch, useCollapsible } from '@docusaurus/theme-common';
import {
  isSamePath,
  useLocalPathname,
} from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import NavbarNavLink from '@theme/NavbarItem/NavbarNavLink';
import NavbarItem from '@theme/NavbarItem';
import styles from './styles.module.css';

function isItemActive(item, localPathname) {
  if (isSamePath(item.to, localPathname)) {
    return true;
  }
  if (isRegexpStringMatch(item.activeBaseRegex, localPathname)) {
    return true;
  }
  if (item.activeBasePath && localPathname.startsWith(item.activeBasePath)) {
    return true;
  }
  return false;
}

function containsActiveItems(items, localPathname) {
  return items.some((item) => isItemActive(item, localPathname));
}

function CollapseButton({ collapsed, onClick }) {
  return (
    <button
      aria-label={
        collapsed
          ? translate({
              id: 'theme.navbar.mobileDropdown.collapseButton.expandAriaLabel',
              message: 'Expand the dropdown',
              description:
                'The ARIA label of the button to expand the mobile dropdown navbar item',
            })
          : translate({
              id: 'theme.navbar.mobileDropdown.collapseButton.collapseAriaLabel',
              message: 'Collapse the dropdown',
              description:
                'The ARIA label of the button to collapse the mobile dropdown navbar item',
            })
      }
      aria-expanded={!collapsed}
      type="button"
      className="clean-btn menu__caret"
      onClick={onClick}
    />
  );
}

function useItemCollapsible({ active }) {
  const { collapsed, toggleCollapsed, setCollapsed } = useCollapsible({
    initialState: () => !active,
  });
  useEffect(() => {
    if (active) {
      setCollapsed(false);
    }
  }, [active, setCollapsed]);
  return {
    collapsed,
    toggleCollapsed,
  };
}

export default function DropdownNavbarItemMobile({
  items,
  className,
  position: _position,
  onClick,
  ...props
}) {
  const localPathname = useLocalPathname();
  const isActive = isSamePath(props.to, localPathname);
  const containsActive = containsActiveItems(items, localPathname);
  const { collapsed, toggleCollapsed } = useItemCollapsible({
    active: isActive || containsActive,
  });
  const href = props.to ? undefined : '#';
  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}
    >
      <div
        className={clsx('menu__list-item-collapsible', {
          'menu__list-item-collapsible--active': isActive,
        })}
      >
        <NavbarNavLink
          role="button"
          className={clsx(
            styles.dropdownNavbarItemMobile,
            'menu__link menu__link--sublist',
            className,
          )}
          href={href}
          {...props}
          onClick={(e) => {
            if (href === '#') {
              e.preventDefault();
            }
            toggleCollapsed();
          }}
        >
          {props.children ?? props.label}
        </NavbarNavLink>
        <CollapseButton
          collapsed={collapsed}
          onClick={(e) => {
            e.preventDefault();
            toggleCollapsed();
          }}
        />
      </div>

      <ul className="menu__list">
        {items.map((childItemProps, i) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={onClick}
            activeClassName="menu__link--active"
            {...childItemProps}
            key={i}
          />
        ))}
      </ul>
    </li>
  );
}
