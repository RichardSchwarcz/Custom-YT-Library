import { useLocation } from "react-router-dom";

function useCurrentFolder() {
  const location = useLocation();
  const currentLocation = location.pathname.replace("%20", " ").slice(1);
  return currentLocation;
}

export default useCurrentFolder;
