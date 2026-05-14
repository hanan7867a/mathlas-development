import { Helmet } from 'react-helmet-async'

function StructuredData({ data }) {
  const items = Array.isArray(data) ? data : [data]

  return (
    <Helmet>
      {items.map((item, index) => (
        <script type="application/ld+json" key={`${item['@type']}-${index}`}>
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  )
}

export default StructuredData
