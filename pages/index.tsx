import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <React.Fragment>
      <h1>This is Homepage</h1>
      <ul>
        <li>
          <Link href='/news/what-the-heck'>to detail page</Link>
        </li>
        <li>you don&apos;t wanna click this</li>
      </ul>
    </React.Fragment>
  );
};
export default HomePage;
