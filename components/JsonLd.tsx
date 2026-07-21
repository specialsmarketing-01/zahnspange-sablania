type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

/** Renders valid JSON-LD without escaping for schema.org. */
export default function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  );
}
