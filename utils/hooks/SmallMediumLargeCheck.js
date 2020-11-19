import { useContext } from "react";
import MediaQueriesContext from "utils/MediaQueriesContext";

const SmallMediumLargeCheck = (smallVal, mediumVal, largeVal = mediumVal) => {
  const { height, width } = useContext(MediaQueriesContext);
  if (width > 1030) return largeVal;
  if (width > 870) return mediumVal;
  if (width < 870) return smallVal;
};
export default SmallMediumLargeCheck;
