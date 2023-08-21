import React from 'react';

function Popup(props) {
  return (
    <div className={`modal fade ${props.show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: props.show ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">you may contact us on :</h5>
            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.onClose}>
              <span aria-hidden="true">&times;</span>
            </button> */}
          </div>
          <div className="modal-body">
          <p><a href="#" class="link-underline-primary"> +44 7599 476514</a></p>
          </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;