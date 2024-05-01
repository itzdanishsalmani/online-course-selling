import { useNavigate } from 'react-router-dom';

export function RedirectSuccessful() {
  const navigate = useNavigate();

setTimeout(()=>{
    navigate('/purchasedcourses')
},5000)

  return (
    <div className='flex flex-col h-screen items-center justify-center text-xl '> Payment is Successful Redirecting Please wait... </div>
  );
}
