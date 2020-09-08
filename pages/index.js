import ClientList from "../components/about/ClientList";
import Moment from 'react-moment';

export default function Home() {
  const birthday = '03/10/1989';
  const movedToDenver = '04/8/2013';
  return (
    <div className="about flex flex-col h-full">
      <div className="text-blue-100 my-auto">
        <div className="mx-auto text-center text-shadow-md">
          <h1 className="text-4xl md:text-5xl text-blue-200 font-bold">Pieter Montoulieu</h1>
          <h2 className="text-xl md:text-3xl italic">Born <Moment fromNow>{birthday}</Moment> in Miami, FL</h2>
          <h2 className="text-xl md:text-3xl italic mb-6">Living in the Denver Metro Area for <Moment fromNow ago>{movedToDenver}</Moment></h2>
          <h2 className="text-2xl md:text-3xl italic">Develops with:</h2>
          <ul className="text-2xl md:text-3xl italic">
            <li><strong>JAMStack</strong></li>
            <li><strong>VR/AR</strong></li>
            <li><strong>Unity 3D</strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
