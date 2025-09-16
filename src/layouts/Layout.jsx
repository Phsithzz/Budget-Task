import { useState } from "react";

//components
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import BalanceSummary from "../components/BalanceSummary";

//page
import User from "../pages/User";
import Category from "../pages/Category";
import Transaction from "../pages/Transaction";
import Wallet from "../pages/Wallet";

const Layout = () => {
  //profile section
  //Pop-up
  const [showProfile, setshowProfile] = useState(false);

  //Add section
  //Pop-up
  const [showAdd, setshowAdd] = useState(false);

  //Transaction section Wallet section
  //Pop-up transaction
  const [showTransaction, setshowTransaction] = useState(false);
  //Pop-up wallet
  const [showWallet, setShowWallet] = useState(false);

  //Array transaction
  const [transactions, setTransactions] = useState([]);
  //wallet section
  const [wallet, setWallet] = useState(0);

  //Wallet section
  const handleSaveTransaction = (data) => {
    const newTransaction = {
      id: Date.now(),
      price: Number(data.price),
      category: data.category,
      icon: data.icon,
    };

    if (newTransaction.price > wallet) {
      alert("Your balance is not enough!!!");
      setshowAdd(false);
      return;
    }

    setTransactions((prev) => [...prev, newTransaction]);
    setWallet((prevWallet) => prevWallet - newTransaction.price);
    setshowAdd(false);
  };

  //Wallet section
  const handleSaveWallet = (data) => {
    setWallet(data);
    setShowWallet(false);
  };

  return (
    <>
      <Navbar
        onTransactionClick={() => setshowTransaction(true)}
        onAddClick={() => setshowAdd(true)}
        onWalletClick={() => setShowWallet(true)}
      />

      <div className="flex justify-end mt-6 mr-25">
        <Profile onUserClick={() => setshowProfile(true)} />
      </div>

      <div className="flex justify-center gap-4  mt-8 p-4">
        <BalanceSummary wallet={wallet} />
      </div>

      {/*Page Section */}

      {/*User UI */}
      {showProfile && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xs flex justify-center items-center z-50">
          <User onCancel={() => setshowProfile(false)} />
        </div>
      )}

      {/*Add UI */}
      {showAdd && (
        <div className="fixed top-0 left-0 z-50 w-full h-full backdrop-blur-xs flex justify-center items-center ">
          <Category
            onCancel={() => setshowAdd(false)}
            onSave={handleSaveTransaction}
          />
        </div>
      )}

      {/*Transaction UI */}
      {showTransaction && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xs flex justify-center items-center">
          <Transaction
            onCancel={() => setshowTransaction(false)}
            transactions={transactions}
            settransactions={setTransactions}
          />
        </div>
      )}

      {/*Wallet UI */}
      {showWallet && (
        <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xs flex justify-center items-center">
          <Wallet
            onCancel={() => setShowWallet(false)}
            onSave={handleSaveWallet}
          />
        </div>
      )}
    </>
  );
};

export default Layout;
