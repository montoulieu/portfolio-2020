import formatDistanceStrict from 'date-fns/formatDistanceStrict';


export default function Home() {
  const birthday = '03/10/1989';
  const movedToDenver = '04/8/2013';

  return (
    <div className="about flex flex-col h-full">
      <div className="text-blue-100 my-auto">
        <div className="mx-auto text-center text-shadow-md">
          <h1 className="text-4xl md:text-6xl text-blue-200 font-bold">Pieter Montoulieu</h1>

          <h2 className="text-xl md:text-3xl italic mb-10">Born {formatDistanceStrict(new Date(birthday), new Date(), { addSuffix: 'ago' })} in Miami, FL and<br/> developing in Denver, CO for {formatDistanceStrict(new Date(movedToDenver), new Date())}.</h2>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-200">I 💙 building:</h2>
          <ul className="text-xl md:text-3xl italic">
            <li className="text-blue-300">- SPAs and static sites with <strong>Next.js</strong></li>
            <li className="text-purple-300">- VR/AR experiences with <strong>Unity 3D</strong></li>
            <li className="text-orange-300">- iOS and watchOS apps with <strong>Swift UI</strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
