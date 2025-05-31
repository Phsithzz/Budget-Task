import { useState } from "react";

const Wallet = ({onCancel,onSave}) => {

    const [balance,setBalance] = useState(0);

    const handleSave = ()=>{
        if(!balance){
            alert("Enter Your Balance");
            return
        }
        onSave(balance)
    }
  return (
    <>     
         <div className="flex flex-col justify-center items-center w-[650px] h-[400px] transition ease-in duration-500 
         cursor-pointer
        bg-gradient-to-r from-black via-white to-[#4b4b4d] rounded-xl shadow-xl hover:bg-gradient-to-r
        hover:from-[#4b4b4d] hover:via-white hover:to-black hover:scale-105 ">
            <div className="flex flex-col justify-center items-center  gap-y-2">  
                <p className="font-bold text-2xl pt-4 ">YOUR BALANCE HERE</p>
                <img className="w-[150px] h-[150px] m-4"src="/photos/logoWallet.png" alt="blackwallet" />

                <input type="number" name="wallet" 
                value={balance}
                onChange={(e)=>setBalance(e.target.value)}
                placeholder="Enter Your Balance"
                className="flex justify-center cursor-pointer bg-white shadow-xl h-12  w-60 rounded-xl outline-none placeholder:text-center    " />

                <div className="flex gap-4 justify-end items-center ">

                    <button type="button" 
                    onClick={handleSave}
                    className="w-20 h-14 cursor-pointer rounded-xl bg-green-400 font-semibold text-white text-xl hover:bg-green-800 active:bg-green-900">Save</button>

                    <button type="button" 
                    onClick={onCancel}
                    className="w-20 h-14 cursor-pointer rounded-xl bg-red-400 font-semibold text-white text-xl hover:bg-red-800 active:bg-red-900">Cancel</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Wallet