import Root from './Root';
import Body from './Body';
import Button from './Button';
import VerifyStepsRoot from './VerifyStepsRoot';
import VerifyTextRoot from './VerifyTextRoot';
import VerifyTextTypography from './VerifyTextTypography';

const RightFrame = {
	Root,
	Body,
	Button,
	VerifyStepsRoot,
	VerifyText: {
		Root: VerifyTextRoot,
		Typography: VerifyTextTypography,
	},
};

export default RightFrame;
