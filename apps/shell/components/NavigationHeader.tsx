import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function NavigationHeader() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#333' }}>
      <Toolbar
        sx={{
          width: '100%',
          maxWidth: 1080,
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction={'row'}>
          <Link href="/" style={{ textDecoration: 'none', color: '#fff' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Home
            </Typography>
          </Link>
          <Link
            href="/remote"
            style={{
              textDecoration: 'none',
              color: '#fff',
              marginLeft: '1rem',
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Remote
            </Typography>
          </Link>
        </Stack>
      </Toolbar>
    </Box>
  );
}
