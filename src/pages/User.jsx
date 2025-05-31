
const User = ({onCancel}) => {
  return (
    <>
        <div className="m-30 w-150 h-150 bg-[#373A40] rounded-4xl shadow-xl">
            <header className="flex justify-between items-center bg-[#686D76] rounded-t-4xl h-24">
                <button
                 type="button"
                 onClick={onCancel}
                 className="w-24 h-20 rounded-2xl bg-red-400 m-4 text-white font-semibold text-2xl cursor-pointer transition-all ease-in duration-200  hover:bg-green-400 active:bg-green-700">Cancel</button>
                <h1 className="m-4 text-white font-semibold text-2xl">
                    My Profile
                </h1>
            </header>
            <div className="flex flex-col mt-6 justify-center items-center  gap-y-6">
                <img src="/photos/user.png" alt="USER" className="w-[200px] h-[200px]"/>
                <div >
                    <input type="text" 
                    value="UserName"
                    readOnly
                    className="pl-6 bg-white rounded-xl shadow-xl  outline-0 w-[300px] h-10"/>
                    
                </div>
                <div >
                    <input type="email"
                    value="username@example.com"
                    readOnly
                    className="pl-6 bg-white rounded-xl shadow-xl  outline-0 w-[300px] h-10"/>
                </div>
                <div >
                    <button 
                    type="button"
                    onClick={onCancel}
                     className="bg-red-400 cursor-pointer  text-white shadow-xl rounded-xl w-20 h-10 font-semibold transition-all ease-in duration-200 hover:bg-green-400 active:bg-green-700 ">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default User