import OwnedDomainsFilter from './OwnedDomainsFilter';
import OwnedDomainsFilterChip from './OwnedDomainsFilterChip';
import OwnedDomainsRoot from './OwnedDomainsRoot';
import OwnedDomainsGridRoot from './OwnedDomainsGridRoot';


const OwnedDomains = {
	Filter: Object.assign(OwnedDomainsFilter, { Chip: OwnedDomainsFilterChip }),
	Root: OwnedDomainsRoot,
	Grid: {
		Root: OwnedDomainsGridRoot,

	},
};

export default OwnedDomains;
