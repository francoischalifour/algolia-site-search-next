import Head from 'next/head';

import { SearchButton } from '../src/components/SearchButton';
import { SearchModal } from '../src/components/SearchModal';

function HomePage() {
  const [isShowing, setIsShowing] = React.useState(false);

  React.useLayoutEffect(() => {
    function onKeyDown(event) {
      if (isShowing === true && event.key === 'Escape') {
        event.preventDefault();
        setIsShowing(false);
        return;
      }

      if (
        isShowing === false &&
        event.key === 'k' &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        setIsShowing(true);
        return;
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isShowing, setIsShowing]);

  return (
    <div>
      <Head>
        <title>Home | Site Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav css={{ backgroundColor: '#2e2c70' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                      alt="Website logo"
                    />
                  </a>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline">
                    <a
                      href="/"
                      className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Projects
                    </a>
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Calendar
                    </a>
                    <a
                      href="#"
                      className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                    >
                      Reports
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <SearchButton onClick={() => setIsShowing(true)} />
              </div>
            </div>
          </div>
        </nav>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight text-gray-900">
              Home
            </h2>
          </div>
        </header>

        {isShowing && <SearchModal onClose={() => setIsShowing(false)} />}
      </div>
    </div>
  );
}

export default HomePage;
