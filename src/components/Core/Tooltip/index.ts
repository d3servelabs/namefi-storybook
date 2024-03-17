import { Root } from "./Root";
import { TooltipContent } from "./TooltipContent";
import { ToolTipProvider } from "./TooltipContext";
import { TooltipImage } from "./TooltipImage";
import { TooltipInfo } from "./TooltipInfo";
import { TooltipLink } from "./TooltipLink";
import { TooltipTitle } from "./TooltipTitle";
import { TooltipTrigger } from "./TooltipTrigger";


const ToolTips = {
    Provider: ToolTipProvider,
    Root,
    Image: TooltipImage,
    Info: TooltipInfo,
    Title: TooltipTitle,
    Link: TooltipLink,
    Trigger: TooltipTrigger,
    Content: TooltipContent
}

export default ToolTips; 