import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '192.168.0.120' }) // { host: '192.168.0.120' }
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}
