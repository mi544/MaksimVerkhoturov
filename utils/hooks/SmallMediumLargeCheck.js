import { useContext } from "react";
import MediaQueriesContext from "utils/MediaQueriesContext";

const SmallMediumLargeCheck = (smallVal, mediumVal, largeVal = mediumVal) => {
  const { height, width } = useContext(MediaQueriesContext);
  // previous large value - 1030
  if (width > 1215) return largeVal;
  if (width > 870) return mediumVal;
  if (width < 870) return smallVal;
};
export default SmallMediumLargeCheck;
