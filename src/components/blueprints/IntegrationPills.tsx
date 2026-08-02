type IntegrationPillsProps = {
  integrations: string[]
  blueprintTitle: string
}

export function IntegrationPills({ integrations, blueprintTitle }: IntegrationPillsProps) {
  return (
    <div className="integration-pills">
      <p className="blueprint-card__label">Suggested integrations</p>
      <ul aria-label={`Suggested integrations for ${blueprintTitle}`}>
        {integrations.map((integration) => <li key={integration}>{integration}</li>)}
      </ul>
    </div>
  )
}
