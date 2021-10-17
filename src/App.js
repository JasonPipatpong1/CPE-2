import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import SigninScreen from './screens/SigninScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/index">
              CPE
            </a>
          </div>
          <div>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.Username}
                  <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link to="/" onClick={signoutHandler}>
                    Sign OUT
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/" component={SigninScreen} exact></Route>
          <Route path="/home" component={HomeScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
