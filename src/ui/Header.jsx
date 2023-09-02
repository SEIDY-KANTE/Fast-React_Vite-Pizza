import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:border-b-2 sm:px-6 flex justify-between ">
      {/*tracking-widest -> letter spacing */}
      <Link to="/" className="tracking-widest">
        Fast React Vite Pizza Co.
      </Link>
      
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
