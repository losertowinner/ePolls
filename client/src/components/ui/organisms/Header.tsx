import { FC } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router';

const Header: FC = () => {
	return (
		<header className='sticky-top'>
			<Navbar
				collapseOnSelect
				expand='lg'
				data-bs-theme='light'
				className='bg-light'>
				<Container>
					<NavLink
						to={'/'}
						className='navbar-brand fw-bold fs-3'>
						❓StrawPoll
					</NavLink>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<NavLink
								className='nav-link'
								to={'/create/'}>
								Create Poll
							</NavLink>
							<NavLink
								className='nav-link'
								to={'/demo/'}>
								Demo
							</NavLink>
							<NavLink
								className='nav-link'
								to={'/pricing/'}>
								Pricing
							</NavLink>
						</Nav>
						<Nav>
							<NavLink
								className='nav-link'
								to={'/login/'}>
								Log In
							</NavLink>
							<NavLink
								className='nav-link'
								to={'signup'}>
								Sign Up
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
