import { BUTTONS, EVENTS } from './constanst';

export function navigate(href: any) {
  window.history.pushState({}, '', href);
  //Evento personalizado 
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

export function RouterLink ({ target, to, ...props }: any) {
  const handleClick = (event: any) => {
    const isMainEvent = event.button === BUTTONS.primary; // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = target === undefined || target === '_self';
    // Validate
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to); // Navaegation with SPA
      window.scrollTo(0, 0);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />
}