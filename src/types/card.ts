/**
 * Shared types for the content-driven portfolio pages.
 * Kept in one place so projects, personal projects, and books stay in sync.
 */

/** A single card item shown on a portfolio page. */
export interface CardItem {
  /** Primary card title (project / book name). */
  title: string;
  /** Optional meta line, e.g. "Company · Period". */
  meta?: string;
  /** Body description. */
  description: string;
  /** Optional headline impact metric, rendered with a ▲ prefix. */
  impact?: string;
  /** Optional external link shown as a "Visit" action. */
  link?: string;
  /** Optional custom label for the link action. */
  linkLabel?: string;
  /** Tag pills displayed at the bottom of the card. */
  tags: string[];
}
