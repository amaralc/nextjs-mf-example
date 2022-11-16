import { Grid } from '@mui/material';
import { IHeroSection } from './types';

const HeroSection: IHeroSection = ({ slug, title, backgroundColor }) => {
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

export default HeroSection;
