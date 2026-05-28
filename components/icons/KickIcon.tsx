import { cn } from "@/lib/utils";

type KickIconProps = {
  className?: string;
  size?: number;
};

/**
 * Kick.com logo — stylized "K" block letterform.
 */
export function KickIcon({ className, size = 20 }: KickIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M3 3h5v6h2V6h2V3h5v3h-2v3h-2v3h2v3h2v3h-5v-3h-2v-3H8v6H3V3Z"
        fill="currentColor"
      />
    </svg>
  );
}
