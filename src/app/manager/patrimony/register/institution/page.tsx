import { PageContent } from "@/components/containers/page_content";
import { Institution } from "@/components/shared_entities/institution";

const PA_InstitutionPage = () => {
    return (
        <PageContent.Root>
            <PageContent.Title />
            <PageContent.Children>
                <Institution />
            </PageContent.Children>
        </PageContent.Root>
    );
};

export default PA_InstitutionPage;
