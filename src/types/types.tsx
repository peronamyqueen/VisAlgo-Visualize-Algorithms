export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export type Step = {
  array: number[];
  comparing?: [number, number];
  swapping?: [number, number];
  pivot?: number;
  leftPointer?: number;
  rightPointer?: number;
};
