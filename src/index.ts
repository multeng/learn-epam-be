import { PORT } from './common/config';
import { app } from './app';

app.listen(PORT, () => {
  console.log(
    '\x1b[31m',
    `App is running now, http://localhost:${PORT}`,
    '\x1b[0m'
  );
});
