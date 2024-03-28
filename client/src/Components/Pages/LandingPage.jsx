import { useNavigate } from "react-router-dom"

 function TopBar(){
    const navigate = useNavigate('/allcourses');
        
        function handleClick(){
            navigate('/allcourses')
        }
        function loginClick(){
            navigate('/register-user')
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
                     <button onClick={loginClick}>Login</button></div>
                 <div className="ml-1 p-1 border border-custom-light rounded-xl text-white text-xs bg-blue-700 md:text-sm">
                     <button onClick={handleClick}>Join now</button></div>
             </div>
         </div>
         </div>
     )
 }
 
 function AfterTopBar() {
     return (
         <div className="bg-custom-blue font-sans flex pt-12 flex-col justify-center items-center ">
             <div className="bg-white mt-24 p-1 border rounded-3xl text-blue-600 text-xs md:text-xl">#1 LEARNING PLATFORM</div>
             <div className="mt-4 text-custom-light-blue font-bold text-3xl md:text-6xl">HyperDev</div>
             <div className="mt-4 text-white font-bold text-3xl md:text-6xl">Elevating to 100X Mastery</div>
             <div className="mt-8 text-center text-custom-light text-sm md:text-xl">
                 <div>A Beginner-Friendly Platform for Mastering Programming Skills</div>
                 <div>and Unleashing Your Inner Developer Genius! Start Learning</div>
                 <div>Today and Transform into a Tech Pro Tomorrow!</div> 
             </div>
             <div>
                 <button className="mt-8 ml-4 p-2 border border-custom-light rounded-3xl text-white text-xs font-medium bg-blue-700 md:text-base">
                     Explore courses</button>
                 <button className="mt-8 ml-4 p-2 border border-custom-light rounded-3xl text-white text-xs font-medium md:text-base">
                     see more  </button>
             </div>
             <div>
                 <img src="/platform.png" className="mt-16 p-4 border-custom-border-color rounded-3xl md:border-8 md:mt-36"  alt="" />
             </div>
             <div className="text-center md:mt-36">
                 <div className="mt-12 text-custom-light-blue font-bold text-xs md:mt-36 md:text-3xl">Trusted by</div>
                 <div className="mt-4 text-custom-light font-meduim text-xs md:text-3xl">Passionate developers from different parts of the world!</div>
             </div>
             <div className="grid md:mb-52 md:grid-cols-2">
                 <div className="pt-0 mt-8 ml-4 mr-4 md:mt-60 md:ml-12">
                     <div className="text-custom-light-blue text-xs md:font-bold">| 
                     <span className="text-custom-light"> The best learning platform! </span></div>
                     <div className="text-white font-bold text-lg md:text-4xl">What is HyperDev?</div>
                     <div className="mt-4 text-custom-light text-xs md:mr-12 md:text-lg">HyperDev, a learning platform that offers courses on the latest trends
                         in the software engineering industry. Whether you're a beginner or
                         looking to upgrade your skills, HyperDev provides a user-friendly
                         environment for mastering the essentials of programming. Stay ahead
                         of the curve by exploring courses curated by industry engineers.</div>
                     <div>
                         <button className="mt-4 p-2 border border-custom-light rounded-3xl text-white text-xs bg-blue-700 md:mt-8 md:font-medium md:text-base">Explore courses</button>
                     </div>                    
                 </div>

                 <div className="h-0 invisible md:visible md:mt-36 border-custom-border-color border-t-8 border-l-8 border-b-8 rounded-3xl ">
                     <img src="/dashboard.png" alt="" />
                 </div>
             </div>
         </div>
     )
 }
 function BgWhite(){
     return(
         <div className="font-sans bg-custom-bg grid border border-blue-950 pb-24 md:pb-96 md:grid-cols-2">
             <div className="bg-custom-bg h-0 invisible md:visible md:mt-36 md:border-custom-border-color border-t-8 border-r-8 border-b-8 rounded-3xl ">
                 <img src="/dailycode.png" alt="" />
             </div>
             <div className="bg-custom-bg mt-8 ml-4 mr-4 md:mt-60 md:ml-12">
                 <div className="text-custom-light-blue text-xs md:font-bold">| 
                 <span className="text-slate-500"> Everything Documented </span></div>
                 <div className="text-black font-bold text-lg md:text-4xl">Learn through documentations</div>
                 <div className="mt-4 text-black text-xs md:mr-12 md:text-lg">Revisions after classes made easy, stop worrying about noting down
                 timestamps and revisiting the recordings, get access to well
                 documented slides!</div>
                 <div className="mt-2 text-slate-500 text-xs md:mr-12 md:text-lg">Enroll now to experience the importance of learning by documentation, learning by tutorials together.</div>
                 <div>
                     <button className="mt-4 p-2 mb border border-custom-light rounded-3xl text-white text-xs bg-blue-700 md:mt-8 md:font-medium md:text-base">See more</button>
                 </div>                    
             </div>

         </div>
     )
 }
 function BgEmpty(){
     return(
         <div className="bg-custom-blue h-32">
         </div>
     )
 }
 function AfterEmpty(){
     return (
         <div className="font-sans bg-custom-bg pt-12 pb-12">
             <div className="text-custom-blue text-center font-bold text-2xl md:text-4xl">Why HyperDev?</div>
             <div className="md:flex md:mt-8">
                 <div className="ml-4 mr-4 text-lg md:ml-40 md:text-2xl md:font-bold ">Learn, build, and ship — without the fear of missing out.</div>
                 <div className="ml-4 mr-4 mt-4 text-slate-600 md:ml-72 md:mr-40 md:text-lg md:font-medium ">No compromises. With HyperDev, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.</div>
             </div>
             <div className="m-6 md:ml-24 md:mt-12 md:grid md:grid-cols-3">
                 <div className="mt-4">
                     <div className="text-custom-light-blue text-xs md:font-bold">| 
                     <span className="text-slate-500"> #1 Instructor </span></div>
                     <div className="text-black text-sm md:text-xl">Learn from the best</div>
                     <div className="md:mt-3 text-slate-600 text-sm   md:mr-12 md:text-lg">Mohammed Danish is best in India, when it comes to learning about remote work, open source and landing a job.</div>
                 </div>
                 <div className="mt-4">
                     <div className="text-custom-light-blue text-xs md:font-bold">| 
                     <span className="text-slate-500"> Beginner Friendly </span></div>
                     <div className="text-black text-sm md:text-xl">Basics to Advanced</div>
                     <div className="mt-3 text-slate-600 text-sm md:mr-12 md:text-lg">Start from the basics and go deep into technologies using projects.</div>
                 </div>
                 <div className="mt-4">
                     <div className="text-custom-light-blue text-xs md:font-bold">| 
                     <span className="text-slate-500"> Open Source </span></div>
                     <div className="text-black text-sm md:text-xl">Raise issues, Merge PRs</div>
                     <div className="mt-3 text-slate-600 text-sm md:mr-12 md:text-lg">Helping you make your first open source contribution.</div>
                 </div>
                 <div className="mt-4 md:mt-12">
                     <div className="text-custom-light-blue text-xs md:font-bold">| 
                     <span className="text-slate-500"> Exponential Growth </span></div>
                     <div className="text-black text-sm md:text-xl">Reach your inflection point</div>
                     <div className="mt-3 text-slate-600 text-sm md:mr-12 md:text-lg">Become a self sufficient developer in the upcoming months.</div>
                 </div>
                 <div className="mt-4 md:mt-12">
                     <div className="text-custom-light-blue text-xs md:font-bold">| 
                     <span className="text-slate-500 "> Version Control </span></div>
                     <div className="text-black text-sm md:pr-4 md:text-xl">Learn about Software Development Life Cycle</div>
                     <div className="mt-3 text-slate-600 text-sm md:mr-12 md:text-lg">Helping you learn basics of how version control is implemented in the industry.</div>
                 </div>
                 <div className="mt-4 md:mt-12">
                     <div className="text-custom-light-blue text-xs md:font-bold">| 
                     <span className="text-slate-500"> Assignments </span></div>
                     <div className="text-black text-sm md:text-xl">Learn by doing</div>
                     <div className="mt-3 text-slate-600 text-sm md:mr-12 md:text-lg">Mohammed Danish personally creates assignments after every lecture, so it's extremely hands on.</div>
                 </div>
             </div>
         </div>
     )
 }
 function About(){
     return (
         <div className="font-sans bg-custom-blue pt-24 pb-24 ">
             <div className="text-white text-center font-bold text-2xl md:text-4xl">About HyperDev</div>
             <div className="font-medium text-lg md:pl-52 pt-4 md:text-2xl">
                 <div className="text-custom-light ml-4">Welcome to<span className="text-custom-light-blue">HyperDev,</span></div>
             </div>
             <div className="text-custom-light mt-3 md:pl-52 md:pr-52 md:text-xl">
                 <div className="ml-4 mr-4 text-lg text-medium">
                     <div>This is an initiative by <span className="text-custom-light-blue">Mohammed Danish Salmani</span> to personally mentor folks in the field of Programming.</div>
                      <div>Mohammed Danish strongly feels that today you are either a 1x engineer or a 100x engineer and nothing in the middle,
                      and his hope is to take everyone in this community to be a <span className="text-custom-light-blue">100xEngineer.</span></div>
                      <div>Join him in his <span className="text-custom-light-blue">live course</span> on Full Stack development with a heavy focus on <span className="text-custom-light-blue">Open source projects</span> to learn
                      programming practically.</div></div>
             </div>
         </div>
     )
 }
 function AfterAbout(){
     return (
         <div className="font-sans bg-custom-bg grid border border-blue-950 pb-24 md:pb-96 md:grid-cols-2">
             <div className="bg-custom-bg mt-8 ml-4 mr-4 md:mt-60 md:ml-12">
                 <div className="text-custom-light-blue text-xs md:font-bold">| 
                 <span className="text-slate-500"> Discord Support </span></div>
                 <div className="text-black font-bold text-lg md:text-4xl">Never miss on anything!</div>
                 <div className="mt-4 text-black text-xs md:mr-12 md:text-lg">Personal TAs make it easy for you to get your doubts solved within minutes. Got any doubt? Ask on the discord community.
                 documented slides!</div>
                 <div className="mt-2 text-slate-500 text-xs md:mr-12 md:text-lg">Facing any issues while setting up the environment? Get it fixed, Ask on the discord communtiy!</div>
                 <div>
                     <button className="mt-4 p-2 mb border border-custom-light rounded-3xl text-white text-xs bg-blue-700 md:mt-8 md:font-medium md:text-base">Explore courses</button>
                 </div>

             </div>
             <div className="bg-custom-bg h-0 invisible md:visible md:mt-36 md:border-custom-border-color border-t-8 border-r-8 border-b-8 rounded-3xl ">
                 <img src="/dailycode.png" alt="" />
             </div>

         </div>
     )
 }
 function LastSection(){
     return (
         <div className="font-sans bg-custom-blue pt-32 pb-32 md:pt-60 md:pb-60 flex flex-col items-center justify-center">
             <div className="text-white text-center font-bold text-2xl md:text-4xl">Every developer deserves to be a great engineer, a</div>
             <div className="text-custom-light-blue text-center font-bold text-2xl md:text-4xl">100xEngineer!</div>
             <div className="text-center text-custom-light mt-3 md:pl-52 md:pr-52 md:text-xl">Give yourself the power you deserve with a HyperDev today!</div>
             <div className="">
                 <button className="content-center mt-4 p-2 mb border border-custom-light rounded-3xl text-white text-xs bg-blue-700 md:mt-8 md:font-medium md:text-base">Join now</button>
             </div>
         </div>
     )
 }
 export function LandingPage(){
     return(
         <div>
         <TopBar/>
         <AfterTopBar/>
         <BgWhite/>
         <BgEmpty/>
         <AfterEmpty/>
         <About/>
         <AfterAbout/>
         <LastSection/>
         </div>
     )
 }