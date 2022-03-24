import NextImage from "next/image";

// Temporary/placeholder footer
export const Footer = () => (
  <footer className="flex flex-1 items-center justify-center border-t border-solid border-gray-200 py-8 px-0">
    <a
      className="flex flex-grow items-center justify-center"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span className="ml-2 h-4">
        <NextImage src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
);
