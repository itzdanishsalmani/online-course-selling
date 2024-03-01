
function TopBar(){
    return (
        <div className="bg-custom-blue font-sans flex border border-slate-500">
            <div className="flex items-center p-3 inline-flex">
                <img src="/logo.png" className="w-10 h-10 rounded-3xl" alt="logo"></img>
                <div className="ml-5 text-white text-xl font-bold">100xdevs</div>
            </div>

            <div className="flex font-sans justify-end flex-grow inline-flex m-4">
                <div className="ml-4 p-2 border border-slate-500 rounded-xl text-white text-xs font-medium md:text-sm"><button>Login</button></div>
                <div className="ml-4 p-2 border border-slate-500 rounded-xl text-white text-xs font-medium bg-blue-500 md:text-sm"><button>Join now</button></div>
            </div>
        </div>
    )
}

function TopAfterOne() {
    return (
        <div className="bg-custom-blue font-sans flex pt-12 flex-col justify-center items-center ">
            <div className="bg-white mt-24 p-1 border rounded-3xl text-blue-600 text-xs md:text-xl">#1 LEARNING PLATFORM</div>
            <div className="mt-4 text-custom-light-blue font-bold text-3xl md:text-6xl">100xdevs</div>
            <div className="mt-4 text-white font-bold text-3xl md:text-6xl">because 10x ain't enough!</div>
            <div className="mt-8 text-center text-slate-500 text-custom-light text-sm md:text-xl">
                <div>A Beginner-Friendly Platform for Mastering Programming Skills</div>
                <div>and Unleashing Your Inner Developer Genius! Start Learning</div>
                <div>Today and Transform into a Tech Pro Tomorrow!</div> 
            </div>
            <div>
                <button className="mt-8 ml-4 p-2 border border-slate-500 rounded-3xl text-white text-xs font-medium bg-blue-500 md:text-base" >Explore courses</button>
                <button className="mt-8 ml-4 p-2 border border-slate-500 rounded-3xl text-white text-xs font-medium md:text-base">see more </button>
            </div>
        </div>
    )
}

export function Landing(){
    return(
        <div>
        <TopBar/>
        <TopAfterOne/>
        </div>
    )
}