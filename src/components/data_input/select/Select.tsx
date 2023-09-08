import { TOption } from '@/types/Global';
import * as S from './style'

interface SelectProps {
    defaultOption?: string
    options: TOption[]
    action: (valule: string) => void;
}

const Select = ({ defaultOption, options, action }: SelectProps) => {

    function renderOptions() {
        return options.map(option => {
            return (
                <option value={option.value}>{option.description}</option>
            )
        })
    }

    return (
        <S.Select onChange={(e) => action(e.target.value)}>
            {defaultOption && (
                <option disabled selected>{defaultOption}</option>
            )}
            {renderOptions()}
        </S.Select>
    );
}

export default Select;
