import Root from './Root';
import Body from './Body';
import VerifyButton from './VerifyButton';
import VerifyStepsRoot from './VerifyStepsRoot';
import VerifyTextRoot from './VerifyTextRoot';
import VerifyTextTypography from './VerifyTextTypography';

const RightFrame = {
	Root,
	Body,
	VerifyButton,
	VerifyStepsRoot,
	VerifyText: {
		Root: VerifyTextRoot,
		Typography: VerifyTextTypography,
	},
};

export default RightFrame;
