export default function Home() {

  return (
    <div className="container mx-auto flex flex-col justify-center h-full">
      <h1 className="text-blue-500 font-bold italic text-5xl">Contact</h1>
      <div className="flex">
        <div className="w-1/4 ">
          <div className="border-4 border-gray-500 rounded-3xl bg-black p-3 h-96 w-60">
            <div className="grid grid-cols-2 grid-row-3 gap-2 rounded-3xl">
              <div className="bg-teal-400 rounded-3xl text-center text-2xl">
                Github
              </div>
              <div className="bg-teal-400 rounded-3xl">
                Test
              </div>
              <div className="bg-teal-400 rounded-3xl">
                Test
              </div>
              <div className="bg-teal-400 rounded-3xl">
                Test
              </div>
            </div>

          </div>
        </div>
        <div className="w-1/2">

        </div>
      </div>
    </div>
  )
}
