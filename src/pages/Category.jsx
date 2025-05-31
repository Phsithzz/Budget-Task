//icons
import { IoFastFoodOutline } from "react-icons/io5";
import { RiDrinks2Line } from "react-icons/ri";
import { LuUtensils } from "react-icons/lu";
import { RiOilLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { LuGamepad2 } from "react-icons/lu";
import { LuPlane } from "react-icons/lu";
import { TbShirt } from "react-icons/tb";
import { IoFootballOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { LuPartyPopper } from "react-icons/lu";
import { FiGift } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaEllipsisH } from "react-icons/fa";
import { useState } from "react";

const Category = ({onCancel,onSave}) => {
  
  //ประหยัดพท.ในการเขียนโค้ด
  const categories = [
  { name: "Food", icon: <IoFastFoodOutline /> },
  { name: "Drinks", icon: <RiDrinks2Line /> },
  { name: "Daily", icon: <LuUtensils /> },
  { name: "Fuel", icon: <RiOilLine /> },
  { name: "Shopping", icon: <MdOutlineShoppingCart /> },
  { name: "Game", icon: <LuGamepad2 /> },
  { name: "Travels", icon: <LuPlane /> },
  { name: "Clothes", icon: <TbShirt /> },
  { name: "Sports", icon: <IoFootballOutline /> },
  { name: "Phone", icon: <FaMobileAlt /> },
  { name: "Study", icon: <RiGraduationCapLine /> },
  { name: "Party", icon: <LuPartyPopper /> },
  { name: "Gift", icon: <FiGift /> },
  { name: "Credit Card", icon: <FaRegCreditCard /> },
  { name: "Another", icon: <FaEllipsisH /> },
];
    //select category
    const [selectedCategory,setSelectedCategory] = useState(null);

    //input price
    const [price,setPrice] = useState(0);

    //when click save
    const handleSave = () => {
    //check input have or not
    if (!price || !selectedCategory) {
      alert("Please fill in all information.");
      return;
    }
    
    //when have input and send it to Layouts
    onSave({ 
      id:Date.now(),
      price:price, 
      category: selectedCategory.name,
      icon:selectedCategory.icon });
  };



  return (
  <>
    <div className="w-150 h-170 bg-[#373A40] rounded-4xl shadow-xl">
      <div className="flex flex-col gap-y-8 ">
        <div className="flex items-center justify-between bg-[#686D76] h-20 p-4 rounded-t-4xl">
          <h1 className="text-white text-2xl font-semibold">All Category</h1> 
          <button 
            onClick={onCancel} 
            type="button"
            className="cursor-pointer font-semibold w-20 h-14 bg-red-400 rounded-xl text-white hover:bg-green-400 active:bg-green-700"
          >
            Cancel
          </button> 
        </div>

        <div className="flex flex-col items-center gap-6 pb-6">
          <div className="flex justify-center items-center gap-6">
            <input 
              value={price}
              onChange={(e)=>{setPrice(e.target.value)}}
              type="number" name="price" placeholder="Enter your price"
              className="bg-white h-16 w-60 rounded-xl outline-none placeholder:text-center cursor-pointer"
            />

            <button
              onClick={handleSave}   
              type="button"
              className="cursor-pointer font-semibold w-20 h-14 bg-green-400 rounded-xl text-white hover:bg-red-400 active:bg-red-700"
            >
              Save
            </button>
          </div>

          {/* All Category */}
          <div className="grid grid-cols-[150px_150px_150px] gap-x-4 gap-y-2 justify-center cursor-pointer ">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`flex justify-center items-center w-40 h-20 rounded-xl transition ease-in duration-200 
                  ${selectedCategory?.name === cat.name ? "bg-black text-white" : "bg-white hover:bg-black hover:text-white"}`}
              >
                <button
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory?.name === cat.name ? null : cat
                    )
                  }

                  type="button"
                  className="flex flex-col items-center gap-2"
                >
                  <p className="text-4xl">{cat.icon}</p>
                  <p>{cat.name}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

}

export default Category