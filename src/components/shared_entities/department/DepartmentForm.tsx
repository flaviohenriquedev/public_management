'use client'

import { Input } from "@/components/data_input/input";
import LabelContainer from "@/components/data_input/label/LabelContainer";
import Select from "@/components/data_input/select/Select";
import { TOption } from "@/types/Global";

export const DepartamentoSuperior: TOption[] = [
    {
        value: 'Departamento 1',
        description: 'Departamento 1'
    },
    {
        value: 'Departamento 2',
        description: 'Departamento 2'
    },
    {
        value: 'Departamento 3',
        description: 'Departamento 3'
    }
]

const DepartmentForm = () => {

    function selectDepartment(value: string) {
        console.log(value)
    }

    return (
        <div>
            <form className="flex flex-col gap-3">
                <div className="flex gap-3">
                    <LabelContainer title="Código:">
                        <Input type="text" />
                    </LabelContainer>

                    <LabelContainer title="Código INEP:">
                        <Input type="text" />
                    </LabelContainer>

                    <LabelContainer title="Prazo de Análise:">
                        <Input type="text" />
                    </LabelContainer>

                    <LabelContainer title="Nome:">
                        <Input type="text" />
                    </LabelContainer>
                </div>

                <div className="flex gap-3">
                    <LabelContainer title="Departamento Superior">
                        <Select action={selectDepartment} options={DepartamentoSuperior} />
                    </LabelContainer>

                    <LabelContainer title="Profissional do Magistério">
                        <Select action={selectDepartment} options={DepartamentoSuperior} />
                    </LabelContainer>
                </div>
            </form >
        </div >
    );
}

export default DepartmentForm;
