import React, { useState, useEffect } from 'react';

const ProfileStatus = props => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(true)
  } 
  const deactivateEditMode = () => {
    props.updateUserStatus(status)
    setEditMode(false)
  } 
  const onStatusChange = (e) => {
      let text = e.target.value;
      setStatus(text);
  }
  
  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

    return (
      <>
      {!editMode ?
        <div>
          <span onDoubleClick={activateEditMode}>{status || 'Your status'}</span>
        </div>:
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
        </div>
        
      }
      </>
    );
};

export default ProfileStatus;