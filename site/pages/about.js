import Router from 'next/router';
import Link from 'next/link';

export default function About() {

  Router.events.on('routeChangeStart', (...args) => {
    console.log('routeChangeStart', ...args)
  })

  return (
    <div>
      <h1>about_page</h1>
      <Link href='/test?name=bob'>
        <a>to test</a>
      </Link>
    </div>
  )
}
