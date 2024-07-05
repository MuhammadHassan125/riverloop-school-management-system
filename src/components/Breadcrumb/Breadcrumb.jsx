import Link from 'next/link';

const Breadcrumb = ({ items }) => {
  return (
    <nav
      className="flex px-5 py-1"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center cursor-pointer">
              {!isLast ? (
                <Link href={item.path}>
                  <p className="inline-flex items-center text-sm  text-[#BECADA] hover:text-brand-color-dark">
                    {item.name}
                  </p>
                </Link>
              ) : (
                <span className="text-sm text-[#BECADA]">
                  {item.name}
                </span>
              )}
              {!isLast && (
                <svg
                  className="rtl:rotate-180 block w-3 h-3 ms-2 text-[#BECADA]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
