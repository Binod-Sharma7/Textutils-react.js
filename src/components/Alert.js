

export default function Alert(props) {
  return (
    <div style={{height:50}}>
        {props.data && <div className={`alert alert-${props.data.type} alert-dismissible fade show` }role="alert">
  <strong>{props.data.msg}</strong> 
  
</div>}
      
    </div>
    
  )
}






