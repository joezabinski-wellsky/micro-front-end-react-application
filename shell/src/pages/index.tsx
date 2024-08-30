import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/App.module.css';
import ReactLogo from './logo.svg';

// This approach gets closer to the desired behavior, but the Angular app is not mounted because when mount() is called, the <app-root> is not yet loaded.
const AngularEmbeddedComponent = dynamic(
  () =>
    // Webpack only seems to understand the import of an implicitly exported module within a dynamic() function.
    // A standard ESM import statement at the beginning of the file or anywhere else does not compile.
    // A workaround might be to use `@module-federation/nextjs-mf/utils`'s `injectScript` function.
    import('angularEmbedded/angularModule')
      .then((m) => {
        m.mount();
        return m;
      })
      // The lack of app-root typing does not affect the runtime. Extending the global JSX.IntrinsicElements interface would be a workaround, and is a bit laborious for this stage.
      .then(() => () => (
        <div>
          <app-root></app-root>
        </div>
      )),
  { ssr: false },
);

// Webpack cannot compile with this approach
// function AngularEmbeddedComponent() {
//   useEffect(() => {
//     import('angularEmbedded/angularModule').then((m) => {
//       m.mount();
//     });
//   }, []);

//   return (
//     <div>
//       <app-root></app-root>
//     </div>
//   );
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.App}>
        <div className={styles.main}>
          <h1>Main Application in</h1>
          <Image src={ReactLogo} alt="" className={styles.logo} />
        </div>
        <div className={styles.content}>
          <AngularEmbeddedComponent></AngularEmbeddedComponent>
        </div>
      </div>
    </>
  );
}
