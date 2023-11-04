import { useNavigate } from 'react-router-dom';


const Page2 = () => {
    const navigate = useNavigate();
    const goToPage1 = () => {
        navigate('/page-1')
    }

  return (
    <div>
        <h1>Page2</h1>
        <button className = "btn" onClick={goToPage1}> Here </button>
    </div>
    
  )
}

export default Page2