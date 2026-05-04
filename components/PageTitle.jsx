import useCurrentPage from "@/hooks/useCurrentPage";

export default function PageTitle({sections, groups}) {
    const {currentPage} = useCurrentPage(sections, groups)

    return currentPage && <h1>
        {currentPage.title}
    </h1>
}