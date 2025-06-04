import * as React from 'react';
import useLockBodyScroll from './hooks/010-useLockBodyScroll/useLockBodyScroll';

function Modal({ handleClose }: { handleClose: () => void }) {
  useLockBodyScroll();
  return (
    <div>
      <dialog>
        <header>
          <button onClick={handleClose}>X</button>
          <h2>Modal</h2>
        </header>
        <section>content</section>
      </dialog>
    </div>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {isOpen && <Modal handleClose={() => setIsOpen(false)} />}
      <main>
        <header>
          <h1>useLockBodyScroll</h1>
        </header>

        <button className='primary' onClick={() => setIsOpen(true)}>
          openModal
        </button>
        {['red', 'blue', 'green', 'pink', 'purple', 'yellow'].map((color) => {
          return (
            <section
              key={color}
              style={{
                backgroundColor: color,
                width: '100vw',
                height: '50vh',
              }}
            />
          );
        })}
      </main>
    </>
  );
}
