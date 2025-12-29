import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface DeleteDatacenterAlertProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onConfirm: () => void
    datacenterName: string
}

export function DeleteDatacenterAlert({
    open,
    onOpenChange,
    onConfirm,
    datacenterName,
}: DeleteDatacenterAlertProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent className="bg-card/95 backdrop-blur-xl border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-500">Delete Datacenter?</AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground">
                        Are you sure you want to remove <span className="font-bold text-foreground">{datacenterName}</span>?
                        <br />
                        This action cannot be undone. All associated nodes and configuration will be permanently removed from the dashboard.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="border-white/10 hover:bg-white/5">Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        className="bg-red-500/10 text-red-500 hover:bg-red-500/20 border border-red-500/20 hover:border-red-500/50 transition-colors"
                    >
                        Delete Datacenter
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
