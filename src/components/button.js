import React from 'react';

const Btn = ({ className='', edit, apply, add, ...props }) =>
  <button
    type="button"
    className={
      `btn 
      ${edit && "btn-edit" ||
      apply && "btn-apply" ||
      add && "btn-add" 
      } ${className}
      `
    }
    {...props}
  >{edit && 'Edit' || apply && 'Apply' || add && 'Add'}</button>
export const EditBtn = props =><Btn {...props} edit />
export const ApplyBtn = props =><Btn {...props} apply />
export const AddBtn = props =><Btn {...props} add />