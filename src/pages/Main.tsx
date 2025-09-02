import AlgoBox from "../components/AlgoBox";
import Navbar from "../components/Navbar";
import { Provider } from "../contexts/Context";
const Main = () => {
  return (
    <Provider>
      <div className="flex flex-row ">
        <Navbar />
        <AlgoBox />
      </div>
    </Provider>
  );
};

export default Main;
