import formatDistanceStrict from 'date-fns/formatDistanceStrict';

function HomeIntro() {
  const birthday = new Date('10/03/1989');
  const today = new Date();
  const movedToDenver = new Date('8/04/2013');

  return (
    <div className="home-intro custom-section flex flex-col h-full">
      <div className="text-blue-100 my-auto">
        <div className="mx-auto text-center text-shadow-md">
          <h1 className="text-4xl md:text-6xl text-teal-300 font-bold mb-4">Pieter Montoulieu</h1>

          <h2 className="text-xl md:text-3xl italic mb-10">
            Born
            {' '}
            {' '}
            {formatDistanceStrict(birthday, today, { unit: 'year', addSuffix: 'ago' })}
            {' '}
            in Miami, FL and
            <br />
            {' '}
            living in Denver, CO for
            {' '}
            {formatDistanceStrict(movedToDenver, today)}
            .
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            I
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-heart-fill inline px-1 mx-2 text-fuchsia-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            working on:
          </h2>
          <ul className="text-xl md:text-3xl italic mb-7">
            <li className="text-teal-400 mb-1">
              - Web apps with
              <strong> Next.js and JAMstack</strong>
            </li>
            <li className="text-purple-500 mb-1">
              - XR apps and games with
              <strong> Unity </strong>
            </li>
            <li className="text-blue-500">- Crypto, Defi, web3, and the metaverse</li>
          </ul>
          <a
            href="/pdf/Pieter Montoulieu - Resume.pdf"
            className="btn-teal inline-block mb-5"
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
          <p className="text-md">Built with Next.js, Tailwind, and Vercel.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
