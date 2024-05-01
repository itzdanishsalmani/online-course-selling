import { useNavigate } from 'react-router-dom';

export function RedirectUnsuccessful() {
  const navigate = useNavigate();

  setTimeout(()=>{
    navigate('/allcourses')
},5000)

  return (
    <div className='flex flex-col h-screen items-center justify-center text-xl '> Payment is Unsuccessful Redirecting Please wait... </div>
  );
}
