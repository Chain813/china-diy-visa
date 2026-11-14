export interface ToastProps {
  message: string | null;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <div
      id="toast"
      className={`toast-banner${visible && message ? ' show' : ''}`}
      role="status"
      aria-live="polite"
    >
      {message ?? ''}
    </div>
  );
}

export default Toast;
