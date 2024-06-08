import { useRouter } from 'next/router';

import Header from './Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { asPath } = useRouter();

  if (['/signin', '/singup'].includes(asPath)) return;

  return (
    <>
      <Header />
      <div className="mt-[70px]">{children}</div>
    </>
  );
}
