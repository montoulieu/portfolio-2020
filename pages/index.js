import formatDistanceStrict from 'date-fns/formatDistanceStrict';

export default function Home() {
  const birthday = '03/10/1989';
  const movedToDenver = '04/8/2013';

  return (
    <div className="about flex flex-col h-full">
      <div className="text-blue-100 my-auto">
        <div className="mx-auto text-center text-shadow-md">
          <h1 className="text-4xl md:text-6xl text-teal-200 font-bold mb-4">Pieter Montoulieu</h1>

          <h2 className="text-xl md:text-3xl italic mb-10">Born {formatDistanceStrict(new Date(birthday), new Date(), { addSuffix: 'ago' })} in Miami, FL and<br/> developing in Denver, CO for {formatDistanceStrict(new Date(movedToDenver), new Date())}.</h2>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">I
           <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill inline px-1 mx-2 text-fuchsia-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
           building:</h2>
          <ul className="text-xl md:text-3xl italic">
            <li className="text-blue-300 mb-2">- SPAs and static sites with <strong>Next.js</strong></li>
            <li className="text-purple-300 mb-2">- Game and XR experiences with <strong>Unity 3D</strong></li>
            <li className="text-fuchsia-300">- iOS and watchOS apps with <strong>Swift UI</strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
