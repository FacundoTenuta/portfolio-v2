import {
	Navbar as NavbarNextUI,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from '@nextui-org/react';
import { FC } from 'react';

export const Navbar: FC = () => {
	return (
		<NavbarNextUI>
			<NavbarBrand>
				<p className="font-bold text-inherit">Facu</p>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link href="#" aria-current="page">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</NavbarNextUI>
	);
};
