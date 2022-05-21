import { useContext } from "react";
import { Context } from "lib/store";

export default function useDevice() {
  const { state } = useContext(Context);

  return state.device;
}
