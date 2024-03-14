
import './App.css'
import Cart from './Components/Cart/Cart'
import Courses from './Components/Courses/Courses'

function App() {
  
  return (
    <>
      <div className='p-10'>
      
      <div className ='block text-center'><h1  className='text-4xl font-bold  mt-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>Books Store Online Shop</h1></div>
     
      <div className='flex justify-between mt-10'>
        <div className='grid '>
        <Courses></Courses>
        
          
        
        </div>
        
        <div><Cart></Cart></div>
      </div>
      </div>
      
      
    
      
      
    </>
  )
}

export default App
