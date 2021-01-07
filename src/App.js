import './App.css';
import {Link, BrowserRouter as Router,} from "react-router-dom";
import {Layout} from "antd";
import {Route, Switch} from "react-router";
import RouterHome from "./RouterHome";
function App() {
    return (
        <Layout>
            <Router>
                <Switch>
                    <Route
                        path={"/:cat/"}
                        render={(route) => <RouterHome {...route} />}
                    />
                    <Route path={"/"} render={(route) => <RouterHome {...route} />}/>
                </Switch>
            </Router>
        </Layout>
    );
}

export default App;
