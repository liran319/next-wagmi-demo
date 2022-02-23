import { useConnect } from 'wagmi'

export const Example = () => {
  const [{ data, error }, connect] = useConnect()

  return (
    <div>
      {data.connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect(connector)}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
        </button>
      ))}

      {error && <div>{error?.message ?? 'Failed to connect'}</div>}
    </div>
  )
}