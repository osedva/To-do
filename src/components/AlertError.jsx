const AlertError = ({children}) => {
  return (
    <div className="bg-red-500 font-bold rounded-md uppercase text-center text-white" >
     {children}   
    </div>
  )
}

export default AlertError