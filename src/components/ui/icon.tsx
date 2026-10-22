import type { SVGProps } from "react";

type IconName = "arrow-right" | "arrow-up-right" | "location" | "mail" | "phone" | "search" | "folder" | "lock";

const paths: Record<IconName, React.ReactNode> = {
  folder: <path d="M3 7V5a1 1 0 0 1 1-1h5l2 3h9a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7Z" />,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  "arrow-right": <><path d="M4 12h15M13 5l7 7-7 7" /></>,
  "arrow-up-right": <><path d="M6 18 18 6M6 6h12v12" /></>,
  location: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  phone: <><path d="m7 3 3 5-2 2a16 16 0 0 0 6 6l2-2 5 3c0 2-1 4-4 4C10 21 3 14 3 7c0-3 2-4 4-4Z" /></>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
