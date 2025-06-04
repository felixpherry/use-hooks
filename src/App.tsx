import useCopyToClipboard from './hooks/007-useCopyToClipboard/useCopyToClipboard';

const randomHash = crypto.randomUUID();
export default function App() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);
  return (
    <section>
      <h1>useCopyToClipboard</h1>
      <article>
        <label>Fake API Key</label>
        <pre>
          <code>{randomHash}</code>
          <button
            disabled={hasCopiedText}
            className='link'
            onClick={() => copyToClipboard(randomHash)}
          >
            {hasCopiedText ? 'checkIcon' : 'copyIcon'}
          </button>
        </pre>
      </article>
      {hasCopiedText && (
        <dialog open={hasCopiedText}>
          <h4>
            Copied{' '}
            <span role='img' aria-label='Celebrate Emoji'>
              🎉
            </span>
          </h4>
          <textarea placeholder='Paste your copied text' />
        </dialog>
      )}
    </section>
  );
}
