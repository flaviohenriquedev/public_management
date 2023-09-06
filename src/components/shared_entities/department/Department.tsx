export const Department = () => {
    return (
        <div>
            <form className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <label>
                        <h1 className="pl-2 text-[9pt]">Código:</h1>
                        <input
                            type="text"
                            className="border border-solid outline-none px-2 rounded-md"
                        />
                    </label>

                    <label>
                        <h1 className="pl-2 text-[9pt]">Código INEP:</h1>
                        <input
                            type="text"
                            className="border border-solid outline-none px-2 rounded-md"
                        />
                    </label>

                    <label>
                        <h1 className="pl-2 text-[9pt]">Prazo de Análise:</h1>
                        <input
                            type="text"
                            className="border border-solid outline-none px-2 rounded-md"
                        />
                    </label>

                    <label className="w-full">
                        <h1 className="pl-2 text-[9pt]">Prazo de Análise:</h1>
                        <select className="border border-solid outline-none w-full px-2 rounded-md">
                            <option value="1"> Valor 1</option>
                            <option value="2"> Valor 2</option>
                            <option value="3"> Valor 3</option>
                        </select>
                    </label>
                </div>
            </form>
        </div>
    );
};
