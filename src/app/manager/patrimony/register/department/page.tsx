import { PageContent } from "@/components/containers/page_content";
import { Department } from "@/components/shared_entities/department/Department";

const PA_DepartmentPage = () => {
    return (
        <PageContent.Root>
            <PageContent.Title />
            <PageContent.Children>
                <Department />
            </PageContent.Children>
            <PageContent.Footer />
        </PageContent.Root>
    );
};

export default PA_DepartmentPage;
