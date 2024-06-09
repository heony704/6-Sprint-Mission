import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { asPath } = useRouter();

  if (asPath === '/') {
    return (
      <>
        <Header />
        <main className={`mt-[70px]`}>{children}</main>
        <Footer />
      </>
    );
  }

  if (asPath === '/signin' || asPath === '/signup') {
    return (
      <>
        <header className="flex justify-center pt-6 tablet:pt-12 desktop:pt-16">
          <Link href="/">
            <Image
              width={198}
              height={66}
              className="tablet:h-[132px] tablet:w-[396px]"
              src="/logo_big.svg"
              alt="판다마켓 로고"
              priority
            />
          </Link>
        </header>
        <main className="m-auto px-4 pb-20 pt-6 tablet:px-12 tablet:pb-24 desktop:px-16 desktop:pb-16">
          {children}
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main
        className={`m-auto mt-[70px] px-4 pb-24 pt-8 tablet:px-6 desktop:max-w-[1200px] desktop:px-0`}
      >
        {children}
      </main>
    </>
  );
}
