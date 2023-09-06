import { MenuItem } from "@/types/Global";
import { BsHouses } from "react-icons/bs";

const iconSize: number | string = "1.2rem";

export const PatrimonyRoutes: MenuItem[] = [
    {
        icon: <BsHouses size={iconSize} />,
        description: "Entidades",
        pageName: "Entidades",
        submenu: [
            {
                description: "01 - Departamento",
                pageName: "Departamento",
                href: "manager/patrimony/register/department",
            },
            {
                description: "02 - Instituição",
                pageName: "Instituição",
                href: "manager/patrimony/register/institution",
            },
            {
                description: "03 - Local do Bem",
                pageName: "Local do Bem",
                href: "manager/patrimony/register/patrimony_location",
            },
        ],
    },
];
