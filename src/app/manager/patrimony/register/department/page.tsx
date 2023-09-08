import { PageContent } from "@/components/containers/page_content";
import { Department } from "@/components/shared_entities/department";

const PA_DepartmentPage = () => {
    return (
        <PageContent.Root>
            <PageContent.Title />
            <PageContent.Children>
                <Department.Root>
                    <Department.Form />
                    <Department.Footer />
                </Department.Root>
            </PageContent.Children>
        </PageContent.Root>
    );
};

export default PA_DepartmentPage;
