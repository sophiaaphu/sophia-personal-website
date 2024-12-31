import localFont from 'next/font/local';
export const hello = localFont({
    src: [
      {
        path: '../../public/fonts/Hello.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
    variable: '--font-hello',
  });