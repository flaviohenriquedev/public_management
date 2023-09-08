'use client'

import { useTheme } from "next-themes";
import { Themes } from "@/data/theme/Theme";
import Select from "@/components/data_input/select/Select";

const ToggleTheme = () => {
    const { setTheme } = useTheme();

    return (
        <Select action={setTheme} options={Themes} defaultOption="Selecionar tema" />
    )
}

export default ToggleTheme;
