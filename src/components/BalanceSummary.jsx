
const BalanceSummary = ({wallet}) => {
  return (
    <>
        <div className="
        flex flex-col justify-center items-center w-[550px] h-[300px] transition ease-in duration-500  cursor-pointer
        active:animate-spin
        bg-gradient-to-r from-black via-white to-[#4b4b4d] rounded-xl shadow-xl hover:bg-gradient-to-r
        hover:from-[#4b4b4d] hover:via-white hover:to-black hover:scale-105 ">

            <div className="flex flex-col justify-center items-center  gap-y-2">  

                <p className="font-bold text-2xl pt-4 text-black">YOUR BALANCE HERE</p>
                <img className="w-[150px] h-[150px] m-4"src="/photos/logoWallet.png" alt="blackwallet" />
                <p className=" font-bold text-xl">{wallet} BAHT</p>

            </div>

        </div>


    </>
  )
}

export default BalanceSummary