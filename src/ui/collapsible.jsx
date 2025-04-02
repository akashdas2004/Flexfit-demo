import React, { useState } from 'react';

export function Collapsible({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, toggle });
        }
        return child;
      })}
    </div>
  );
}

export function CollapsibleTrigger({ children, toggle }) {
  return <button onClick={toggle}>{children}</button>;
}

export function CollapsibleContent({ children, isOpen }) {
  return isOpen ? <div>{children}</div> : null;
}
