import { useState } from 'react';
//import PropTypes from 'prop-types'
import {
    NavLink,
    useNavigate
} from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa6';
import LogoBrand from '../assets/logo2.png';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn,
    MDBNavbarNav,
    MDBInputGroup,
    MDBNavbarItem
} from 'mdb-react-ui-kit';

const NavBar = () => {
    const [
        openNavNoTogglerSecond,
        setOpenNavNoTogglerSecond
    ] = useState(false);

    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch('');
    };

    return (
        <>
            <MDBNavbar
                expand="lg"
                dark
                bgColor="dark"
                className="navBar fixed-top pt-4 pb-4 px-3 shadow shadow-light"
            >
                <MDBContainer fluid>
                    <MDBNavbarBrand href="/">
                        <img
                            src={LogoBrand}
                            alt="brand-img"
                            className="w-75"
                        />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        type="button"
                        data-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() =>
                            setOpenNavNoTogglerSecond(
                                !openNavNoTogglerSecond
                            )
                        }
                    >
                        <FaBars />
                    </MDBNavbarToggler>
                    <MDBCollapse
                        navbar
                        open={
                            openNavNoTogglerSecond
                        }
                    >
                        <MDBNavbarNav className="mr-auto mb-3 mb-lg-0">
                            <MDBNavbarItem className="px-4 my-3">
                                <NavLink
                                    to="/"
                                    aria-current="page"
                                    className={({
                                        isActive
                                    }) =>
                                        isActive
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    Top Movies
                                </NavLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-4 my-3">
                                <NavLink
                                    to="/populary"
                                    aria-current="page"
                                    style={{
                                        color: '#24c6dc'
                                    }}
                                >
                                    Popular Movies
                                </NavLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-4 my-3">
                                <NavLink
                                    to="/upcoming"
                                    aria-current="page"
                                    style={{
                                        color: '#24c6dc'
                                    }}
                                >
                                    Movies up
                                    Coming
                                </NavLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="px-4 my-3">
                                <NavLink
                                    to="/tvseriespopular"
                                    aria-current="page"
                                    style={{
                                        color: '#24c6dc'
                                    }}
                                >
                                    Tv Series
                                </NavLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <MDBInputGroup
                            tag="form"
                            className="d-flex w-75 mb-3"
                            onSubmit={
                                handleSubmit
                            }
                        >
                            <input
                                className="form-control"
                                placeholder="Search your Movie"
                                aria-label="Search"
                                type="Search"
                                onChange={e => {
                                    setSearch(
                                        e.target
                                            .value
                                    );
                                }}
                                value={search}
                            />
                            <MDBBtn
                                type="submit"
                                className="text-light"
                                style={{
                                    background:
                                        '#24c6dc'
                                }}
                            >
                                <BsSearch
                                    size="13"
                                    color="black"
                                />
                            </MDBBtn>
                        </MDBInputGroup>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

NavBar.propTypes = {};

export default NavBar;
