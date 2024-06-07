import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from './Button';

type Path = {
  url: string;
  navName: string;
};

const PATHS: Path[] = [
  {
    url: '/community',
    navName: '자유게시판',
  },
  {
    url: '/products',
    navName: '중고마켓',
  },
];

export default function Header() {
  const { push, asPath } = useRouter();

  return (
    <header className="fixed top-0 z-50 h-[70px] w-full border-b border-solid border-gray-300 bg-white">
      <div className="m-auto flex h-full max-w-[1920px] items-center justify-between gap-8 px-4 py-[10px] md:px-6 xl:px-[200px]">
        <Link href="/">
          <Image
            width={81}
            height={40}
            className="block md:hidden"
            src="/logo_small.svg"
            alt="판다마켓 로고"
            priority
          />
          <Image
            width={153}
            height={51}
            className="hidden md:block"
            src="/logo_big.svg"
            alt="판다마켓 로고"
            priority
          />
        </Link>
        <nav className="grow">
          <ul className="flex">
            {PATHS.map((path) => (
              <li
                className={`${asPath === path.url ? 'text-primary-400 hover:text-primary-600 active:text-primary-700' : 'text-gray-600 hover:text-gray-800 active:text-gray-900'} w-[108px] text-center text-lg font-bold`}
                key={path.url}
              >
                <Link href={path.url}>{path.navName}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          style={{ shape: 'square', size: 'small' }}
          onClick={() => {
            push('/signin');
          }}
        >
          로그인
        </Button>
      </div>
    </header>
  );
}
