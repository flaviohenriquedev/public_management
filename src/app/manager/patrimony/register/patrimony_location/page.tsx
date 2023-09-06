import { PageContent } from "@/components/containers/page_content";
import { Institution } from "@/components/shared_entities/institution";
import { PatrimonyLocation } from "@/components/shared_entities/patrimony_location";

const PA_PatrimonyLocationPage = () => {
    return (
        <PageContent.Root>
            <PageContent.Title />
            <PageContent.Children>
                <PatrimonyLocation />
            </PageContent.Children>
        </PageContent.Root>
    );
};

export default PA_PatrimonyLocationPage;
