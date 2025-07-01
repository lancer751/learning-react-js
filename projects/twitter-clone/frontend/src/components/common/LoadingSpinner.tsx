interface LoadingSpinnerProps {
    size: "md" | "lg" | "sm"
}
export default function LoadingSpinner({ size = "md" }: LoadingSpinnerProps) {
  const sizeClass = `loading-${size}`;

  return <span className={`loading loading-spinner ${sizeClass}`} />;
}
