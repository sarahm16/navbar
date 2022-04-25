import React,  {Component} from 'react';
import logo from './logo2.png';
import './navbar.css';

class Navbar extends Component {
    state={
        bgColor: 'transparent',
        topPadding: 'topPadding',
        rightPadding: false
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let bgColor = window.scrollY > window.innerHeight / 2 ? 'black' : 'transparent';
            let displayPage = window.scrollY >300 ? true : false;
            //console.log(window.scrollY)
            this.setState({
                bgColor: bgColor,
                displayPage: displayPage
            })
        })
    }

    toggleSmallScreen = () => {
        if(this.state.bgColor === 'transparent' && window.scrollY < window.innerHeight) this.setState({bgColor: 'black'})
        else if(this.state.bgColor === 'black' && window.scrollY < window.innerWidth / 3) this.setState({bgColor: 'transparent'})
    }

    toggleFranchisePadding = (bool) => {
        this.setState({rightPadding: bool}, () => console.log(this.state.rightPadding))
    }

    render() {
        return(
            <nav className={`navbar navbar-expand-xl bg-dark navbar-dark fixed-top ${this.state.bgColor} ${this.props.page} ${this.state.topPadding} ml-auto`}  >
                <a className="navbar-brand" href="/">
                    <img src={logo} id='logo' alt='Transblue Logo'></img>
                </a>
                {this.state.displayPage && <div className='nav-page'>{this.props.page}</div>}

                <button onClick={this.toggleSmallScreen} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-lg-column" id="navbarNav">

                    <ul className="navbar-nav ml-auto flex-xl-row">
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/">HOME</a>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className={this.props.parentPage === 'gc' ? 'nav-link dropdown-toggle ml-auto active' : 'nav-link dropdown-toggle ml-auto'} id="navbarDropdown1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                SERVICES
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`}  aria-labelledby="navbarDropdown1">
                                <a className="dropdown-item" href="/residential">RESIDENTIAL</a>
                                <a className="dropdown-item" href="/multifamily">MULTIFAMILY</a>
                                <a className='dropdown-item' href="/commercial">COMMERCIAL</a>
                                <a className='dropdown-item' href="/government">GOVERNMENT</a>
                            </div>
                        </li>
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/commercial">COMMERCIAL</a>
                        </li>
                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                GREEN
                            </button>
                            <div className={`dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown2">
                                <a className="dropdown-item" href="https://green.transblue.com/">ABOUT</a>
                                <a className="dropdown-item" href="http://green.transblue.com/residential">RESIDENTIAL</a>
                                <a className="dropdown-item" href="https://green.transblue.com/multifamily">MULTIFAMILY</a>
                            </div>
                        </li>
                        {/* <li className="nav-item ml-auto">
                            <a className="nav-link" href="http://green.transblue.com/">GREEN SOLUTIONS</a>
                        </li> */}
                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="http://snow.transblue.com/">SNOW</a>
                        </li>

                        <li className="nav-item ml-auto">
                            <a className="nav-link" href="/locations">LOCATIONS</a>
                        </li>

                        <li className="nav-item dropdown ml-auto">
                            <button className='nav-link dropdown-toggle ml-auto' id="navbarDropdown3" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            OTHER
                            </button>
                            <div className={this.props.page === 'LOCATIONS' ? `dropdown-menu dropdown-locations` : `dropdown-menu ${this.state.bgColor}`} aria-labelledby="navbarDropdown3">
                                <a href='/subcontractor' className='dropdown-item'>SUBCONTRACTORS</a>
                                <a className='dropdown-item' href='/finance'>GET FINANCED</a>
                                {!this.props.franchise && <a className="dropdown-item" href="/contact">CONTACT</a>}
                                <a className='dropdown-item' href='/featured'>PROJECTS</a>
                                <a className='dropdown-item' href="/blog">BLOG</a>
                                <a className='dropdown-item' href='/givesback'>GIVING BACK</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;