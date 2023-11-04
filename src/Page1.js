import { useNavigate } from 'react-router-dom';


const Page1 = () => {
    const navigate = useNavigate();
    const goToPage2 = () => {
        navigate('/page-2')
    };

  return (
    <div>
        <h1>Page1</h1>
        <button className = "btn" onClick={goToPage2}> Here </button>
    </div>
    
  );
};

export default Page1