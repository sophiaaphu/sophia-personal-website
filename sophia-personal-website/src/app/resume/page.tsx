import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    // Open the resume link in a new tab
    window.open('https://drive.google.com/file/d/1l_ZYUjVsBTHMnOFywGmIeic6DmtWhvG_/preview', '_blank', 'noopener,noreferrer');
    // Redirect to the home page after opening the new tab
    router.replace('/');
  }, [router]);

  return (
    <div>
      <p>Redirecting to resume...</p>
    </div>
  );
}