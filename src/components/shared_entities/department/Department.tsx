export const Department = () => {
    return (
        <div>
            <form className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <label>
                        <h1 className="pl-1 text-[8pt]">Código:</h1>
                        <input
                            type="text"
                            className="border border-solid outline-none px-2 rounded-md w-24"
                        />
                    </label>

                    <label>
                        <h1 className="pl-1 text-[8pt]">Código INEP:</h1>
                        <input
                            type="text"
                            className="border border-solid outline-none px-2 rounded-md w-24"
                        />
                    </label>

                    <label>
                        <h1 className="pl-1 text-[8pt]">Prazo de Análise:</h1>
                        <input
                            type="text"
                            className="border border-solid outline-none px-2 rounded-md w-24"
                        />
                    </label>

                    <label className="w-full">
                        <h1 className="pl-1 text-[8pt]">Nome:</h1>
                        <input
                            type="text"
                            className="border border-solid outline-none px-2 rounded-md w-full"
                        />
                    </label>
                </div>
                <label className="w-full">
                    <h1 className="pl-1 text-[8pt]">Prazo de Análise:</h1>
                    <select className="border border-solid outline-none w-full px-2 rounded-md">
                        <option value="1"> Valor 1</option>
                        <option value="2"> Valor 2</option>
                        <option value="3"> Valor 3</option>
                    </select>
                </label>
            </form>
        </div>
    );
};
