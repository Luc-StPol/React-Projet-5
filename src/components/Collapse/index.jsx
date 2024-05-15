import { useState, useRef } from 'react';
import '../../styles/Components.scss';
import arrowIcone from '../../assets/icones/arrow.svg';

export default function Collapse(props) {
  const [open, setOpen] = useState(false);

  const contentRef = useRef();

  function toogle() {
    setOpen(!open);
  }

  return (
    <div>
      <div className="toggle">
        <h2>{props.label}</h2>
        <button className="toggle-btn" onClick={toogle}>
          <img src={arrowIcone} alt="arrow" className={open ? 'arrowIcone open' : 'arrowIcone closed'} />
        </button>
      </div>

      <div
        className="content-parent"
        ref={contentRef}
        style={open ? { height: contentRef.current.scrollHeight + 'px' } : { height: '0px' }}
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}
