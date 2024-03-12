import {InfoCardRoot} from "./InfoCardRoot";
import InfoCardDetailsRoot from "./InfoCardDetailsRoot";
import InfoCardHeader from "./InfoCardHeader";
import InfoCardDetailsTypography from "./InfoCardDetailsTypography";
import EditButton from "./EditButton";

const InfoCard = {
    Root: InfoCardRoot,
    Header: InfoCardHeader,
    EditButton,
    Body: {
        Root: InfoCardDetailsRoot,
        Typography: InfoCardDetailsTypography
    },

}

export  default InfoCard;