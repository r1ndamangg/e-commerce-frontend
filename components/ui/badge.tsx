import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { XIcon } from "lucide-react"

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-2 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 gap-1.5",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  closable?: boolean
}

function Badge({ className, variant, closable, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {props.children}
      {closable && (
        <button className="rounded-sm bg-grey-100 p-0.5">
          <XIcon width={12} height={12} />
        </button>
      )}
    </div>
  )
}

export { Badge, badgeVariants }
