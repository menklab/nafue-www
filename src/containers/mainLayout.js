import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import MainNavigation from '../components/parts/navigation/main-navigation'
import Footer from '../components/parts/footer/footer'


class MainLayout extends React.Component {
    constructor(props) {
        super(props);
        console.log("location: ", this.props.location.pathname);
    }

    render() {
        return (
            <div>
                <MainNavigation showHome={this.props.location.pathname == '/' ? true : false} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-push-2">
                            <div className="text-center">
                                <a className="hidden-xs" href="/">
                                    <img src="/img/logo.jpg" alt="Nafue.com"
                                         height="100px"/>
                                </a>
                                <a className="visible-xs" href="/">
                                    <img src="/img/logo.jpg" alt="Nafue.com"
                                         width="250px"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <br />
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

MainLayout.propTypes = {
    children: PropTypes.node
};

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps, {})(MainLayout)