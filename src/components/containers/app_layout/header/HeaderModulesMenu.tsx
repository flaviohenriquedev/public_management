import Link from "next/link";

type HeaderModulesMenuProps = {
    icon: JSX.Element;
};

export const HeaderModulesMenu = ({ icon }: HeaderModulesMenuProps) => {
    return (
        <Link href={"/"} prefetch>
            {icon}
        </Link>
    );
};
