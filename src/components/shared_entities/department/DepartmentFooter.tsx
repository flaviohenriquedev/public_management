import { Button } from '@/components/actions/button';
import * as S from './style';

const DepartmentFooter = () => {
    return (
        <S.Footer>
            <Button.Root classButton="primary">
                <Button.Title title="Consultar" />
            </Button.Root>

            <Button.Root classButton="success">
                <Button.Title title="Novo Cadastro" />
            </Button.Root>

            <Button.Root classButton="warning">
                <Button.Title title="Editar" />
            </Button.Root>

            <Button.Root classButton="danger">
                <Button.Title title="Cancelar" />
            </Button.Root>
        </S.Footer>
    );
}

export default DepartmentFooter;
