import SpecsBox from "./SpecsBox";
import AlgoBars from "./AlgoBars";
import PlayerControls from "./ui/PlayerControls";
const AlgoBox = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full">
      <SpecsBox />
      <AlgoBars />
      <PlayerControls />
    </div>
  );
};

export default AlgoBox;
