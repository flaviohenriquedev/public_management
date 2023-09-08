interface DepartmentRootProps {
    children: React.ReactNode
}

const DepartmentRoot = ({ children }: DepartmentRootProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default DepartmentRoot;
