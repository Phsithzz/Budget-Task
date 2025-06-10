const Transaction = ({ onCancel, transactions, settransactions }) => {
  return (
    <>
      <div className="w-150 h-150 bg-[#373A40] rounded-4xl overflow-hidden">
        <div className="bg-[#686D76] rounded-t-4xl flex justify-between items-center p-4">
          <h1 className="text-white font-semibold text-3xl">Transaction</h1>
          <button
            onClick={onCancel}
            type="button"
            className="bg-red-400 w-20 h-14 rounded-xl cursor-pointer text-white font-semibold text-xl transition ease-in duration-200 hover:bg-green-400 active:bg-green-800"
          >
            Cancel
          </button>
        </div>

        {/*All data transaction */}
        <div className="mt-4 max-h-[500px] overflow-y-auto px-4">
          {/*กรณีไม่มีข้อมูลใน Array transaction */}
          {transactions.length === 0 ? (
            <p className="text-center mt-10 text-white">No transactions !!!</p>
          ) : (
            <ul>
              {transactions.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center h-16 bg-white rounded-md m-4 p-4 transition ease-in duration-400  hover:bg-gray-300 "
                >
                  <div className="flex gap-4 items-center">
                    <p className="bg-gray-400 flex justify-center items-center rounded-full h-12 w-12 text-3xl">
                      {item.icon}
                    </p>
                    <p className="font-semibold text-xl">{item.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded bg-teal-500"></button>
                  </div>

                  <div className="flex gap-4 justify-center items-center">
                    <p className="text-xl font-semibold">{item.price} BAHT</p>
                    <button
                      onClick={() =>
                        settransactions(
                          transactions.filter((t) => t.id !== item.id)
                        )
                      }
                      className="bg-red-400 rounded-xl w-16 h-10 font-semibold text-white text-md transition ease-in duration-400 cursor-pointer active:bg-red-800 "
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Transaction;
