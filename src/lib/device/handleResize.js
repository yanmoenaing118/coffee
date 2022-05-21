import { useContext, useEffect } from "react";
import { Context } from "lib/store";
import * as actions from "lib/store/actions";

export default function useHandleResize() {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    getDevice();
    window.addEventListener("resize", getDevice);
    return () => window.removeEventListener("resize", getDevice);
  }, []);

  function getDevice() {
    const width = window.innerWidth;
    if (width >= 1200)
      return dispatch({ type: actions.SET_DEVICE, payload: "xlg" });
    if (width >= 992)
      return dispatch({ type: actions.SET_DEVICE, payload: "lg" });
    if (width >= 768)
      return dispatch({ type: actions.SET_DEVICE, payload: "md" });
    return dispatch({ type: actions.SET_DEVICE, payload: "sm" });
  }
}
