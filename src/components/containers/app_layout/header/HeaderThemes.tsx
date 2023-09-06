"use client";

import { useTheme } from "next-themes";
import { Themes } from "@/data/theme/Theme";

export const HeaderThemes = () => {
    const { setTheme } = useTheme();

    function renderThemes() {
        return Themes.map((theme) => {
            return (
                <option value={theme.description}>{theme.description}</option>
            );
        });
    }

    return (
        <select onChange={(e) => setTheme(e.target.value)}>
            {renderThemes()}
        </select>
    );
};
