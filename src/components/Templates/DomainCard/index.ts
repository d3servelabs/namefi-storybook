import DomainCardRoot from "./DomainCardRoot";
import DomainCardHeader from "./DomainCardHeader";
import DomainCardFooter from "./DomainCardFooter";
import DomainCardBody from "./DomainCardBody";
import DomainOwner from "./DomainOwner";
import DomainStatus, {DomainStatusEnum} from "./DomainStatus";
import DomainExpirationAndLock from "./DomainExpirationAndLock";

const DomainCard= {
    Root: DomainCardRoot,
    Body: DomainCardBody,
    Header: DomainCardHeader,
    Footer: DomainCardFooter,
    Owner: DomainOwner,
    Status: DomainStatus,
    StatusEnum: DomainStatusEnum,
    ExpirationAndLock: DomainExpirationAndLock,
}
export default DomainCard