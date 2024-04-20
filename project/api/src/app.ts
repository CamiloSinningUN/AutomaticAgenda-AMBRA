import express from 'express';
import morgan from 'morgan';
import routes from '@routes';

const app = express();

// setting up the app
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.send('server is running');
});

app.use('/api', routes);

export default app;