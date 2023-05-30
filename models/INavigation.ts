export interface NavLink {
  link: string;
  label: string;
  links?: { link: string; label: string }[];
}
