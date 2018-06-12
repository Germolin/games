import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PersistentDrawer from '../components/drawer';

injectTapEventPlugin();

class Template extends Component {
    render() {
        return(
           
                <div>
                    <header>
                        <PersistentDrawer />
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
         
        )
    }
}

export default Template;