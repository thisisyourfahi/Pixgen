"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png"
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
    const d = authClient.useSession();
    const user = d.data?.user
    console.log(user);


    return (
        <div className="border-b px-2">
            <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
                <div className="flex gap-2 items-center">
                    <Image
                        src={logo}
                        alt="logo"
                        loading="eager"
                        width={30}
                        height={30}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">Pixgen.</h3>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-photos"}>All Photos</Link>
                    </li>
                    <li>
                        <Link href={"/pricing"}>Pricing</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                <div>
                    {!user ? <ul className="flex gap-4 items-center text-sm">
                        <li>
                            <Link href={"/signup"}>SignUp</Link>
                        </li>
                        <li>
                            <Link href={"/signin"}>SignIn</Link>
                        </li>
                    </ul> : <div className="flex gap-2">
                        <Avatar>
                            <Avatar.Image src={user?.image} alt={user?.name} referrerPolicy="no-referrer" />
                            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                        <Button variant="danger"
                            onClick={async () => await authClient.signOut()}
                        >
                            <IoExitOutline />                            
                            Logout
                        </Button>
                    </div>}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;