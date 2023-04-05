import Link from 'next/link';

function BackToHomeButton() {
  return (
    <button className="back-to-home">
      <Link href="http://localhost:3000/">Back to Homepage</Link>
    </button>
  );
}

export default BackToHomeButton;

