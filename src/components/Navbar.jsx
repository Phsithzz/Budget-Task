//icons
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";

const Navbar = ({onAddClick,onTransactionClick,onWalletClick}) => {
  return (
    <div className="flex w-full h-fit bg-[#373A40]">
        <div className="flex justify-center w-full gap-28 mt-2">
             <div>
                <button 
                onClick={onTransactionClick}
                type="button" className="group flex flex-col justify-center items-center cursor-pointer  transition-all ease-in hover:text-black ">
                    <p className="text-white text-5xl group-hover:text-black"><RiMoneyDollarCircleLine/></p>
                    <p className="font-bold text-xl text-white group-hover:text-black">Transaction</p>
                </button>
            </div>
             <div className="flex justify-center items-center bg-[#FEF9E1] rounded-xl w-16 h-16 m-3 transition ease-in duration-500 active:bg-white hover:scale-110 hover:bg-[#686D76]">
                <button onClick={onAddClick} type="button" className="cursor-pointer ">
                    <p className="text-black text-5xl  transition-all ease-in  hover:text-white "><IoAddSharp/></p>
                </button>
            </div>
             <div >
                <button 
                onClick={onWalletClick}
                type="button" className="group flex flex-col justify-center items-center cursor-pointer  transition ease-in  ">
                    <p className="text-white text-5xl group-hover:text-black"><GiWallet/></p>
                    <p className="font-bold text-xl text-white group-hover:text-black">Wallet</p>
                </button>
            </div>
             
        </div>
    </div>
  )
}

export default Navbar