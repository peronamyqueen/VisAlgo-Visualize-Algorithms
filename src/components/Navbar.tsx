import { useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Context } from "../contexts/Context";

const Navbar = () => {
  const context = useContext(Context);
  if (!context) return null;
  const { state, dispatch } = context;

  const [isOpen, setIsOpen] = useState(false);

  const algorithms = [
    { id: "bubble", name: "Bubble Sort" },
    { id: "quick", name: "Quick Sort" },
    { id: "selection", name: "Selection Sort" },
  ];

  const changeSort = (id: string) => {
    if (!state.pressed) {
      dispatch({ type: "setSortingType", payload: id });
    }
  };

  return (
    <div className="h-[100vh] w-[25%] bg-blue-900 py-4 text-white">
      {/* Sortings header */}
      <button
        className="flex w-full items-center justify-between px-4 py-2 bg-gray-600"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="font-medium">Sortings</span>
        <ChevronDown
          className={`h-5 w-5 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"
          }`}
      >
        <ul className="bg-gray-700 p-2 space-y-2">
          {algorithms.map((el) => (
            <li key={el.id}>
              {el.id === state.sortingType ? (
                <button className="badge bg-blue-500 w-full text-center">
                  {el.name}
                </button>
              ) : (
                <button
                  className="badge w-full text-center"
                  onClick={() => changeSort(el.id)}
                >
                  {el.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
