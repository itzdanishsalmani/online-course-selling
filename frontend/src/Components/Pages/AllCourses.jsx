import { useNavigate } from "react-router-dom"

function TopBar(){
    const navigate = useNavigate('/');
        
        function handleClick(){
            navigate('/')
        }
     return (
    
         <div className="fixed w-full">
         <div className="bg-custom-blue font-sans flex border border-custom-light">
             <div className="flex items-center p-3 inline-flex">
                 <img src="/logo.png" className="w-10 h-10 rounded-3xl" alt="logo"></img>
                 <div className="ml-1 text-white text-xl font-bold">HyperDev</div>
             </div>
             <div className="flex justify-end flex-grow inline-flex m-4">
                 <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs md:text-sm">
                     <button>User</button></div>
                 <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs bg-blue-700 md:text-sm">
                     <button >Admin</button></div>
             </div>
         </div>
         </div>
     )
 }

 function AfterTopBar(){
    return(
        <div className="pt-16 ">
            <div className="fixed h-full bg-custom-light pl-8 pr-16"><button>Main Menu</button>
                <div className="element mt-4">
                    <a href="/" class="font-medium hover:underline">Home</a><br />
                    <a href="/allcourses" class="font-medium hover:underline">Courses</a>
                </div>
            </div>

            <div className="mt-8 mb-8 text-center text-xs md:text-lg ">Courses</div>
        </div>
    )
 }

 function CoursesCard(){
    return(
        <div className="flex">
            <div className="ml-48 w-fit border border-blue-900 rounded-xl p-4">
            <img src="/MernStack.png" className="w-fit h-auto rounded-xl" alt="MernStack" />
            <div >
                <div className="font-bold text-lg">Title</div>
                <div className="text-gray-600">Description</div>
                <div className="text-blue-900 font-bold">$Price</div>
                <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">Buy now</button>
            </div>
        </div>

            <div className="ml-8 w-fit border border-blue-900 rounded-xl p-4">
            <img src="/AI.jpeg" className="w-fit h-auto rounded-xl" alt="AI" />
            <div >
                <div className="font-bold text-lg">Title</div>
                <div className="text-gray-600">Description</div>
                <div className="text-blue-900 font-bold">$Price</div>
                <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">Buy now</button>
            </div>
        </div>  

        <div className="ml-8 w-fit border border-blue-900 rounded-xl p-4">
            <img src="/DSA.png" className="w-fit h-auto rounded-xl" alt="DSA" />
            <div >
                <div className="font-bold text-lg">Title</div>
                <div className="text-gray-600">Description</div>
                <div className="text-blue-900 font-bold">$Price</div>
                <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700">Buy now</button>
            </div>
        </div>      
           
        </div>
    )
 }
export function AllCourses(){
    return(
        <div>
        <TopBar/>
        <AfterTopBar/>
        <CoursesCard/>
        </div>
    )
}