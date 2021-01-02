import React from 'react';
import SectionContainer from '../styles/SectionContainer';

export const Work = () => (
  <SectionContainer id='work'>
    <h2>Work Experience</h2>
    <div className='title'>
      <h4>DevOps Engineer, HBO, New York, NY (Cognizant Contract)</h4>
      <span>Aug. 2019 - Present</span>
    </div>
    <ul>
      <li>Enhanced the cloud platform by automating manual tasks with serverless functions at no cost</li>
      <li>Engineered lambda functions to generate AWS services utilization reports to drive down costs</li>
      <li>Developed a website to scan application servers and display informational page that associates different servers based on tags</li>
      <li>Wrote custom scripts to monitor cloud infrastructure and alert support team instead of waiting for user complaints</li>
      <li>Assumed pivotal role in one of the company's largest cloud migrations</li>
    </ul>
    
    <div className='title'>
      <h4>Network Engineer, Millennium Communications Group, East Hanover, NJ</h4>
      <span>July 2018 - Dec. 2018</span>
    </div>
    <ul>
      <li>Programmed routers, switches, and other network devices</li>
      <li>Performed network design, upgrade, and troubleshooting</li>
      <li>Communicated with clients on project requirements</li>
    </ul>
  </SectionContainer>
);

export default Work;