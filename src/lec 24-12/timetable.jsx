const TimeTable = () => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontFamily: "Arial, sans-serif",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
  };

  const breakStyle = {
    backgroundColor: "#f9f9f9",
    fontStyle: "italic",
    fontWeight: "bold",
  };

  const headerStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginBottom: "10px",
  };

  const footerStyle = {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "12px",
    color: "#555",
  };

  return (
    <div>
      <div style={headerStyle}>
        <h2>
          RK University,
          <br /> School of Engineering <br />
          <br />
          6CEA
          <br />
        </h2>
        <p>Class Counselor: Prof. Anju Kakdad</p>
        <p>W.E.F: 17/12/2024</p>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Time</th>
            <th style={thStyle}>Monday</th>
            <th style={thStyle}>Tuesday</th>
            <th style={thStyle}>Wednesday</th>
            <th style={thStyle}>Thursday</th>
            <th style={thStyle}>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>8:10 - 8:55</td>
            <td style={thTdStyle}>React (NV)</td>
            <td style={thTdStyle}>React (NV)</td>
            <td style={thTdStyle}>AI/ML (CP)</td>
            <td style={thTdStyle}>React (SMS)</td>
            <td style={thTdStyle}>PD / DM / EC (LIB)</td>
          </tr>
          <tr>
            <td style={thTdStyle}>8:55 - 9:45</td>
            <td style={thTdStyle}>React (NV)</td>
            <td style={thTdStyle}>React (NV)</td>
            <td style={thTdStyle}>AI/ML (CP)</td>
            <td style={thTdStyle}>React (SMS)</td>
            <td style={thTdStyle}>PD / DM / EC (LIB)</td>
          </tr>
          <tr>
            <td style={thStyle}>Class/Lab Location</td>
            <td style={thStyle}>LL1</td>
            <td style={thStyle}>LL5</td>
            <td style={thStyle}>LL1</td>
            <td style={thStyle}>LL1</td>
            <td style={thStyle}>118</td>
          </tr>
          <tr>
            <td style={thTdStyle}>9:45 - 10:00</td>
            <td colSpan="5" style={{ ...thTdStyle, ...breakStyle }}>
              Tea Break
            </td>
          </tr>
          <tr>
            <td style={thTdStyle}>10:00 - 10:50</td>
            <td style={thTdStyle}>NET / Adv. JAVA</td>
            <td style={thTdStyle}>NET / Adv. JAVA</td>
            <td style={thTdStyle}>TOC</td>
            <td style={thTdStyle}>AI/ML</td>
            <td style={thTdStyle}>AI/ML</td>
          </tr>
          <tr>
            <td style={thTdStyle}>10:50 - 11:40</td>
            <td style={thTdStyle}>NET / Adv. JAVA</td>
            <td style={thTdStyle}>NET / Adv. JAVA</td>
            <td style={thTdStyle}>TOC</td>
            <td style={thTdStyle}>AI/ML</td>
            <td style={thTdStyle}>TOC</td>
          </tr>
          <tr>
            <td style={thStyle}>Class/Lab Location</td>
            <td style={thStyle}>LL1/LL5</td>
            <td style={thStyle}>LL1/LL5</td>
            <td style={thStyle}>201</td>
            <td style={thStyle}>LL6</td>
            <td style={thStyle}>LL7</td>
          </tr>
          <tr>
            <td style={thTdStyle}>11:40 - 12:30</td>
            <td colSpan="5" style={{ ...thTdStyle, ...breakStyle }}>
              Lunch Break
            </td>
          </tr>
          <tr>
            <td style={thTdStyle}>12:30 - 1:20</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>NET / Adv. JAVA</td>
          </tr>
          <tr>
            <td style={thTdStyle}>1:20 - 2:10</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>PD / DM / EC</td>
            <td style={thTdStyle}>NET / Adv. JAVA</td>
          </tr>
          <tr>
            <td style={thStyle}>Class/Lab Location</td>
            <td style={thStyle}>214/Ele.Machine lab</td>
            <td style={thStyle}>118</td>
            <td style={thStyle}>214/Ele.Machine lab</td>
            <td style={thStyle}>LL3</td>
            <td style={thStyle}>LL5</td>
          </tr>
        </tbody>
      </table>

      {/* Additional Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Abbreviation</th>
            <th style={thStyle}>Subject Name and Code</th>
            <th style={thStyle}>Faculty Abbreviation</th>
            <th style={thStyle}>Faculty Name</th>
            <th style={thStyle}>TH/TU</th>
            <th style={thStyle}>PR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={thTdStyle}>TOC</td>
            <td style={thTdStyle}>Theory of Computation (CS321)</td>
            <td style={thTdStyle}>AkK</td>
            <td style={thTdStyle}>Prof. Anju Kakdad</td>
            <td style={thTdStyle}>3</td>
            <td style={thTdStyle}>0</td>
          </tr>
          <tr>
            <td style={thTdStyle}>AI/ML</td>
            <td style={thTdStyle}>Artificial Intelligence (CS456)</td>
            <td style={thTdStyle}>CP/CS</td>
            <td style={thTdStyle}>Prof. Chhaya Patel,Dr.chetan singadiya</td>
            <td style={thTdStyle}>3</td>
            <td style={thTdStyle}>2</td>
          </tr>
          <tr>
            <td style={thTdStyle}>ADV.JAVA</td>
            <td style={thTdStyle}>ADVANCED JAVA(CE931)</td>
            <td style={thTdStyle}>NC/MV</td>
            <td style={thTdStyle}>Prf.neha chauhan,prof.madhuri vaghasana</td>
            <td style={thTdStyle}>4</td>
            <td style={thTdStyle}>2</td>
          </tr>
          <tr>
            <td style={thTdStyle}>.NET</td>
            <td style={thTdStyle}>Web Application Devlopment using ASP.NET(CE927)</td>
            <td style={thTdStyle}>PJT/BD</td>
            <td style={thTdStyle}>Dr.paresh tanna, prof.Bhoomi danger</td>
            <td style={thTdStyle}>4</td>
            <td style={thTdStyle}>2</td>
          </tr>
          <tr>
            <td style={thTdStyle}>React</td>
            <td style={thTdStyle}>Full Stack Web Devlopment(CE636)</td>
            <td style={thTdStyle}>NV/SMS</td>
            <td style={thTdStyle}>Prof.nikung vadher, Arzoo sir</td>
            <td style={thTdStyle}>4</td>
            <td style={thTdStyle}>2</td>
          </tr>
          <tr>
            <td style={thTdStyle}>PD</td>
            <td style={thTdStyle}>Product Design(ME524)</td>
            <td style={thTdStyle}>DS</td>
            <td style={thTdStyle}>Prof.Deep Sangani</td>
            <td style={thTdStyle}>2</td>
            <td style={thTdStyle}>2</td>
          </tr>
          <tr>
            <td style={thTdStyle}>DM</td>
            <td style={thTdStyle}>Disaster Management(SEE004)</td>
            <td style={thTdStyle}>OD</td>
            <td style={thTdStyle}>Prof.Omkar dabhi</td>
            <td style={thTdStyle}>2</td>
            <td style={thTdStyle}>2</td>
          </tr>
          <tr>
            <td style={thTdStyle}>EC</td>
            <td style={thTdStyle}>Energy Conversation aand Sustainable Devlopment(SEE005)</td>
            <td style={thTdStyle}>RKI</td>
            <td style={thTdStyle}>Prof.Riaz israni</td>
            <td style={thTdStyle}>3</td>
            <td style={thTdStyle}>2</td>
          </tr>
        </tbody>
      </table>

      <div style={footerStyle}>
        <p><h3>Table Coordinator: XYZ | HOD: ABC | Director: DEF</h3></p>
      </div>
    </div>
  );
};

export default TimeTable;
