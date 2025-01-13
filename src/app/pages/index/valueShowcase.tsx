import './styling/valueShowcase.css'

export default function ValueShowcase(){
  return(
    <div>
      <div className='titlecop'>COPARTICIPAÇÃO</div>
      <div className='w-full pt-3 px-5 flex'>

        <div className='w-full float-start valuefield'>
          <div id='title_cp'>PARCIAL</div>

          <div>
            <div className='innerTitle'>
              APARTAMENTO
              <div id='ap1' contentEditable></div>
            </div>
            <div className='innerTitle'>
              ENFERMARIA
              <div id='en1' contentEditable></div>
            </div>
            <div className='innerTitle'>
              AMBULATORIAL
              <div id='am1' contentEditable></div>
            </div>
          </div>
          
        </div>

        <span className='vdivider mx-2 my-3'></span>

        <div className='w-full valuefield'>
          <div id='title_ct'>TOTAL</div>

          <div>
            <div className='innerTitle'>
              APARTAMENTO
              <div id='ap2' contentEditable></div>
            </div>
            <div className='innerTitle'>
              ENFERMARIA
              <div id='en2' contentEditable></div>
            </div>
            <div className='innerTitle'>
              AMBULATORIAL
              <div id='am2' contentEditable></div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}