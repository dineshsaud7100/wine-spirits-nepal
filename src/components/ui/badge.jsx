import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground",
            secondary: "border-transparent bg-secondary text-secondary-foreground",
            destructive: "border-transparent bg-destructive text-destructive-foreground",
            outline: "text-foreground",
            gold: "border-gold/30 bg-gold/10 text-gold",
            burgundy: "border-burgundy/30 bg-burgundy/10 text-burgundy-400",
            success: "border-green-500/30 bg-green-500/10 text-green-400",
            warning: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ _jsx("div", {
        className: cn(badgeVariants({
            variant
        }), className),
        ...props
    });
}
export { Badge, badgeVariants };
