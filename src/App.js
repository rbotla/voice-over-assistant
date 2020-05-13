import React, { useState, useEffect } from 'react';
import './App.css';

const sections = [
  { id: '1', name: 'Section 1', input: "It is thought to spread mainly from person to person, mainly through respiratory droplets produced when an infected person coughs or sneezes. These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs. Spread is more likely when people are in close contact with one another (within about 6 feet). It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes. This is not thought to be the main way the virus spreads, but we are still learning more about this virus." },
  { id: '2', name: 'Section 2', input: "WHO is constantly evaluating new research, including research that examines the link between tobacco use, nicotine use, and COVID-19. A review of studies by public health experts convened by WHO on 29 April 2020 found that smokers are more likely to develop severe disease with COVID-19, compared to non-smokers." },
  { id: '3', name: 'Section 3', input: "New modelling on HIV convened by the World Health Organization and UNAIDS highlights the importance of taking immediate steps to minimise interruptions in health services and supplies of antiretroviral drugs during the COVID-19 pandemic. The worst case scenario considered by the modelling group was a 6-month disruption of antiretroviral therapy. The group suggested that this could lead to more than 500 000 extra deaths from AIDS-related illnesses, including from tuberculosis, in sub-Saharan Africa over the next year. At a media briefing today the WHO Director-General said that the modelling should be a “wake-up call,” and that despite attention being focused on the COVID-19 pandemic, we must still ensure that global supplies of tests and treatments for both HIV and TB reach the countries and communities that need them most." },
]

function App() {
  // const sIds = sections.map(s => s.id);

  // const [sections, setSections] = useState({sections: sections});
  // const [sections, setSections] = useState({sections: sections});

  // useEffect(() => {
  //   console.log('I will run only when valueA changes');
  // }, [sections]);

  return (
    <div className="App">
      <header className="App-header">
        Voice Over Assistant
      </header>
      <div>
        <SectionGrid />
      </div>
    </div>
  );
}

const SectionGrid = (props) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "5px", flexDirection: "column"}}>
      <Section sections={sections} />
    </div>
  )
}

const Section = (props) => {
  return props.sections.map((item, i) => {
    return (
      <div key={i} style={{ flex: 1, border: "1px dotted black", minHeight: "300px", margin: "10px", padding: "10px" }}>

        <div style={{display: 'flex'}}>
          <div style={{flex: 2}}>
            <div style={{ display: 'flex', padding: '5px 0', alignContent: "center", justifyContent: "" }}>
              <div style={{ flex: 3 }}><b>{item.name}</b></div>
              <button className="btn"><i class="fa fa-edit"></i> Edit</button>
              <button className="btn"><i class="fa fa-file-text"></i> <i class="fa fa-arrow-right"></i> <i class="fa fa-file-audio-o"></i></button>
              <button className="btn"><i class="fa fa-play"></i> Listen</button>
              <button className="btn"><i class="fa fa-download"></i> Download</button>
            </div>
            <div><b>Voice:</b> Joanna (Female)</div>
            <br />
            <div>{item.input}</div>
          </div>
          <div style={{flex:1, paddingTop: '50px', marginLeft: '30px'}}>
          <table id="myTable">
            <tr>
              <th style={{width:"40%"}}>Created On</th>
              <th style={{width:"30%"}}>Play</th>
              <th style={{width:"30%"}}>Select</th>
            </tr>
            <tr>
              <td>5/11/2018 10:43</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/8/2018 17:53</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/8/2018 12:32</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/8/2018 8:23</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/7/2018 15:34</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
          </table>
        </div>
        </div>
{/* 
        <div style={{ display: 'flex', padding: '5px 0', alignContent: "center", justifyContent: "" }}>
          <div style={{ flex: 3 }}><b>{item.name}</b></div>
          <button className="btn"><i class="fa fa-edit"></i> Edit</button>
          <button className="btn"><i class="fa fa-file-text"></i> <i class="fa fa-arrow-right"></i> <i class="fa fa-file-audio-o"></i></button>
          <button className="btn"><i class="fa fa-play"></i> Listen</button>
          <button className="btn"><i class="fa fa-download"></i> Download</button>
        </div>
        <div><b>Voice:</b> Joanna (Female)</div>
        <br />
        <div>{item.input}</div>
        <div>
          <table id="myTable">
            <tr>
              <th style={{width:"40%"}}>Created On</th>
              <th style={{width:"30%"}}>Play</th>
              <th style={{width:"30%"}}>Select</th>
            </tr>
            <tr>
              <td>5/11/2018 10:43</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/8/2018 17:53</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/8/2018 12:32</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/8/2018 8:23</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
            <tr>
              <td>5/7/2018 15:34</td>
              <td><button className="btn"><i class="fa fa-play"></i></button></td>
              <td><button className="btn"><i class="fa fa-mail-reply-all"> Activate</i></button></td>
            </tr>
          </table>
        </div> */}
      </div>
    )
  })
}

export default App;