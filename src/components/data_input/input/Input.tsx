import * as S from './style'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input = ({ placeholder, type, name }: InputProps) => {
    return (
        <S.Input placeholder={placeholder} type={type} name={name} />
    );
}
