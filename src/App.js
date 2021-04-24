import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import Container from './component/Container';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ContactsView from './views/ContactsView';
import AppBar from './component/AppBar';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login" restricted redirectTo="/contacts">
          <LoginView />
        </PublicRoute>
        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
      </Switch>
    </Container>
  );
}
