import {
  useState,
  useCallback,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { Button } from "@/components/ui/Button";
import { AlertTriangle } from "lucide-react";

/* ────────────────────────────────────────────
 * 1. Reusable ConfirmDialog component
 * ──────────────────────────────────────────── */

interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "default";
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  open,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onCancel}
      />

      {/* Dialog */}
      <div className="relative z-10 w-full max-w-sm mx-4 bg-card rounded-2xl shadow-2xl border border-border/50 animate-in fade-in zoom-in-95 duration-200">
        <div className="p-6 space-y-4">
          {/* Icon + Title */}
          <div className="flex items-start gap-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                variant === "danger"
                  ? "bg-destructive/10"
                  : "bg-primary/10"
              }`}
            >
              <AlertTriangle
                className={`w-5 h-5 ${
                  variant === "danger"
                    ? "text-destructive"
                    : "text-primary"
                }`}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              className="rounded-xl"
              onClick={onCancel}
            >
              {cancelLabel}
            </Button>
            <Button
              className={`rounded-xl ${
                variant === "danger"
                  ? "bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
              onClick={onConfirm}
            >
              {confirmLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
 * 2. useConfirm hook  —  imperative usage
 *    const confirm = useConfirm();
 *    const ok = await confirm({ title: "...", ... });
 * ──────────────────────────────────────────── */

interface ConfirmOptions {
  title?: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "default";
}

interface ConfirmContextType {
  confirm: (options?: ConfirmOptions) => Promise<boolean>;
}

const ConfirmContext = createContext<ConfirmContextType | undefined>(undefined);

export function ConfirmProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<
    (ConfirmOptions & { resolve: (value: boolean) => void }) | null
  >(null);

  const confirm = useCallback((options: ConfirmOptions = {}) => {
    return new Promise<boolean>((resolve) => {
      setState({ ...options, resolve });
    });
  }, []);

  const handleConfirm = () => {
    state?.resolve(true);
    setState(null);
  };

  const handleCancel = () => {
    state?.resolve(false);
    setState(null);
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      <ConfirmDialog
        open={!!state}
        title={state?.title}
        description={state?.description}
        confirmLabel={state?.confirmLabel}
        cancelLabel={state?.cancelLabel}
        variant={state?.variant}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within a ConfirmProvider");
  }
  return context.confirm;
}
