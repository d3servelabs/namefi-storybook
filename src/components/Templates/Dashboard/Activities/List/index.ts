import ActivitiesListRoot from './ActivitiesListRoot';
import ActivitiesListItem from './ActivitiesListItem';
import ActivitiesListItemColThree from "./Columns/ActivitiesListItemColThree";
import ActivitiesListItemColTwo from "./Columns/ActivitiesListItemColTwo";
import ActivitiesListItemColOne from "./Columns/ActivitiesListItemColOne";

const ActivitiesList = {
	Root: ActivitiesListRoot,
	Item: {
		Root: ActivitiesListItem,
		Columns: {
			One: ActivitiesListItemColOne,
			Two: ActivitiesListItemColTwo,
			Three: ActivitiesListItemColThree,
		},
	},
};
export default ActivitiesList;
