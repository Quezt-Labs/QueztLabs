import { PageTransition } from "@/components/ui/page-transition";

/**
 * Template re-renders on navigation - enables page transition animations
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
