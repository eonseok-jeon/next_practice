import Link from 'next/link';
import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/news/wtf'>To Detail</Link>
        </li>
        <li>You don&apos;t wanna click this.</li>
      </ul>
    </Fragment>
  );
};
export default HomePage;
