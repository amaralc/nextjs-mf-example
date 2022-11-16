export interface IHeroSectionProps {
  title: string;
  slug: string;
  backgroundColor: string;
}

export type IHeroSection = (props: IHeroSectionProps) => JSX.Element;
