import { useHistoryState } from '@uidotdev/usehooks';
import React from 'react';

export default function HistoryStateTester() {
  const { state, set, undo, redo, clear, canUndo, canRedo } =
    useHistoryState<string>('a');

  const [input, setInput] = React.useState('');

  return (
    <div
      style={{
        padding: '1rem',
        maxWidth: '400px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        useHistoryState Tester
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          set(input);
          setInput('');
        }}
      >
        <input
          type='text'
          value={input}
          placeholder='Enter value'
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: '100%',
            padding: '0.5rem',
            marginBottom: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
          required={true}
        />

        <button
          type='submit'
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '1rem',
          }}
        >
          Set Value
        </button>
      </form>
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={undo}
          disabled={!canUndo}
          style={{
            padding: '0.5rem',
            marginRight: '0.5rem',
            backgroundColor: canUndo ? '#ccc' : '#eee',
            border: 'none',
            borderRadius: '4px',
            cursor: canUndo ? 'pointer' : 'not-allowed',
          }}
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          style={{
            padding: '0.5rem',
            marginRight: '0.5rem',
            backgroundColor: canRedo ? '#ccc' : '#eee',
            border: 'none',
            borderRadius: '4px',
            cursor: canRedo ? 'pointer' : 'not-allowed',
          }}
        >
          Redo
        </button>
        <button
          onClick={clear}
          style={{
            padding: '0.5rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Clear
        </button>
      </div>

      <div
        style={{
          padding: '0.75rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      >
        <strong>Current State:</strong> {state ?? '(null)'}
      </div>
    </div>
  );
}
