import React from 'react';
 
function ButtonArchive({ id, onArchive, archived }) {
  return (
    <button className='buttonArchive' onClick={() => onArchive(id)}>
        {
            !archived ? archivedIcon() : unarchivedIcon()
        }
    </button>
  )
}

function archivedIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3zm16 6H4v10h16V9zm-.236-2l-1-2H5.237l-1 2h15.527zM13 14h3l-4 4-4-4h3v-4h2v4z" fill="rgba(241,196,14,1)"/></svg>
    );
}


function unarchivedIcon(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 3l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1l4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z" fill="rgba(241,196,14,1)"/></svg>
    );
}
 
export default ButtonArchive;