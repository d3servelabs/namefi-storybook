import OwnedDomainsFilter from './OwnedDomainsFilter';
import OwnedDomainsFilterChip from './OwnedDomainsFilterChip';
import OwnedDomainsRoot from './OwnedDomainsRoot';
import OwnedDomainsGridRoot from './OwnedDomainsGridRoot';
import { DomainTile } from '../DomainTile';

const OwnedDomains = {
	Filter: Object.assign(OwnedDomainsFilter, { Chip: OwnedDomainsFilterChip }),
	Root: OwnedDomainsRoot,
	Grid: {
		Root: OwnedDomainsGridRoot,
		Tile: DomainTile,
	},
};

export default OwnedDomains;
