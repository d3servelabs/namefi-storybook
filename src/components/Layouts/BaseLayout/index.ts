import { default as BaseLayoutRoot } from './BaseLayoutRoot';
import { default as BaseLayoutFooter } from './BaseLayoutFooter';
import { default as BaseLayoutFooterLink } from './BaseLayoutFooterLink';
import { default as BaseLayoutBody } from './BaseLayoutBody';
import { default as BaseLayoutHeader } from './BaseLayoutHeader';

export { BaseLayoutRoot, BaseLayoutFooter, BaseLayoutFooterLink, BaseLayoutBody, BaseLayoutHeader };

export default {
	Root: BaseLayoutRoot,
	Header: BaseLayoutHeader,
	Body: BaseLayoutBody,
	Footer: Object.assign(BaseLayoutFooter, { Link: BaseLayoutFooterLink }),
};
