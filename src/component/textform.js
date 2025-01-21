import React from 'react'

export default function textform(props) {
  return (
    <>    
    <h1>{props.title}</h1>
<div className="textarea">
  <label for="mybox" class="form-label"></label>
  <textarea class="form-control" id="mybox" rows="8"></textarea>
  <button className="btn btn-primary">convert to text</button>
</div>
    </>
  )
}
//i am use only for try
