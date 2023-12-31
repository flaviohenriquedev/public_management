export type MenuItem = {
    icon: JSX.Element;
    description: string;
    pageName: string;
    href?: string;
    submenu?: SubMenuItem[];
};

export type SubMenuItem = {
    description: string;
    pageName?: string;
    href: string;
    submenu?: SubMenuItem[];
};

export type Theme = TOption

export type TButton = 'primary' | 'success' | 'warning' | 'danger'

export type TOption = { value: string | number, description: string }