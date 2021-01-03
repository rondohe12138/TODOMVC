import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div>
    <span>筛选显示: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      全部
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      激活
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      禁用
    </FilterLink>
  </div>
);

export default Footer;
