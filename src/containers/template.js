import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Button from '@material-ui/core/Button';

injectTapEventPlugin();

class Template extends Component {
    render() {
        return(
           
                <div>
                    <header>
                        <h1>Games!</h1>
                        <Button 
                        variant="contained" 
                        color="primary"
                        onTouchTap={() => {console.log("I work")}}>
                        Hello World
                        </Button>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
         
        )
    }
}

export default Template;