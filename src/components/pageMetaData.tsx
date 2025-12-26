import { Helmet } from 'react-helmet-async'

type PageMetaDataProps = {
    title: string
}

const PageMetaData = ({ title }: PageMetaDataProps) => {
    return (
        <Helmet>
            <title> {title}</title>
        </Helmet>
    )
}

export default PageMetaData
