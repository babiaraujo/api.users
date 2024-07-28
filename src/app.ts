import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

export default app;

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
