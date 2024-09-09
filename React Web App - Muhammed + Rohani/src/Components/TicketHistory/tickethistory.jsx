<div>
  {/* Potential Ticket History JSX for the SRV Ticketing Solution by Zunga Siakalima  */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Ticket History</title>
  {/* CSS and Table Linking */}
  <link rel="stylesheet" href="style.css" />
  <link rel="shortcut icon" type="x-icon" href="srvicon.png" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://cdn.datatables.net/2.1.4/css/dataTables.bootstrap5.css" />
  {/* CSS and Table Linking */}
  <div className="grid-container">
    {/* Font + Icon Linking */}
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
    {/* Header */}
    <header className="header">
      <div className="menu-icon" onclick="openSidebar()">
      </div>   
      <div className="header-right">
        <span className="material-icons-outlined">menu</span>
        <span className="material-icons-outlined">notifications</span>
        <span className="material-icons-outlined">email</span>
        <span className="material-icons-outlined">account_circle</span>
      </div></header>
    {/* Sidebar */}
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
        </div>
        <span className="material-icons-outlined" onclick="closeSidebar()" />
      </div>
      <img src="srvlogo.jpeg" style={{width: 260, height: 160}} />
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <span className="material-icons-outlined">support_agent</span> View Your Assigned Tickets 
        </li>
      </ul>
    </aside>
    {/* Main */}
    <main className="main-container">
      <div className="main-title">
        <h1>Ticket History</h1>
        <h2>Oustanding Ticket Summary</h2>
        <p style={{color: 'green'}}>In-Progress: 2</p>
        <p style={{color: 'darkorange'}}>Require Further Action: 5</p>
      </div>
      {/* Data Table: Full Data is Available by Uncollapsing :) */}
      <table id="example" className="table table-striped" style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Client Username</th>
            <th>Inquiry Tag</th>
            <th>Selected Priority</th>
            <th>Date Created</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SRV_97834281</td>
            <td>kaylasmith1938</td>
            <td>General Enquiry</td>
            <td>Low</td>
            <td>29/7/2024 - 12:04PM</td>
            <td style={{color: 'green'}}>In-Progress</td>
          </tr>
          <tr>
            <td>SRV_97834672</td>
            <td>johnthomson47</td>
            <td>Help For Someone Else</td>
            <td style={{color: 'red'}}>High</td>
            <td>28/7/2024 - 3:58PM</td>
            <td style={{color: 'green'}}>In-Progress</td>
          </tr>
          <tr>
            <td>SRV_88023025</td>
            <td>bengray</td>
            <td>Elder Abuse</td>
            <td style={{color: 'red'}}>High</td>
            <td>26/7/2024 - 10:03AM </td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_22982763</td>
            <td>josiewhite1945</td>
            <td>General Enquiry</td>
            <td>Low</td>
            <td>24/7/2024 - 4:13PM </td>
            <td style={{color: 'darkorange'}}>Requires Further Action</td>
          </tr>
          <tr>
            <td>SRV_38108278</td>
            <td>dylannguyen1</td>
            <td>General Enquiry</td>
            <td>Low</td>
            <td>23/7/2024 - 9:05AM </td>
            <td style={{color: 'darkorange'}}>Requires Further Action</td>
          </tr>
          <tr>
            <td>SRV_66581978</td>
            <td>jamieconnor</td>
            <td>Professional Staff Enquiry</td>
            <td>Medium</td>
            <td>23/7/2024 - 9:01AM </td>
            <td style={{color: 'darkorange'}}>Requires Further Action</td>
          </tr>
          <tr>
            <td>SRV_44281982</td>
            <td>tomdavis100</td>
            <td>Help For Someone Else</td>
            <td>Low</td>
            <td>20/7/2024 - 1:10PM</td>
            <td style={{color: 'darkorange'}}>Requires Further Action</td>
          </tr>
          <tr>
            <td>SRV_82452072</td>
            <td>jamesedwards14</td>
            <td>Neglect</td>
            <td>Medium</td>
            <td>19/7/2024 - 12:01PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_98327618</td>
            <td>emmabrown</td>
            <td>Elder Abuse</td>
            <td style={{color: 'red'}}>High</td>
            <td>19/7/2024 - 11:56AM</td>
            <td style={{color: 'darkorange'}}>Requires Further Action</td>
          </tr>
          <tr>
            <td>SRV_13920852</td>
            <td>staceychen1949</td>
            <td>Help For Someone Else</td>
            <td>Low</td>
            <td>18/7/2024 - 4:47PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_52928178</td>
            <td>fatimaahmed17</td>
            <td>General Enquiry</td>
            <td>Medium</td>
            <td>18/7/2024 - 12:19PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_47328198</td>
            <td>jennyazibo1980</td>
            <td>Elder Abuse</td>
            <td style={{color: 'red'}}>High</td>
            <td>18/7/2024 - 11:04AM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_13829082</td>
            <td>jasonali</td>
            <td>General Enquiry</td>
            <td>Medium</td>
            <td>18/7/2024 - 9:37AM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_78209827</td>
            <td>enqrique_escobar</td>
            <td>Neglect</td>
            <td style={{color: 'red'}}>High</td>
            <td>17/7/2024 - 3:04PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_81029672</td>
            <td>jackjones1776</td>
            <td>Help For Someone Else</td>
            <td>Low</td>
            <td>17/7/2024 - 12:29PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_11209382</td>
            <td>david_duplessis</td>
            <td>Elder Abuse</td>
            <td style={{color: 'red'}}>High</td>
            <td>17/7/2024 - 8:48AM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_28930672</td>
            <td>frank_lucas1950</td>
            <td>General Enquiry</td>
            <td>Low</td>
            <td>16/7/2024 - 4:15PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_38492818</td>
            <td>ozzy_cornell2009</td>
            <td>Neglect</td>
            <td>Medium</td>
            <td>16/7/2024 - 10:01AM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_17482098</td>
            <td>chris_cobain</td>
            <td>Help For Someone Else</td>
            <td>Low</td>
            <td>15/7/2024 - 3:18PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_72938291</td>
            <td>denzel_pitt</td>
            <td>General Enquiry</td>
            <td>Medium</td>
            <td>15/7/2024 - 12:12PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_17293819</td>
            <td>quentinhill1617</td>
            <td>General Enquiry</td>
            <td>Low</td>
            <td>14/7/2024 - 2:07PM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_48329182</td>
            <td>jonahjames</td>
            <td>Help For Someone Else</td>
            <td style={{color: 'red'}}>High</td>
            <td>13/7/2024 - 11:11AM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
          <tr>
            <td>SRV_29390182</td>
            <td>jimmyjenkings15</td>
            <td>General Enquiry</td>
            <td style={{color: 'red'}}>High</td>
            <td>13/7/2024 - 11:03AM</td>
            <td style={{color: 'blue'}}>Resolved</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Ticket ID</th>
            <th>Client Username</th>
            <th>Inquiry Tag</th>
            <th>Selected Priority</th>
            <th>Date Created</th>
            <th>Status</th>
          </tr>
        </tfoot>
      </table>
      {/* JS Linking */}
    </main></div></div>