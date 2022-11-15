import { Grid } from '@mui/material';

interface IHeroSectionProps {
  title: string;
  slug: string;
  backgroundColor: string;
}

export const HeroSection = ({
  slug,
  title,
  backgroundColor,
}: IHeroSectionProps) => {
  return (
    <section id={slug} style={{ height: '50vh' }}>
      <Grid
        container
        alignContent={'center'}
        justifyContent={'center'}
        sx={{ width: '100%', height: '100%', backgroundColor }}
      >
        <h1>{title}</h1>
      </Grid>
    </section>
  );
};
