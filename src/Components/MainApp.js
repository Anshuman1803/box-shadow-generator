import React from "react";

export default function MainApp() {
  let [hLength, sethLength] = React.useState(10);
  let [vLength, setvLength] = React.useState(10);
  let [blur, setBlur] = React.useState(0);
  let [spreadR, setspreadR] = React.useState(0);
  let [shadowColor, setshadowColor] = React.useState('#000000');
  let [bgColor, setbgColor] = React.useState('#FFFFFF');
  return (
    <section id="main">
      <div className="settingSideBar">
       <div className="ControlBox">
       <div className="Box">
            <label>Horizontal Length:</label>
            <input type="range" min='-150' max='150' value={hLength} onChange={(e)=>sethLength(e.target.value)}/>
            <p>{hLength}px</p>
        </div>

        <div className="Box">
            <label>Verticle Length:</label>
            <input type="range" min='-150' max='150' value={vLength} onChange={(e)=>setvLength(e.target.value)}/>
            <p>{vLength}px</p>
        </div>

        <div className="Box">
            <label>Blur Radius:</label>
            <input type="range" min='0' max='150' value={blur} onChange={(e)=>setBlur(e.target.value)}/>
            <p>{blur}px</p>
        </div>

        <div className="Box">
            <label>Spread Radius:</label>
            <input type="range" min='0' max='100' value={spreadR} onChange={(e)=>setspreadR(e.target.value)}/>
            <p>{spreadR}px</p>
        </div>
        
       </div>
       <div className="colorcontrolBox">
        
       <div className="Box">
            <label>Shadow Color:</label>
            <input type="color" onChange={(e)=>setshadowColor(e.target.value)}/>
        </div>

       <div className="Box">
            <label>Box Color:</label>
            <input type="color" onChange={(e)=>setbgColor(e.target.value)}/>
            </div>

       </div>
       <div id="Code">
          <p>box-shadow: {shadowColor} {hLength}px {vLength}px {blur}px {spreadR}px</p>
        </div>
      </div>
      <div className="outPutSide">
        <div id="Result" style={{boxShadow:`${hLength}px ${vLength}px ${blur}px ${spreadR}px ${shadowColor}`, backgroundColor:`${bgColor}`}}></div>
      </div>
    </section>
  );
}
