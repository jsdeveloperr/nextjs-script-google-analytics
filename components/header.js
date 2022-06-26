/* eslint-disable no-nested-ternary */
import React, { memo } from 'react';
import { Meta } from '../layouts/meta';

const Header = () => {

  return (
    <>
      <Meta />
      <header>
        Google Analytics Next Script
      </header>
    </>
  );
};

export default memo(Header);
