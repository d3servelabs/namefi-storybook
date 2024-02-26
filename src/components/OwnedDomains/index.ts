import OwnedDomainsFilter from '@components/OwnedDomains/OwnedDomainsFilter';
import OwnedDomainsFilterChip from '@components/OwnedDomains/OwnedDomainsFilterChip';
import OwnedDomainsRoot from '@components/OwnedDomains/OwnedDomainsRoot';
import OwnedDomainsGridRoot from '@components/OwnedDomains/OwnedDomainsGridRoot';
import { DomainTile } from '@components/DomainTile';

const OwnedDomains = {
	Filter: Object.assign(OwnedDomainsFilter, { Chip: OwnedDomainsFilterChip }),
	Root: OwnedDomainsRoot,
	Grid: {
		Root: OwnedDomainsGridRoot,
		Tile: DomainTile,
	},
};

export default OwnedDomains;
