import Burger from "../components/Burger";
export default function Page(){
    return(
        <>
        <header>
        <Burger />
        </header>
     <div className="bg-gray-500 min-h-screen flex md:flex-row md:items-center flex-col">
     <div className="bg-red-600 md:w-[25%] text-white text-xl font-bold md:min-h-screen flex-grow flex h-36 justify-center items-center">Hello world</div>
     <div className="bg-blue-600 md:w-[25%] text-white text-xl font-bold md:min-h-screen flex-grow flex h-36 justify-center items-center">Hello world</div>
     <div className="bg-green-600 md:w-[25%] text-white text-xl font-bold md:min-h-screen flex-grow flex h-36 justify-center items-center">Hello world</div>
    </div>
    </>
    )
}
    
